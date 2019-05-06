<template>
    <div class="video-item-wrap">
        <div class="video-card">
            <div class="header">
                <span class="title">{{videoData.title}}</span>
            </div>
            <div class="thumbnail-wrap">
                <img class="video-thumbnail" :src="videoData.thumbnail" alt="">
            </div>
            <div class="footer-info">
                <button class="video-action" @click="openVideo(videoData.id)">
                    Open Video</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videoItem",
        props: {
            videoData: {
                type: Object,
            },
        },
        methods: {
            openVideo(videoId) {
                let link = `https://www.youtube.com/watch?v=${videoId}`;
                window.open(link, '_blank')

            }
        },
    };
</script>

<style lang=less>
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
        .header{
            text-align: left;
            padding: 8px 0 8px 0;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: row;
            width: 100%;
            .title{
                font-size: 16px;
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
            padding: 12px;
        }
        .video-action {
            color: #fff !important;
            cursor: pointer;
            text-transform: uppercase;
            background: #ed3330;
            padding: 12px 24px;
            border-radius: 5px;
            display: flex;
            border: none;
            &:hover {
                background: #434343;
                letter-spacing: 1px;
                -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
                -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
                box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
                transition: all 0.4s ease 0s;
            }
        }
    }

</style>