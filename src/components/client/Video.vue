<script setup lang="ts">
import Hls from "hls.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

let hls: any;
const video = ref(null);

// 初始化播放器
const initPlayer = () => {
  if (Hls.isSupported()) {
    hls = new Hls();
    console.log(hls);
    hls.loadSource("/hls/test.m3u8");
    hls.attachMedia(video.value);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.value.play();
    });
    hls.on(Hls.Events.ERROR, (event: any, data: any) => {
      // console.log(event, data);
      // 监听出错事件
      console.log("加载失败");
    });
  }
  if (video.value.canPlayType("application/vnd.apple.mpegurl")) {
    video.value.src = "/hls/test.m3u8";
    video.value.addEventListener("loadedmetadata", function () {
      video.play();
    });
  }
};
onMounted(() => {
  initPlayer();
});
onBeforeUnmount(() => {});
</script>

<template>
  <video
    id="dplayer"
    ref="video"
    muted
    className="z-0 h-full w-full object-cover object-center"
    autoplay
    loop
  ></video>
</template>
