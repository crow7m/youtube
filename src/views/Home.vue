<template>
    <div class="home">
        <videoList/>
    </div>
</template>

<script>
    import videoList from '../components/video/videoList.vue'
    export default {
        name: 'home',
        components: {
            videoList,
        }
    }
</script>
