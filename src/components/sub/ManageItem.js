/* import */
import { Link, useNavigate  } from "react-router-dom";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DateConverterDot, DDayCalculator, AddDaysToDate } from "../../utils/helpers.js"
/* Component */
import Button from "../layout/Button.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/sub/ManageItem.module.scss";
/* Image */
import rightArrowImg from "../../img/icon/icon_arrow_right.png";

const ManageItem = ({ inviteIdx, inviteItem, onChange, children }) => {
  const navigate = useNavigate();
  return (
    <li className={`${styles.manage__item} ${inviteItem.use ? styles.active : styles.disabled}`}>
      <div className={styles.manage__item_wrap}>
        <div className={styles.manage__use}>
          <>
            <FormControlLabel
              value={inviteItem.use}
              control={
                <Switch 
                  checked={inviteItem.use} 
                  onChange={() => (
                    onChange((prev) => (
                      prev.map((item, idx) => (
                        inviteIdx === idx ? {...item, use: !item.use} : item
                      ))
                    ))
                  )} 
                />
              }
              label={inviteItem.use ? "청첩장 사용중" : "청첩장 미사용"}
              labelPlacement="start"
            />
            {children}
          </>
        </div>
        <p className={styles.manage__item_title}>{inviteItem.title}</p>
        <div className={styles.manage__item_date}>
          <div className={styles.manage__item_date_wrap}>
            <p className={styles.manage__item_date_delete}>{Number(DDayCalculator(inviteItem.weddingDate)) + 30}일 남음</p>
            <p className={styles.manage__item_date_day}>{DateConverterDot(AddDaysToDate(inviteItem.weddingDate, 30))}까지</p>
          </div>
          <Link to="/Produce/Preview"><span>청첩장 보기</span><img src={rightArrowImg} alt="" /></Link>
        </div>
        <div className={styles.manage__item_content}>
          <div className={styles.manage__item_content_photo}>
            <img src="/img/intro/intro_photo1.png" alt="" />
          </div>
          <div className={styles.manage__item_content_info}>
            <p>최초 작성일<span>{inviteItem.createDate}</span></p>
            <p>최종 수정일<span>{inviteItem.modifyDate}</span></p>
            <p>삭제 예정일<span>{(AddDaysToDate(inviteItem.weddingDate, 30))}</span></p>
            <Button content="참석 여부 확인" styleType="manage" onClick={() => navigate("/Manager/Detail")}></Button>
          </div>
        </div>
        <ButtonWrapper>
          <Button
            content="복사"
            styleType="manage__cancel"
          ></Button>
          <Button 
            content="청첩장 편집하기" 
            onClick={() => navigate("/Produce")}
            styleType="manage__point"
          />
        </ButtonWrapper>
      </div>
      <Button content="카카오톡 공유하기" styleType="manage__kakao"></Button>
    </li>
  )
}

export default ManageItem;