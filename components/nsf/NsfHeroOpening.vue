<template>
    <div class="hero-opening" :data-video-finish="videoStmt">
        <div class="video-container">
            <video ref="video" playsinline webkit-playsinline class="hero-opening__video" :poster="require('@/assets/images/thumbnail_01.png')" preload="auto" muted @loadedmetadata="videoStart" @ended="videoEnded">
                <source src="/2022/assets/videos/top-feature-logo.mp4">
            </video>
        </div>
        <img
            ref="logo"
            class="hero-opening__logo"
            alt="WEAVEのロゴ"
            src="@/assets/images/logo/main_gradation.svg"
            @load="setWidth"
        >
    </div>
</template>

<script>
export default {
    data(){
        return {
            videoStmt:'loading',
            arriveTop: false,
            logoDefaultWidth: 45,
        }
    },
    mounted() {
        this.setWidth();
        window.addEventListener('resize', this.setWidth);
    },
    destroyed() {
      window.removeEventListener('resize', this.setWidth);
      window.removeEventListener('scroll', this.zoomWithScroll);
    },
    methods: {
        setWidth() {
            this.tgt = this.$refs.logo;
            this.currentWidth = this.tgt.clientWidth;
            this.viewWidth = window.innerWidth / 100;

            this.tgt.style.width = `${this.viewWidth * this.logoDefaultWidth + scrollY}px`;
        },
        videoStart() {
            this.$refs.video.play();
            setTimeout(()=>{
                this.videoStmt = 'almost';
            },6950);
        },
        videoEnded() {
            this.videoStmt = 'ended';
            window.addEventListener('scroll', this.zoomWithScroll);
        },
        zoomWithScroll() {
            const scrollY = window.scrollY / 3;
            this.tgt.style.width = `${this.viewWidth * this.logoDefaultWidth + scrollY}px`;
        },
    },
}
</script>

<style lang="scss" scoped>
.hero-opening{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -100;
    overflow-x: hidden;
    &__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
        transition: opacity 0.75s;
    }
    &__logo {
        position: absolute;
        width: 100px;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%,-50%);
        transition: opacity 0.75s, width 0.1s;
        max-height: 100vh;
    }
}
.video-container {
    position: relative;
    height: 100%;
    opacity: 1;
    transition: opacity 0.75s;
}

[data-video-finish=loading] {
    .hero-opening {
        &__logo {
            opacity: 0;
        }
    }
}
[data-video-finish=ended] {
    .video-container {
        opacity: 0;
    }
}
</style>
