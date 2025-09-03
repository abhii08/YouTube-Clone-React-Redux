import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext, {getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState, videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=coding&maxResults=1&key=${API_KEY}`);

        const items = response.data.items;

        const parsedData = await parseData(items);

        return {parsedData:[...videos, ...parsedData], nextPageToken: nextPageTokenFromState};
    }
)