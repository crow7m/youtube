<template>
    <div class="video-details-card">
        <div class="video-card">

            <div class="header">
                <span class="title">{{ellipsedTitle}}</span>
            </div>
            <div class="thumbnail-wrap">
                <img class="video-thumbnail" :src="currentVideo.thumbnail" alt="">
            </div>
            <div class="footer-info">
                 <ul class="details-list">
                     <li>
                        <span>Channel Title:</span>
                         <span> {{currentVideo.channelTitle}}</span>
                     </li>
                     <li v-for="(item, index) in getVideoDetails" :key="index">
                        <span> {{item.label}}:</span>
                         <span>{{item.value}}</span>
                     </li>
                 </ul>
                <button class="video-action" @click="openVideo(this.id)">
                    <span>Watch on YouTube</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import videoService from "../../services/videoService";

    export default {
        name: "videoDetailCard",
        props: {
            id: {
                type: String,
                required: true
            },
        },
        computed: {
           ...mapGetters(['getActiveVideo', 'getVideoDetails']),
            currentVideo(){
               if(this.getActiveVideo){
                   return this.getActiveVideo
               }
            },
            ellipsedTitle(){
               if(this.currentVideo.title && this.currentVideo.title.length > 21){
               let ellips = this.currentVideo.title.substring(1, 21);
               return `${ellips}...`
               }
                // this.currentVideo.title
            }
        },
        methods: {
            ...mapActions(['updateDetails']),
            openVideo(videoId) {
                let link = `https://www.youtube.com/watch?v=${videoId}`;
                window.open(link, '_blank')

            },
            getVideoDetail() {
                videoService.getSingleVideoDetails(this.id)
                    .then(({data}) => {
                            //will always return one one item, no need for loop or map
                            let item = data.items[0];
                            this.updateDetails(item);
                            // this.details = updateDetails
                            console.log('details', data)
                        },
                        (error) => {
                            console.log(error, 'error')
                        })
            }
        },
        created() {
            this.getVideoDetail()
        }
    };
</script>

<style lang="less">
    @cardWidth: 260px;
    .video-details-card{
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
            padding: 24px;
            border-radius: 4px;
            cursor: pointer;
        }
        .header{
            text-align: left;
            padding: 8px 0 8px 0;
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-bottom: 32px;
            .title{
                font-size: 12px;
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
                max-width: 260px;
                height: auto;
            }
        }
        .footer-info{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 12px 24px;
            width: 100%;
        }
        .details-list{
            width: 100%;
            padding: 12px 0;
            margin: 0;
            list-style: none;
            text-align: left;
        }
        .video-action {
            color: #ed3330;
            cursor: pointer;
            text-transform: uppercase;
            padding: 12px 0;
            border-radius: 5px;
            display: flex;
            border: none;
            background: transparent;
            width: 100%;
            &:hover {
                letter-spacing: 1px;
            }
        }
    }

</style>