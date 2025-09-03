import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Spinner from "../components/Spinner"
import {useAppDispatch, useAppSelector} from "../hooks/useApp" 
import { getHomePageVideos } from '../store/reducer/getHomePageVideos'
import InfiniteScroll from 'react-infinite-scroll-component'
import { DiDart } from 'react-icons/di'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import { clearVideos } from '../features/youtube/youtubeSlice'
import { getSearchPageVideos } from '../store/reducer/getSearchPageVideos'
import SearchCard from '../components/SearchCard'

const Home = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
      dispatch(clearVideos());
      if(searchTerm === "")navigate("/")
        else(
            dispatch(getSearchPageVideos(false))
        )
      console.log(videos);
  },[dispatch, navigate, searchTerm])

  return (
    <div className='max-h-screen overflow-auto'>
        <div style={{height:"7.5vh"}}>
          <Navbar />
        </div>
        <div className='flex' style={{height:"92.5vh"}}>
          <Sidebar />
          {
            videos.length ? (
                <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
              <InfiniteScroll 
                dataLength={videos.length}
                next={() => dispatch(getSearchPageVideos(true))}
                hasMore={videos.length<500}
                loader={<Spinner />}
                height={650}
                >
                  
                    {videos.map((item) => {
                      return ( <div className='my-5 '>
                        <SearchCard data={item} key={item.videoId}/>
                     </div> )
                    })}
                  
              </InfiniteScroll>
              </div>
            ) : (
                <Spinner />
            )
          }
        </div>
    </div>
  )
}

export default Home