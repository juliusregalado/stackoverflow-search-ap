import axios from 'axios';

const apiServices = {};

// const token = 'VWb1(Zaacmcx21ODN8aiew))';

apiServices.getSearchResult = (tags) => {
    return axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=25&tagged=${tags}&site=stackoverflow&filter=withbody&key=ba0fNlfuCBC0kGb6mOaOdw((`);
}

apiServices.getAcceptedAnswers = (id) => {
    return axios.get(`https://api.stackexchange.com/2.2/answers/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody&key=ba0fNlfuCBC0kGb6mOaOdw((`)
}



export default apiServices;