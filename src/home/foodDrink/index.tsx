import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import FoodIcon from "../../assets/icons/food_icon.svg"
interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    publishTime: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface HomeVideosPageProps {
  relatedToVideoId: string;
}

const FoodDrink: React.FC<HomeVideosPageProps> = ({ relatedToVideoId }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {

      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
          part: 'snippet,id',
          order: 'date',
          maxResults: '50'
        },
        headers: {
          'x-rapidapi-key': '2cda5ec56emsheea3269f4e62db7p1fd1f9jsn7fc63b6791bc',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request<{ items: Video[] }>(options);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [relatedToVideoId]);

  return (
    <div className="py-[59px] ">
      <div className="flex items-center gap-4 mb-4">
<img src={FoodIcon} alt="" />
        <span className="font-bold text-[26px]">Food & Drink</span>
        <p className='text-third font-normal  text-[16px]'>Recommended channel for you</p>
      </div>

      <div className="max-w-screen-lg mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          navigation
          pagination={{ clickable: true
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id.videoId} className="w-[250px] flex-shrink-0 bg-white rounded-lg overflow-hidden relative">
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-40 object-cover" />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">4:15</div>
              <h3 className="text-[16px] font-bold text-secondary mt-2">{video.snippet.title}</h3>
              <div className="flex gap-2 text-gray-600 text-sm mt-1">
                <p>80k views • 3 days ago</p>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FoodDrink;
