import HomeNavbar from "./homeNavbar"
import Reccomended from "./homeRecomenned"
import HomeVideosPage from "./homeVideos"

const HomePage = () => {
  return (
    <div className="pt-[50px] flex gap-[90px]">


<HomeNavbar/>

<div>
<HomeVideosPage/>
<Reccomended/>
</div>
    </div>
  )
}

export default HomePage
