/* Import */
import { useContext } from "react";
/* Component */
import SettingItem from "./SettingItem";
import FixedTabSetting from "./FixedTabSetting";
import BackgroundSetting from "./BackgroundSetting";
import BasicInfomationSetting from "./BasicInfomationSetting";
import IntroSetting from "./IntroSetting";
import IntroPhotoSetting from "./IntroPhotoSetting";
import CoupleInfomationSetting from "./CoupleInfomationSetting";
import LetterSetting from "./LetterSetting";
import DateSetting from "./DateSetting";
import LocationSetting from "./LocationSetting";
import GallerySetting from "./GallerySetting";
import VideoSetting from "./VideoSetting";
import GiftSetting from "./GiftSetting";
import NoticeSettingT from "./NoticeSettingT";
import NoticeSettingD from "./NoticeSettingD";
import BgMusicSetting from "./BgMusicSetting";
import GuestbookSetting from "./GuestbookSetting";
import AttendSetting from "./AttendSetting";
import OutroSetting from "./OutroSetting";
import ThumbnailSettingK from "./ThumbnailSettingK";
import ThumbnailSettingU from "./ThumbnailSettingU";
import OrderSetting from "./OrderSetting";
/* CSS Module */
import styles from "../../css/module/common/SettingList.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import zIndex from "@mui/material/styles/zIndex.js";

// C: 설정 리스트
const SettingList = () => {
  const { isMobile, selectSettingList, setSelectSettingList, settingList, selectOptionList } = useContext(SetContext);
  const changeSettingHandler = (clickedIdx) => {
    const selectedItem = settingList[clickedIdx].itemId;
    setSelectSettingList(prevList => {
      if(selectSettingList.includes(selectedItem)) {
        return prevList.filter(item => item !== selectedItem);
      } else {
        return [...prevList, selectedItem];
      }
    });
  };
  const renderComponents = (item) => {
    switch (item) {
      case "FixedTabSetting":
        return <FixedTabSetting />;
      case 'BasicInfomationSetting':
        return <BasicInfomationSetting />;
      case 'BackgroundSetting':
        return <BackgroundSetting />;
      case 'IntroSetting':
        return <IntroSetting />;
      case 'IntroPhotoSetting':
        return <IntroPhotoSetting />;  
      case 'CoupleInfomationSetting':
        return <CoupleInfomationSetting />; 
      case 'LetterSetting':
        return <LetterSetting />; 
      case 'DateSetting':
        return <DateSetting />; 
      case 'LocationSetting':
        return <LocationSetting />; 
      case 'GallerySetting':
        return <GallerySetting />; 
      case 'VideoSetting':
        return <VideoSetting />; 
      case 'GiftSetting':
        return <GiftSetting />; 
      case 'NoticeSettingT':
        return <NoticeSettingT />; 
      case 'NoticeSettingD':
        return <NoticeSettingD />; 
      case 'BgMusicSetting':
        return <BgMusicSetting />; 
      case 'GuestbookSetting':
        return <GuestbookSetting />; 
      case 'AttendSetting':
        return <AttendSetting />; 
      case 'OutroSetting':
        return <OutroSetting />; 
      case 'ThumbnailSettingK':
        return <ThumbnailSettingK />; 
      case 'ThumbnailSettingU':
        return <ThumbnailSettingU />; 
      case 'OrderSetting':
        return <OrderSetting />; 
      default:
        return null;
    }
  }
  return (
    <ul className={styles.setting__list}>
      {settingList.map((item, idx) => {
        const isChecked = selectSettingList.includes(item.itemId);
        if (
          selectOptionList.theme !== "themeModernBasic" &&
          item.itemId === "settingIntro"
        ) {
          return false;
        }
        if (
          selectOptionList.theme !== "themeModernBasic" &&
          item.itemId === "settingIntroPhoto"
        ) {
          return false;
        }
        else {
          return (
            <SettingItem
              itemTitle={item.itemTitle}
              itemContent={renderComponents(item.itemContent)}
              option={item.itemCheckbox}
              onChange={() => changeSettingHandler(idx)}
              checkboxID={item.itemCheckbox}
              checked={isChecked}
              id={item.itemId}
              style={item.itemId === "settingIntroPhoto" && isMobile ? {overflowY: "visible"} : null}
              key={idx}
            />
          );
        }
      })}
    </ul>
  )
}

export default SettingList;