<template>
    <article>
        <div>
            <h1 class="ja-narrow">
                WEAVE<br>きてくれてありがとう
            </h1>
        </div>
        <p>©︎2022 Nagata School Festival All rights reserved.</p>
    </article>
</template>


<script>
export default {
    layout: 'clear',
    head() {
        return {
            title: '準備中',
        }
    },
}
</script>

<style lang="scss" scoped>
body {
    text-align: center;
}
h1 {
    display: block;
    font-size: calc(15px + 2vw);
}
div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
p {
    position: fixed;
    color: #aaa;
    width: 100%;
    bottom: 20px;
    left: 0;
}
</style>
