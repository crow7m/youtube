<template>
    <div class="home">

        <videoList/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import videoList from '../components/video/videoList.vue'
    export default {
        name: 'home',
        components: {
            videoList,
        }
    }
</script>
