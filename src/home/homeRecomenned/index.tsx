import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import profile1 from "../../assets/icons/profil_1.svg";
import axios from 'axios';

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

const Reccomended: React.FC<HomeVideosPageProps> = ({ relatedToVideoId }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error

  useEffect(() => {
    const fetchVideos = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: relatedToVideoId,
          part: 'id,snippet',
          type: 'video',
          maxResults: '50',
        },
        headers: {
          'x-rapidapi-key': '2cda5ec56emsheea3269f4e62db7p1fd1f9jsn7fc63b6791bc',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        },
      };

      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await axios.request<{ items: Video[] }>(options);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos. Please try again."); // Set error message
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchVideos();
  }, [relatedToVideoId]);

  if (loading) return <p>Loading videos...</p>; // Loading state
  if (error) return <p className="text-red-500">{error}</p>; // Error state

  return (
    <div className="py-4 px-6">
      <div className="flex items-center gap-4 mb-4">
        <img className="w-10 h-10 rounded-full" src={profile1} alt="User Profile" />
        <span className="font-semibold text-lg">Dollie Blair</span>
      </div>

      <div className="max-w-screen-lg mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id.videoId} className="w-[250px] flex-shrink-0 bg-white rounded-lg overflow-hidden">
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-40 object-cover" />
              <h3 className="text-[16px] font-bold text-secondary">{video.snippet.title}</h3>
              <div className="flex gap-[41px]">
                <p className="text-[14px] text-third">{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
                <p className="text-[14px] text-third">{video.snippet.channelTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reccomended;
