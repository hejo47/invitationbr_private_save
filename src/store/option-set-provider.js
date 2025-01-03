/* Import */
import { useState, useEffect } from "react";
import initList from "./option-list.json";
/* Context */
import { SetContext } from "./option-set-context.js"

const SetProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [settingOrderList, setSettingOrderList] = useState(initList.settingOrderList);
  const basicSettingList = initList.basicSettingList;
  const [kakaoInfoList, setKakaoInfoList] = useState(initList.kakaoInfoList);
  const [urlInfoList, setUrlInfoList] = useState(initList.urlInfoList);
  const [selectSettingList, setSelectSettingList] = useState(initList.selectSettingList);
  const [accountInfoList, setAccountInfoList] = useState(initList.accountInfoList);
  const [videoList, setVideoList] = useState(initList.videoList);
  const [noticeTList, setNoticeTList] = useState(initList.noticeTList);
  const [noticeDList, setNoticeDList] = useState(initList.noticeDList);
  const [letterList, setLetterList] = useState(initList.letterList);
  const [outroList, setOutroList] = useState(initList.outroList);
  const [selectNoticeT, setSelectNoticeT] = useState(0);
  const [guestbookList, setGuestbookList] = useState(initList.guestbookList);
  const [guestbookAdminPassword, setGuestbookAdminPassword] = useState(initList.guestbookAdminPassword);
  const [selectOptionList, setSelectOptionList] = useState(initList.selectOptionList);
  const [selectBGM, setSelectBGM] = useState(initList.selectBGM);
  const [bgFreeList, setBgFreeList] = useState(initList.bgFreeList);
  const [attendList, setAttendList] = useState(initList.attendList);
  const [attendGuest, setAttendGuest] = useState(initList.attendList);
  const [openSettingTab, setOpenSettingTab] = useState("");
  const [attendGuestList, setAttendGuestList] = useState(initList.attendGuestList);
  const settingList = initList.settingList;

  return (
    <SetContext.Provider
      value={{
        isMobile,
        setIsMobile,
        kakaoInfoList,
        setKakaoInfoList, 
        urlInfoList,
        setUrlInfoList, 
        basicSettingList,
        settingList,
        settingOrderList,
        setSettingOrderList,
        selectSettingList,
        setSelectSettingList,
        accountInfoList,
        setAccountInfoList,
        videoList,
        setVideoList,
        noticeTList,
        setNoticeTList,
        noticeDList,
        setNoticeDList,
        selectNoticeT,
        setSelectNoticeT,
        outroList,
        setOutroList,
        letterList,
        setLetterList,
        guestbookAdminPassword,
        setGuestbookAdminPassword,
        guestbookList,
        setGuestbookList,
        selectOptionList,
        setSelectOptionList,
        bgFreeList,
        setBgFreeList,
        selectBGM,
        setSelectBGM,
        attendList,
        setAttendList,
        attendGuest,
        setAttendGuest,
        openSettingTab,
        setOpenSettingTab,
        attendGuestList,
        setAttendGuestList
      }}
    >
      {children}
    </SetContext.Provider>
  );
};

export default SetProvider;