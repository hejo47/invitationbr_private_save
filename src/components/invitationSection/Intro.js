/* Import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { IntroImgSeparator } from '../../utils/helpers';
// Component
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import intro1Letter from "../../img/intro/intro_theme_1_lettering.png";
import intro2Letter from "../../img/intro/intro_theme_2_lettering.png";
import intro3Letter from "../../img/intro/intro_theme_3_flower.png";
import intro4Letter from "../../img/intro/intro_theme_4_lettering.png";
// import introPhoto1 from "../../img/intro/intro_photo_test1.png";
// import introPhoto2 from "../../img/intro/intro_photo_test2.png";
// import introPhoto3 from "../../img/intro/intro_photo_test3.png";
// import introPhoto4 from "../../img/intro/intro_photo_test4.png";
// import introPhoto5 from "../../img/intro/intro_photo_test5.png";
// import introPhoto6 from "../../img/intro/intro_photo_test6.png";
// import introPhoto7 from "../../img/intro/intro_photo_test7.png";
// import introPhoto8 from "../../img/intro/intro_photo_test8.png";
import introFlower from "../../img/intro/intro_photo_flower.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { IntroContext } from "../../store/option-intro-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Intro = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Produce/Preview";
  
  const { isMobile, selectOptionList } = useContext(SetContext);
  const { introRef } = useContext(RefContext);

  const { basicInfoList } = useContext(InfoContext);
  const { selectIntroPhoto, prevIntroColor, introSample } = useContext(IntroContext);
  const DateConverter = (date) => {
    const selectedDate = date; 
    const formattedDate = selectedDate.split('-').join('.');
    return formattedDate;
  };
  const DateConverterTheme2M = (date) => {
    const selectedDate = date; 
    return selectedDate.substring(5, 7);
  };
  const DateConverterTheme2D = (date) => {
    const selectedDate = date; 
    return selectedDate.substring(8, 10);
  };
  const DateConverterTheme4 = (date) => {
    const selectedDate = date; 
    const formattedDate = selectedDate.split('-').join(' / ');
    return formattedDate;
  };
  const handleDaysChange = (date) => {
    const dateObj = new Date(date);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']; 
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    return dayOfWeek;
  }
  const nameInitHandler = (data, defaultData) => {
    const { lastname, firstname } = data;
    return (lastname || firstname) ? `${lastname}${firstname}` : defaultData;
  }
  const placeInitHandler = (data, defaultData) => {
    const { placeName, placeDetail } = data;
    return (placeName || placeDetail) ? `${placeName} ${placeDetail}` : defaultData;
  }
  const nameDivideHandler = (data, idx) => {
    const nameArr = data.split(' ');
    return nameArr[idx];
  }
  const renderIntroHandler = (id) => {
    if(selectOptionList.theme === "themeModernBasic") {
      switch(id) {
        case "basicTemplate1":
          return (
            <div className={styles.intro__wrap}>
              <div className={styles.intro__headline}>
                <div className={styles.img__wrap}>
                  <img src={intro1Letter} alt="" />
                </div>
                <div className={styles.txt__wrap}>
                  <p style={{color: prevIntroColor[0]}}>
                    {
                      introSample && introSample[0] ? introSample[0] : "저희 결혼합니다"
                    }
                  </p>
                </div>
              </div>
              <div className={styles.intro__photo}>
                {IntroImgSeparator(0, "img")}
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 className={styles.groom} style={{color: prevIntroColor[1]}}>
                    {introSample && introSample[1] ? nameDivideHandler(introSample[1], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}
                  </h2>
                  <p className={styles.divide}></p>
                  <h2 className={styles.bride} style={{color: prevIntroColor[1]}}>
                    {introSample && introSample[1] ? nameDivideHandler(introSample[1], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}
                  </h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 className={styles.date} style={{color: prevIntroColor[2]}}>
                    {
                      introSample && introSample[2] ? introSample[2] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`
                    }
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 className={styles.groom} style={{color: prevIntroColor[3]}}>
                    {introSample && introSample[3] ? introSample[3] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}
                  </h4>
                </div>
              </div>
            </div>
          );
        case "basicTemplate2":
          return (
            <div className={styles.intro__wrap}>
              <div className={styles.intro__headline}>
                <div className={styles.img__wrap}>
                  <img src={intro2Letter} alt="" />
                </div>
                <div className={styles.txt__wrap}>
                  <p style={{color: prevIntroColor[0]}}>
                    {introSample && introSample[0] ? 
                      <span>{introSample[0]}</span>
                      : (
                        <>
                          {DateConverterTheme2M(basicInfoList.dateInfo.date)}
                          <span>/</span>
                          {DateConverterTheme2D(basicInfoList.dateInfo.date)}
                        </>
                      )
                    }
                  </p>
                </div>
              </div>
              <div className={styles.intro__photo}>
                <p>getting</p>
                {IntroImgSeparator(1, "img")}
                <p>married</p>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <p className={styles.divide}></p>
                  <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                    {`${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        case "basicTemplate3":
          return (
            <div className={styles.intro__wrap}>
              <div className={styles.intro__headline}>
                <div className={styles.img__wrap}>
                  <img src={intro3Letter} alt="" />
                </div>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  {
                    introSample && introSample[0] ? 
                    <h2>{introSample[0]}</h2> :
                    (
                      <>
                        <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{introSample && introSample[0] ? nameDivideHandler(introSample[1], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                        <p className={styles.divide}>그리고</p>
                        <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{introSample && introSample[0] ? nameDivideHandler(introSample[1], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                      </>
                    )
                  }
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                    {introSample && introSample[1] ? introSample[1] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{introSample && introSample[2] ? introSample[2] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
              <div className={styles.intro__photo}>
              {IntroImgSeparator(2, "img")}
              </div>
            </div>
          );
        case "basicTemplate4":
          return (
            <div className={styles.intro__wrap}>
              <div className={styles.intro__headline}>
                <div className={styles.txt__wrap}>
                  <p style={{color: prevIntroColor[0]}}>
                    {introSample && introSample[0] ? introSample[0] : `${DateConverterTheme4(basicInfoList.dateInfo.date)}`}
                  </p>
                </div>
              </div>
              <div className={styles.intro__photo}>
                {IntroImgSeparator(3, "img")}
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <img src={intro4Letter} alt="" />
                  <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                    {introSample && introSample[2] ? introSample[2] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{introSample && introSample[3] ? introSample[3] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        case "fillTemplate1":
          return (
            <div className={styles.intro__wrap}>
              <div style={{backgroundImage: `url(${IntroImgSeparator(4, "bg")})`}} className={styles.intro__photo}>
                <div className={styles.intro__headline}>
                  <div className={styles.txt__wrap}>
                    <p style={{color: prevIntroColor[0]}}>{introSample && introSample[0] ? introSample[0] : "결혼합니다"}</p>
                  </div>
                </div>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <p className={styles.divide}></p>
                  <h2 style={{color: prevIntroColor[1]}} className={styles.bride}>{introSample && introSample[1] ? nameDivideHandler(introSample[1], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                    {introSample && introSample[2] ? introSample[2] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{introSample && introSample[3] ? introSample[3] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        case "fillTemplate2":
          return (
            <div className={styles.intro__wrap}>
              <div style={{backgroundImage: `url(${IntroImgSeparator(5, "bg")})`}} className={styles.intro__photo}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <img src={intro4Letter} alt="" />
                  <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                    {introSample && introSample[1] ? introSample[1] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{introSample && introSample[2] ? introSample[2] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        case "fillTemplate3":
          return (
            <div className={styles.intro__wrap}>
              <div style={{backgroundImage: `url(${IntroImgSeparator(6, "bg")})`}} className={styles.intro__photo}>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <img src={intro4Letter} alt="" />
                  <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                    {introSample && introSample[1] ? introSample[1] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{introSample && introSample[2] ? introSample[2] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        case "fillTemplate4":
          return (
            <div className={styles.intro__wrap}>
              <div style={{backgroundImage: `url(${IntroImgSeparator(7, "bg")})`}} className={styles.intro__photo}>
              </div>
              <div className={styles.intro__title}>
                <div className={styles.intro__title_couple}>
                  <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 0) : nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                  <h2>&</h2>
                  <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{introSample && introSample[0] ? nameDivideHandler(introSample[0], 1) : nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
                </div>
                <div className={styles.intro__title_date}>
                  <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                    {introSample && introSample[1] ? introSample[1] : `${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                  </h3>
                </div>
                <div className={styles.intro__title_place}>
                  <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{introSample && introSample[2] ? introSample[2] : placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else if(selectOptionList.theme === "themeFlower") {
      // switch(id) {
        // case "fillTemplate1":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__photo} style={{backgroundImage: `url(${introFlower})`}}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <img src={intro4Letter} alt="" />
                <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                  {`${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour : basicInfoList.timeInfo.hour}:${basicInfoList.timeInfo.min === "0" ? "00" : basicInfoList.timeInfo.min}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      //   default:
      //     return null;
      // }
    } else if(selectOptionList.theme === "themeSimple") {
      // switch(id) {
        // case "fillTemplate1":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__photo}>
              <img src={intro3Letter} alt="" />
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <div className={styles.simple__date}>
                  <p className={styles.month}>{DateConverterTheme2M(basicInfoList.dateInfo.date)}</p>
                  <p className={styles.divide}></p>
                  <p className={styles.day}>{DateConverterTheme2D(basicInfoList.dateInfo.date)}</p>
                </div>
                <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
            </div>
            <div className={styles.intro__headline}>
              <div className={styles.txt__wrap}>
                <p style={{color: prevIntroColor[0]}}>저희 결혼합니다</p>
              </div>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                  {`${DateConverter(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour : basicInfoList.timeInfo.hour}:${basicInfoList.timeInfo.min === "0" ? "00" : basicInfoList.timeInfo.min}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      //   default:
      //     return null;
      // }
    }
  }
  const mobileTabRederer = () => {
    if(selectOptionList.theme === "themeModernBasic" 
      && (selectOptionList.introFillType === "basicTemplate1" 
      || selectOptionList.introFillType === "basicTemplate2"
      || selectOptionList.introFillType === "basicTemplate3"
      || selectOptionList.introFillType === "basicTemplate4")
    ) {
      return (
        <>
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBasicInfomation" position="absolute" top="30px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBackground" position="absolute" top="78px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingIntro" position="absolute" top="126px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingIntroPhoto" position="absolute" top="174px" /> : null}
        </>
      )
    } else if(selectOptionList.theme === "themeModernBasic" 
      && (selectOptionList.introFillType === "fillTemplate1"
      || selectOptionList.introFillType === "fillTemplate2"
      || selectOptionList.introFillType === "fillTemplate3"
      || selectOptionList.introFillType === "fillTemplate4")
    ) {
      return (
        <>
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBasicInfomation" position="absolute" top="78px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBackground" position="absolute" top="126px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingIntro" position="absolute" top="174px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingIntroPhoto" position="absolute" top="222px" /> : null}
        </>
      )
    } else if(selectOptionList.theme === "themeSimple") {
      return (
        <>
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBasicInfomation" position="absolute" top="108px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBackground" position="absolute" top="156px" /> : null}
        </>
      )
    } else if(selectOptionList.theme === "themeFlower") {
      return (
        <>
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBasicInfomation" position="absolute" top="108px" /> : null}
          {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingBackground" position="absolute" top="156px" /> : null}
        </>
      )
    }
  }
  return (
    <div 
      ref={introRef}
      key={selectOptionList.introFillType + selectOptionList.theme}
      id={selectOptionList.theme === "themeModernBasic" ? selectOptionList.introFillType : selectOptionList.theme}
      className={`${styles.intro} ${styles[selectOptionList.theme === "themeModernBasic" ? selectOptionList.introFillType : selectOptionList.theme]}`}
    >
      {mobileTabRederer()}
      {renderIntroHandler(selectOptionList.introFillType)}
    </div>
  )
}

export default Intro;