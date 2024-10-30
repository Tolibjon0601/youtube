import headerNvbar from "../../assets/icons/header_navbar.svg";
import headericon from "../../assets/images/header_logo.png";
import searchIcon from "../../assets/icons/search_icon.svg";
import videoIcon from "../../assets/icons/video_icon.svg";
import headerNavbar_2 from "../../assets/icons/header_navbar_2.svg";
import notification from "../../assets/icons/notification_icon.svg";
import profil from "../../assets/icons/header_profile.svg";
import { FC } from "react";

const Header:FC = () => {
  return (
    <div className="pt-5 flex items-center  justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <img src={headerNvbar} alt="" />
          <img src={headericon} alt="" />
        </div>

        <div className="flex items-center relative max-w-full">
          <input
            className="py-2 bg-[#ebebeb] pl-10 pr-4 w-[300px] sm:w-[500px] hidden sm:block rounded-xl max-w-full"
            type="text"
            placeholder="Search"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute right-3 w-5 h-5"
          />
        </div>
      </div>

      <div className=" items-center hidden sm:flex gap-12 pr-16">
  <img src={videoIcon} alt="Video" />
  <img src={headerNavbar_2} alt="Navbar 2" />
  <div className="relative bl">
  <img src={notification} alt="Notification" />
  <span
    className="absolute left-2 w-5 h-5 text-[12px] top-[-5px] font-bold text-white bg-red-500 flex items-center justify-center rounded-full"

  >
    3
  </span>
</div>


  <img src={profil} alt="Profile" />
</div>

    </div>
  );
};

export default Header;
