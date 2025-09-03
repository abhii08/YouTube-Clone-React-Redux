
export default function Card({data}) {
    console.log(data)
  return (
    <div>
        <div>
            <div>
                <span>
                    {data.videoDuration}
                </span>
                <img src={data.videoThumbnail}/>
            </div>
        </div>
    </div>
  )
}