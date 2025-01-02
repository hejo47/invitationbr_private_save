/* import */
import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/layout/Card.module.scss";
/* Component */
/* Image */
import smsOkImg from "../../img/icon/icon_sms_ok.png";
import smsNoImg from "../../img/icon/icon_sms_no.png";
import smsOkImgC from "../../img/icon/icon_sms_ok_c.png";
import smsNoImgC from "../../img/icon/icon_sms_no_c.png";
// Context
import { SetContext } from "../../store/option-set-context.js";

const CardInput = ({ type, id, content, column, style }) => {
  const { isMobile } = useContext(SetContext);
  const [ smsState, setSmsState ] = useState();
  {
    if(type === "checkbox") {
      return (
        <div className={styles.card__chkbox}>
          <input type={type} id={id} name={id} />
          <label htmlFor={id}>{content}</label>
        </div>
      )
    }
    else if(type === "sms") {
      return (
        <div className={styles.card__sms}>
          {!isMobile ?
            <>
              <span>{content}</span>
              <div>
                <input type="radio" id={id + 1} name="sms" selected={smsState ? true : false} onClick={() => {setSmsState(true)}} />
                <label htmlFor={id + 1}>
                  {
                    smsState ? <img src={smsOkImgC} alt="" /> : <img src={smsOkImg} alt="" />
                  }
                </label>
              </div>
              <div>
                <input type="radio" id={id + 2} name="sms" selected={smsState ? false : true} onClick={() => {setSmsState(false)}}/>
                <label htmlFor={id + 2}>
                  {
                    !smsState ? <img src={smsNoImgC} alt="" /> : <img src={smsNoImg} alt="" />
                  }
                </label>
              </div>
            </> : 
            <>
              <div className={styles.card__chkbox}>
                <input type="checkbox" id={id} name={id} />
                <label htmlFor={id}>휴대폰 문자메시지를 받겠습니다.</label>
              </div>          
            </>
          }
          
          
      </div>
      )
    }
    else if(type === "radio") {
      return (
        <div className={styles.card__radio}>
          <div>
            <input type="radio" id="radio1" name="radio" />
            <label htmlFor="radio1">아이디를 변경하기 위해</label>
          </div>
          <div>
            <input type="radio" id="radio2" name="radio" />
            <label htmlFor="radio2">서비스 이용 시 오류 및 장애</label>
          </div>
          <div>
            <input type="radio" id="radio3" name="radio" />
            <label htmlFor="radio3">다른 서비스를 이용하기 위해</label>
          </div>
          <div>
            <input type="radio" id="radio4" name="radio" />
            <label htmlFor="radio4">고객 서비스 부족</label>
          </div>
          <div>
            <input type="radio" id="radio5" name="radio" />
            <label htmlFor="radio5">기타</label>
          </div>
        </div>
      )
    }
    else {
      return (
        <div 
          className={`${column ? styles.card__text_column : styles.card__text}`}
          style={style}
        >
          <input type={type} id={id} name={id} />
          <label htmlFor={id}>{content}</label>
        </div>
      )
    }
  }

}

export default CardInput;