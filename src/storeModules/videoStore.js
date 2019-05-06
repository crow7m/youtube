import videoService from '../services/videoService'
const state = {
    videosArray: [],
};
const getters = {
    getVideosArr : state => state.videosArray,
};

const mutations = {
    setVideosData(state, val) {
        state.videosArray = state.videosArray.concat(val)
    }
};

const actions = {
    updateVideos({commit, state}, val) {
        console.log('store', val )
        let formatted = videoService.createVideoItem(val)
        // val.map(videoService.createVideoItem())
        console.log('store formatted', formatted )
        commit('setVideosData', formatted)
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}