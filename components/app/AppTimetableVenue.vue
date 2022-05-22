<template>
    <div class="timetable-venue">
        <div class="timetable-venue__item timetable-venue__item--blue">
            <p>講堂</p>
        </div>
        <div class="timetable-venue__item">
            <p>野外</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.timetable-venue {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-bottom: 2rem;
    &__item {
        width: 48%;
        padding: 1rem 0 1.5rem 0;
        background-image: linear-gradient(155deg, #e8ca06 -20%, #eeae2f 30%, #EC3A80 120%);
        clip-path: polygon(0% 0%, 100% 0%, 100% 83%, 55% 83%, 50% 100%, 45% 83%, 0% 83%);
        &--blue {
            background-image: linear-gradient(155deg, #06e0e0 10%, #259ce6 50%, #823AEC 120%);
        }
        p {
            font-weight: bold;
            color: #fff;
            margin: 0;
            text-align: center;
        }
    }
}
</style>
