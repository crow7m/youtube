<template>
    <div class="video-list-wrap">
        <video-item v-if="getVideosArr.length"
                    v-for="(singleVideo, index) in getVideosArr"
                    :videoData="singleVideo"
                    :key="index"></video-item>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import videoService from '../services/videoService';
    import videoItem from '@/components/videoItem.vue';

    export default {
        name: 'HelloWorld',
        components: {
            videoItem,
        },
        data() {
            return {
                quantaty: 10,
                nextPageToken: '',
                bottom: false,
                busy: false,
            };
        },
        computed: {
            ...mapGetters(['getVideosArr'])
        },
        methods: {
            ...mapActions(['updateVideos']),
            bottomVisible() {
                const scrollY = window.scrollY;
                const visible = document.documentElement.clientHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible;
            },
            requestVideos() {
                let self = this;
                return videoService.getVideos({quantaty: self.quantaty, nextPageToken: self.nextPageToken ? self.nextPageToken: '' })
                                   .then(({data}) => {
                                       this.busy = true;
                                             self.nextPageToken = data.nextPageToken;
                                             self.updateVideos(data.items);
                                             if(this.bottomVisible()) {
                                                 this.requestVideos();
                                             }
                                             this.busy = false;
                                         },
                                         (error) => {
                                             this.isComplete = true;
                                             console.log(error, 'error getting videos');
                                         });
            },
        },
        created() {
            window.addEventListener('scroll', () => {
                this.bottom = this.bottomVisible();
                if(this.bottom){
                    this.requestVideos();
                }
            });
            this.requestVideos();


        }
    };
</script>

<style lang="less">
    .video-list-wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 0 auto;
        max-width: 980px;
        width: 100%
    }
</style>
