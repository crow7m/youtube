<template>
    <div class="video-list-wrap"  v-if="getVideosArr.length">
        <video-item
                    v-for="(singleVideo, index) in getVideosArr"
                    :videoData="singleVideo"
                    :key="index"></video-item>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import videoService from '../../services/videoService';
    import videoItem from './videoItem.vue';

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
                totalLimit: null,
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
                                             self.totalLimit = data.pageInfo.totalResults;
                                             self.updateVideos(data.items);
                                             this.busy = false;
                                         },
                                         (error) => {
                                             this.isComplete = true;
                                             console.error(error, 'error videos get')
                                         });
            },
            scrollHandler(){
                if(this.$route.name == 'home'){
                    this.bottom = this.bottomVisible();
                    if(this.bottomVisible()){
                        if(this.totalLimit <= this.getVideosArr.length)return
                        this.requestVideos();
                    }
                }
            }
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.scrollHandler);
        },
        created() {
            window.addEventListener('scroll', this.scrollHandler);
            this.requestVideos();
        }
    };
</script>

<style lang="less">
    .video-list-wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        max-width: 980px; //limit to be centered
        width: 100%;
    }
</style>
