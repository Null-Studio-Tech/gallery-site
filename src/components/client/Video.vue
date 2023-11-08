<script setup lang="ts">
import Hls from "hls.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

interface params {
    src: string,
    controls?: boolean
}
const props = defineProps<params>()

let hls: Hls;

const videoEle =  ref<HTMLMediaElement | null>(null);

// 初始化播放器
const initPlayer = () => {
  console.log(videoEle)
  if (videoEle.value === null) return;
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(props.src);
    hls.attachMedia(videoEle.value);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoEle.value?.play();
    });
    hls.on(Hls.Events.ERROR, (event: any, data: any) => {
      // console.log(event, data);
      // 监听出错事件
      console.log("加载失败");
    });
  }
  if (videoEle.value.canPlayType("application/vnd.apple.mpegurl")) {
    videoEle.value.src = props.src;
    videoEle.value.addEventListener("loadedmetadata", function () {
      videoEle.value?.play();
    });
  }
};
onMounted(() => {
  initPlayer();
});
onBeforeUnmount(() => { });
</script>

<template>
  <video
    id="player"
    ref="videoEle"
    muted
    className="z-0 h-full w-full object-cover object-center"
    autoplay
    :controls="controls"
    loop
  ></video>
</template>
