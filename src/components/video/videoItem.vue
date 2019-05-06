<template>
    <div class="video-item-wrap">
        <div class="video-card">
            <div class="thumbnail-wrap">
                <img class="video-thumbnail" :src="videoData.thumbnail" alt="video preview">
            </div>
            <div class="title-holder">
                <span class="title">{{ellipseTitle || 'sdfsdfsdfdsf'}}</span>
            </div>
            <div class="footer-info">
                <a class="video-action" @click="seeDetails()">
                <span> Lets watch</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "videoItem",
        props: {
            videoData: {
                type: Object,
            },
        },
        computed: {
            ellipseTitle(){
                if(this.videoData.title && this.videoData.title.length > 21){
                    let ellipsed = this.videoData.title.substring(1, 21);
                    return `${ellipsed}...`
                }
                // this.currentVideo.title
            }
        },
        methods: {
            ...mapActions(['updateActiveVideo']),
            seeDetails() {
                let activeVideo = {
                    title: this.videoData.title,
                    thumbnail: this.videoData.thumbnail,
                    channelTitle: this.videoData.channelTitle

                };
               this.updateActiveVideo(activeVideo);
               this.$router.push({name: 'videoDetails', params: { id: this.videoData.id }})

            }
        },
    };
</script>

<style lang="less">
    @cardWidth: 260px;
    .video-item-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .video-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: @cardWidth;
            min-height: 320px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            margin: 12px 12px;
            border-radius: 4px;
            cursor: pointer;
        }
        .title-holder{
            text-align: left;
            padding: 8px 0 8px 0;
            display: flex;
            flex-direction: row;
            width: 100%;
            .title{
                font-size: 1.5em;
                color: #000000;
                text-align: left;
                padding-left: 12px;
            }
        }
        .thumbnail-wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            .video-thumbnail{
                width: 260px;
                height: auto;
                max-height: 180px;
            }
        }
        .footer-info{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 100%;
            text-align: left;
        }
        .video-action {
            color: #ed3330;
            cursor: pointer;
            text-transform: uppercase;
            /*background: #ed3330;*/
            padding: 12px 24px;
            border-radius: 5px;
            display: flex;
            border: none;
            &:hover {
                letter-spacing: 1px;
            }
        }
    }

</style>