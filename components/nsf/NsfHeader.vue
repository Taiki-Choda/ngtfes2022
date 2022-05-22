<template>
    <div
      ref="headerWrap"
      class="header-wrap"
      :data-nav-open='headerStmt'
    >
        <header class="header">
            <div class="header__background"></div>
        </header>
        <button
          class="header-btn"
          role="button"
          tabindex="0"
          :aria-label='helperOpenClose'
          @click="headerOpenClose"
        >
            <span class="header-btn__label">MENU</span>
            <div class="header-btn__lines">
                <span class="header-btn__line"></span>
                <span class="header-btn__line"></span>
                <span class="header-btn__line"></span>
            </div>
        </button>
        <nav class="header-nav">
            <div class="header-nav__container">
                <div class="header-nav__background"></div>
                <ul style="margin-bottom: 2.5rem">
                    <li v-for="item in pages" :key="item.path">
                        <nuxt-link :to="{path:item.path}" @click.native="headerOpenClose">{{item.name}}</nuxt-link>
                    </li>
                </ul>
                <layout-row>
                    <nsf-pickup-button @click.native="headerOpenClose"></nsf-pickup-button>
                </layout-row>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pages: [
                    {
                        path:"/",
                        name:"トップページ"
                    },
                    // {
                    //     path: '/covid-19/health-safety',
                    //     name: '衛生安全'
                    // },
                    // {
                    //     path: '/site-map',
                    //     name: 'サイトマップ'
                    // },
                    // {
                    //     path:"/booth",
                    //     name:"模擬店"
                    // },
                    // {
                    //     path:"/timetable",
                    //     name:"タイムテーブル"
                    // },
                    // {
                    //     path:"/map",
                    //     name:"マップ"
                    // },
                    // {
                    //     path:"/events/",
                    //     name:"企画紹介"
                    // },
                    // {
                    //     path:"/team/",
                    //     name:"スタッフ紹介"
                    // },
                    {
                        path: '/covid-19/advance-reservation',
                        name: '入場予約について'
                    },
                ],
                headerStmt: "false",
                helperOpenClose: "ヘッダーメニューを開く",
            }
        },
        destroyed() {
            const currentStmt = this.$refs.headerWrap.dataset.navOpen;
            if (currentStmt === "true") {
                this.headerStmt = "false";
                this.helperOpenClose = "ヘッダーメニューを開く";
            }
        },
        methods: {
            headerOpenClose() {
                const currentStmt = this.$refs.headerWrap.dataset.navOpen;
                if (currentStmt === "true") {
                    this.headerStmt = "false";
                    this.helperOpenClose = "ヘッダーメニューを開く";
                } else {
                    this.headerStmt = "true";
                    this.helperOpenClose = "ヘッダーメニューを閉じる";
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    z-index: 1000;
}
.header {
    position: relative;
    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: rgb(255, 255, 255);
        box-shadow: $box-shadow;
        transform-origin: left center;
        transition: height 0.35s cubic-bezier(.25,.76,.74,.31) 0.5s;
        z-index: 1000;
    }
}
.header-btn {
    position: absolute;
    top: 3.5vh;
    right: 5.5%;
    width: 123px;
    height: 45px;
    border-radius: 30px;
    cursor: pointer;
    transition: width 0.5s;
    background-color: $theme;
    box-shadow: $box-shadow;
    z-index: 1300;
    &__label {
        position: absolute;
        left: 15px;
        top: 52%;
        user-select: none;
        display: block;
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
        line-height: 100%;
        font-size: 14px;
        letter-spacing: 0.5px;
        width: 60px;
        transition: width 0.5s, opacity 0.5s;
        overflow: hidden;
        transform: translateY(-50%);
    }
    &__lines {
        position: absolute;
        top: 50%;
        right: 29px;
        width: 22.5px;
        height: 40%;
        transform: translate(50%,-50%);
        transition: right 0.3s;
    }
    &__line {
        top: 0;
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        top: calc(50% - 1px);
        right: 0;
        background-color: #ffffff;
        transform: translate(0,-50%) rotate(0deg);
        transition: width 0.35s ease 0s, transform 0.3s ease 0.1s, top 0.3s ease 0.1s;
        &:first-child {
            top: 12%;
        }
        &:nth-child(2) {
            width: 65%;
            transition: width 0.35s ease 0.1s;
        }
        &:last-child {
            width: 80%;
            top: 85%;
        }
    }
}
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1100;
  &__container {
    position: absolute;
    width: 100%;
    max-height: 90%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease 0s;
  }
  &__background {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      height: 100%;
      background-image: url("@/assets/images/logo/main_gradation.svg");
      background-repeat: no-repeat;
      background-position: center center;
      z-index: -1;
      opacity: 0.25;
      transform: translate(-50%,-50%);
  }
  ul {
      margin: 0;
      padding-left: 2.5rem;
      list-style: none;
      li {
          font-weight: bold;
          font-size: 1.35rem;
          margin-top: 1rem;
      }
  }
}
[data-nav-open=true] {
    .header {
        &__logo {
            opacity: 0;
            pointer-events: none;
        }
        &__background {
            height: 100%;
            transition: height 0.35s cubic-bezier(.25,.76,.74,.31) 0s;
        }
    }
    .header-btn {
        width: 45px;
        transition: transform 0.4s ease-in-out 0.4s, width 0.5s;
        &__label {
            opacity: 0;
            width: 0;
        }
        &__lines {
            right: 22.5px;
        }
        &__line {
            width: 100%;
            &:nth-child(2) {
                width: 0%;
                transition: width 0.35s ease 0s;
            }
            &:first-child, &:last-child {
                transition: width 0.45s ease 0.1s, transform 0.35s ease 0.4s, top 0.3s ease 0.15s;
            }
            &:first-child {
                transform: translateX(0) rotate(45deg);
                top: 50%;
            }
            &:last-child {
                transform: translateX(0) rotate(-45deg);
                top: 50%;
            }
        }
    }
    .header-nav {
        pointer-events: auto;
        &__container {
            opacity: 1;
            transition: opacity 0.3s ease 0.65s;
        }
        &::before {
            transition: bottom 1.35s ease 0.15s;
        }
        &::after {
            transition: bottom 1.1s ease 0s;
        }
    }
}
</style>
