<template>
    <div>
        <div class="hero">
            <img class="hero__pic" src="@/assets/images/team/team_01.png" alt="文化祭スタッフの写真。複数人で幕塗りをしている。">
        </div>
        <app-block-normal style="margin-top: 7rem;">
            <app-heading-cool title="織り上げろ、私たちの夢舞台！" sub="文化祭スタッフ"></app-heading-cool>
            <p>私たち文化祭スタッフは、文化祭の企画・運営実行組織です。「WEAVE」をテーマに、それぞれの個性が輝き、未だかつて目にしたことのない感動に溢れる時間を創り上げます。<br>同時に衛生安全に対する責任を理解し、安全な文化祭の遂行へと導きます。</p>
        </app-block-normal>
        <app-heading-block title="私たちの組織">
            <p>文化祭スタッフは、総計14の役職・部署から構成されています。<br>無数にあるとも思える仕事を、各部署が確実にこなし、クオリティーの高い文化祭の開催を目指します。</p>

        </app-heading-block>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data(){
        return {

        }
    },
    head() {
        return {
            title: '文化祭スタッフについて',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校文化祭2022「WEAVE」を作りあげる文化祭スタッフについて紹介します。個性を織り合わせ最高の時間を創ります。同時に衛生安全に対する責任を理解して安全な文化祭の遂行へと導きます。' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.logo-main {
    width: 80%;
    max-width: 450px;
}
.hero {
    position: relative;
    &__pic {
        width: 100%;
        max-height: 100vh;
        object-fit: cover;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 40%;
        left: 0;
        bottom: 0;
        background: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgb(255, 255, 255) 100%);
    }
}
</style>
