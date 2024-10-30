import FoodDrink from "./foodDrink"
import HomeNavbar from "./homeNavbar"
import Reccomended from "./homeRecomenned"
import HomeVideosPage from "./homeVideos"
import { FC } from 'react';

const HomePage = () => {
  return (
    <div className="pt-[50px] flex gap-[90px]">


<HomeNavbar/>

<div>
<HomeVideosPage/>
<Reccomended/>
<FoodDrink/>
</div>
    </div>
  )
}

export default HomePage
