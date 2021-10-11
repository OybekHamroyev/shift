import { GET_MAINPAGE_DATA_REQUEST_START, GET_MAINPAGE_DATA_REQUEST_SUCCESS} from '../types';
const initialState = {
    starter:[],
    about:[],
    whyus:[],
    courses:[],
    gallery:[],
    ourteam:[],
    footer:[],
    isLoading:false
}
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAINPAGE_DATA_REQUEST_START: return { isLoading: true }
        case GET_MAINPAGE_DATA_REQUEST_SUCCESS: return {
            ...state, isLoading: false,
            starter: action.payload.starter,
            about: action.payload.about,
            whyus: action.payload.whyus,
            courses: action.payload.courses,
            gallery: action.payload.gallery,
            ourteam: action.payload.ourteam,
            footer: action.payload.footer
        }
        default: return state;
    }
};

export default mainReducer;