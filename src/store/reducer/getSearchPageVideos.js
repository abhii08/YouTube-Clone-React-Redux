import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext, {getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState, videos, searchTerm},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}
            &key=${API_KEY}&type=video
            &${isNext ?`pageToken=${nextPageTokenFromState}`
            :""}`);

        const items = response.data.items;

        const parsedData = await parseData(items);

        return {parsedData:[...videos, ...parsedData], nextPageToken: nextPageTokenFromState};
    }
)