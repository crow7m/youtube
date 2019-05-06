import videoService from '../services/videoService'

const state = {
    videosArray: [],
    videoDetails: null,
    currentActiveVideo: {
        title: '',
        thumbnail: '',
        channelTitle: ''
    }
};
const getters = {
    getVideosArr: state => state.videosArray,
    getVideoDetails: state => state.videoDetails,
    getActiveVideo: state => state.currentActiveVideo,
};

const mutations = {
    setVideosData(state, val) {
        state.videosArray = state.videosArray.concat(val)
    },
    setVideosDetails(state, val) {
        state.videoDetails = val
    },
    setActiveVideo(state, val) {
        state.currentActiveVideo = val
    },

};

const actions = {
    updateVideos({commit, state}, val) {
        let formatted = videoService.createVideoItem(val)
        commit('setVideosData', formatted)
    },
    updateActiveVideo({commit, state}, val) {
        commit('setActiveVideo', val)
    },
    updateDetails({commit, state}, val) {
        console.log('store details', val)
        let formatted = videoService.createVideoDetailsItem(val)
        console.log('store formatted', formatted)
        commit('setVideosDetails', formatted)
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}