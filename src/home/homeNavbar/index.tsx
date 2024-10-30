import homeIcon from "../../assets/icons/home_icon.svg"
import trendinIcon from "../../assets/icons/trending_icon.svg"
import SubsIcon from "../../assets/icons/subs_icon.svg"
import LibraryIcon from "../../assets/icons/library_icon.svg"
import History from "../../assets/icons/history_icon.svg"
import Watch from "../../assets/icons/watch_icon.svg"
import Favourites from "../../assets/icons/favourites_icon.svg"
import Liked from "../../assets/icons/like_icon.svg"
import Music from "../../assets/icons/music_icon.svg"
import Games from "../../assets/icons/games_icon.svg"
import showMore from "../../assets/icons/show_more_icon.svg"
import ProfileIcon1 from "../../assets/icons/profil_1.svg"
import ProfileIcon2 from "../../assets/icons/profil_2.svg"
import ProfileIcon3 from "../../assets/icons/profil_3.svg"
import ProfileIcon4 from "../../assets/icons/profil_4.svg"
import ProfileIcon5 from "../../assets/icons/profil_5.svg"
import ProfileIcon6 from "../../assets/icons/profil_6.svg"
import SettingIcon from "../../assets/icons/setting_img.svg"

const HomeNavbar = () => {
  return (
    <div>

<ul className="flex flex-col gap-[29px]">
  <li className="flex items-center gap-[14px] text-[16px] text-primary hover:text-[red]"><img className="" src={homeIcon} alt="icons" />Home</li>
  <li className="flex items-center gap-[14px] text-[16px] text-primary hover:text-[red] "><img className="hover:filter-red" src={trendinIcon} alt="icons" />Trending</li>
  <li className="flex items-center mb-[31px] gap-[14px] text-[16px] text-primary hover:text-[red] "><img src={SubsIcon} alt="icons" />Subscriptions</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={LibraryIcon} alt="icons" />Library</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={History} alt="icons" />History</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Watch} alt="icons" />Watch later</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Favourites} alt="icons" />Favourites</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Liked} alt="icons" />Liked videos</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Music} alt="icons" />Music</li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Games} alt="icons" />Games </li>
  <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={showMore} alt="icons" />Show more</li>

</ul>
<ul className="flex flex-col gap-[26px] pt-[58px] pb-[104px]">
<h1 className="font-bold text-lg mb-1">Subscriptions</h1>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon1} alt="icons" />Gussie Singleton</li>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon2} alt="icons" />Nora Francis</li>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon3} alt="icons" />Belle Briggs</li>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon4} alt="icons" />Eunice Cortez</li>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon5} alt="icons" />Emma Hanson</li>
<li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon6} alt="icons" />Leah Berry</li>
</ul>
<ul className="pb-10">
<li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={SettingIcon} alt="icons" />Setting</li>

</ul>
    </div>
  )
}

export default HomeNavbar
