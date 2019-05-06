import axios from "axios";

const path = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet`;

function videoItem(objInit) {
    this.src = objInit.src || '';
    this.thumbnail = objInit.snippet.thumbnails.high.url;
    this.title = objInit.snippet.title;
    this.id = objInit.id.videoId;
    this.datePublished = objInit.snippet.publishedAt
    this.description = objInit.snippet.description
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
           url = `${path}&pageToken=${configObj.nextPageToken}&maxResults=${configObj.quantaty}&order=viewcount`
       }else{
           url = `${path}&&maxResults=${configObj.quantaty}&order=viewcount`
       }
        return axios.get(url)
                    .then((resp) => {
                        return resp;
                    }, (error) => {
                        return error;
                    });
    },
    //create client side formatted obj to not be binded to youtube format
    createVideoItem: (arr) => {
      return arr.map(objInit => {
            return new videoItem(objInit);
        });
    }

};
