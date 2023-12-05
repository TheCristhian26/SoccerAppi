import axios from "axios";

const BASE_URL= 'https://www.scorebat.com/video-api/v3/feed/?token='
const VIDEO_URL ='https://www.scorebat.com/embed/matchview/token=' 
const Competition_URL='https://www.scorebat.com/embed/competition/spain-la-liga/?token='
const BASE_IMG = 'https://www.scorebat.com/og/m/MTMzMjkxXzE3MDE1ODE0MDlfMjRjMjgwMDkwYjUyODA3M2UzMGVjN2E0MmM4MTM1MDkwYWM3YjQyOA=='



export default{

    async getSoccers(){
        return await axios.get(`${BASE_URL}MTMzMjkxXzE3MDE1ODE0MDlfMjRjMjgwMDkwYjUyODA3M2UzMGVjN2E0MmM4MTM1MDkwYWM3YjQyOA==`)
        .then(response =>{
            return response.data.response
        })
        .catch(error =>{
            console.log(error)
        })
    },
    async getMatchUrl(id:any) {
        return await axios.get(`${BASE_URL}videos/${id}/videos?video_url=${VIDEO_URL}`)
        .then(response => {
            return response.data.matchviewUrl
        })
        .catch(error => {
            console.log(error)
        })
    },

    basevideoUrl : () => {
        return VIDEO_URL
    },
    async getCompetition(id:any) {
        return await axios.get(`${BASE_URL}videos/${id}/videos?competition_url=${Competition_URL}`)
        .then(response => {
            return response.data.competitionUrl
        })
        .catch(error => {
            console.log(error)
        })
    },

    basecompetitioUrl : () => {
        return Competition_URL
    }


}