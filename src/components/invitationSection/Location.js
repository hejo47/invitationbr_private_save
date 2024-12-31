/* Import */
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
/* Component */
import Traffic from "./Traffic.js";
import InvitationModalLocation from "../layout/modal/InvitationModalLocation.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Location.module.scss";
/* Image */
import tempMapImg from "../../img/location/temp_map.png";
import iconMapTImg from "../../img/icon/icon_map_t.png";
import iconMapNaverImg from "../../img/icon/icon_map_naver.png";
import iconMapKakaoImg from "../../img/icon/icon_map_kakao.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { LocationContext } from "../../store/option-location-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Location = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Produce/Preview";

  const { isMobile } = useContext(SetContext);
  const { basicInfoList, selectLocationFile } = useContext(InfoContext);
  const { locationRef } = useContext(RefContext);

  const { trafficList } = useContext(LocationContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div ref={locationRef} id="Location" className={`${styles.location}`}>
      <div className={styles.location__wrap}>
        {/* {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingLocation" position="absolute" top={65} /> : null} */}
        <HeadLine title="오시는 길" content="location" />
        <div className={styles.location__content}>
          <div className={styles.place}>
            <p>
              {
                basicInfoList.placeInfo.placeName || basicInfoList.placeInfo.placeDetail ? 
                `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}`
                : "보람컨벤션 카리나홀(4층)"
              }
            </p>
            <p>{basicInfoList.placeInfo.placeAddress ? basicInfoList.placeInfo.placeAddress : "울산광역시 남구 왕생로160"}</p>
          </div>
          {
            selectLocationFile.length > 0 ?
            <ButtonWrapper styleType="center">
              <Button content="약도보기" styleType="invitation__map" onClick={handleOpen} />
            </ButtonWrapper>
            : null
          }
          <div className={styles.map}>
            <div className={styles.map__wrap}>
              <div className={styles.map__view}>
                <img src={tempMapImg} alt="" />
                {/* <LocationMap /> */}
              </div>
              <ul className={styles.map__search_list}>
                {/* <li className={styles.map__search_item}>
                  <Link to="#" onClick={(e => e.preventDefault())}>
                    <img src={iconMapTImg} alt="" />
                    <p>티맵</p>
                  </Link>
                </li> */}
                <li className={styles.map__search_item}>
                  <Link to="#" onClick={(e => e.preventDefault())}>
                    <img src={iconMapNaverImg} alt="" />
                    <p>네이버</p>
                  </Link>
                </li>
                <li className={styles.map__search_item}>
                  <Link to="#" onClick={(e => e.preventDefault())}>
                    <img src={iconMapKakaoImg} alt="" />
                    <p>카카오</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {trafficList.length > 0 ? <Traffic /> : null}
      </div>
      {
        ReactDOM.createPortal(<InvitationModalLocation openvar={open} onClose={handleClose} />, document.body)
      }
    </div>
  )
}

export default Location;