import axios from "axios";
        /*
        * Add your api key here
        * */
const apiKey = 'AIzaSyDDXQZPV4H9oKc52-X101LGdeEQ0iSpBlA';

const pathSearch = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&metrics=views`;
const pathVideoSpecific = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=statistics`;
function videoItem(objInit) {
    //added all props in cse of need
    this.thumbnail = objInit.snippet.thumbnails.high.url || '';
    this.title = objInit.snippet.title || '';
    this.id = objInit.id.videoId || '';
    this.datePublished = objInit.snippet.publishedAt || '';
    this.description = objInit.snippet.description || '';
    this.channelTitle = objInit.snippet.channelTitle || '';
}
function videoDetailsItem(objInit) {
    this.likeCount = {label : 'Likes', value:  objInit.statistics.likeCount || 0};
    this.viewCount = {label: 'Views',value: objInit.statistics.viewCount || 0};
}
export default {
    getVideos: (params) => {
       let configObj = {
           quantaty: params.quantaty,
           nextPageToken: params.nextPageToken
       }
       let url ='';
       //have to check for nextPage token otherwise youtube API is upset
       if(configObj.nextPageToken){
           url = `${pathSearch}&pageToken=${configObj.nextPageToken}&maxResults=${configObj.quantaty}&order=viewcount`
       }else{
           url = `${pathSearch}&&maxResults=${configObj.quantaty}&order=viewcount`
       }
        return axios.get(url)
                    .then((resp) => {
                        return resp;
                    }, (error) => {
                        return error;
                    });
    },
    getSingleVideoDetails: (id) => {
        let url = `${pathVideoSpecific}&id=${id}`;
        return axios.get(url)
            .then((resp) => {
                return resp;
            }, (error) => {
                return error;
            });
    },
    //create client side formatted obj to not be binded to youtube format for video
    createVideoItem: (arr) => {
      return arr.map(objInit => {
            return new videoItem(objInit);
        });
    },
    createVideoDetailsItem: (obj) => {
      return new videoDetailsItem(obj)
    }
};
