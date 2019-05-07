<template>
    <div class="details-wrap">
        <span class="link" @click="goBack()">Back to List</span>
        <videoDetailCard :id="id"></videoDetailCard>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import videoService from '../../services/videoService';
    import videoDetailCard from './videoDetailCard.vue';

    export default {
        name: "videoDetails",
        components: {videoDetailCard},
        data() {
            return {
                id: 0
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
    };
</script>

<style lang="less">
    .details-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .link{
            color: mediumblue;
            font-size: 12px;
            cursor: pointer;
            &:hover{
                font-size: 13px;
                color: #2c3e50;
            }
        }
    }

</style>