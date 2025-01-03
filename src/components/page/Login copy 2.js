/* import */
import { useContext, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/Join.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import ButtonWrapper from "../layout/ButtonWrapper.js"
import Button from "../layout/Button.js"
import Card from "../layout/Card.js"
import CardTitle from "../layout/CardTitle.js";
import CardContent from "../layout/CardContent.js";
import CardItem from "../layout/CardItem.js";
import CardInput from "../layout/CardInput.js";
// Context
import { SetContext } from "../../store/option-set-context.js";

const Join = () => {
  const { isMobile } = useContext(SetContext);
  const [ userPhone, setUserPhone ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ isPhoneValid, setIsPhoneValid ] = useState(false);
  const [ isPasswordValid, setIsPasswordValid ] = useState(false);
  const [ buttonActive, setButtonActive ] = useState(false);
  const [ initialState, setInitialState ] = useState(false);
  const numberHandler = (phone) => {
    const phoneNumberRegex = /^\d{3}-\d{4}-\d{4}$/;
    setIsPhoneValid(phoneNumberRegex.test(phone));
  }
  const passwordHandler = (password) => {
    if(password === "123") {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }
  useEffect(() => {
    if(userPhone.length != 0 && userPassword.length != 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
      setInitialState(false);
    }
  }, [userPhone, userPassword]);

  const fetchAccount = () => {
    const fetchData = async () => {
      try {
        const phone = userPhone;
        const password = userPassword;
        const res = await fetch("https://app.boram.com/InvitationApi/login_process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ phone, password })
        });
        if ( res.status == 200 ) {
          const data = await res.json();
          console.log(data);
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    };
    fetchData();
  };

  return (
    <div className={styles.join}>
      <SubTitle 
        type="mng"
        subTitle="로그인"
        subContent={`휴대폰 번호와 비밀번호 입력 후${isMobile ? "\n" : " "}로그인 하세요.`}
      />
      <SubWrapper column>
        <Card>
          <CardContent>

            <CardItem type="text">
            <CardInput 
              type="text" 
              id="phone" 
              content="휴대폰 번호" 
              value={userPhone}
              onChange={setUserPhone}
              maxLength="13"
              placeholder="-를 제외하고 입력해 주세요"
              column 
            >
              {!isPhoneValid && initialState && userPhone.length != 0 && (
                <p className={styles.notice}>
                  올바른 전화번호를 입력해주세요 (예: 01012345678)
                </p>
              )}
            </CardInput>
            </CardItem>
            <CardItem type="text">
              <CardInput 
                type="password" 
                id="password" 
                content="비밀번호" 
                value={userPassword}
                onChange={setUserPassword}
                placeholder="비밀번호를 입력해 주세요"
                column 
              >
                {!isPasswordValid && initialState && userPassword.length != 0 && (
                  <p className={styles.notice}>
                    비밀번호가 맞지 않습니다. 다시 입력해 주세요.
                  </p>
                )}
              </CardInput>
            </CardItem>
            
          </CardContent>

          <ButtonWrapper styleType="center">
            <Button 
              content="로그인" 
              styleType={buttonActive ? "point" : "join__disabled"}
              onClick={() => {
                setInitialState(true);
                numberHandler(userPhone);
                passwordHandler(userPassword);
                fetchAccount();
              }}
            ></Button>
          </ButtonWrapper>

          <ul className={styles.tool__wrap}>
            <li>
              <Link to="/Find"><span>비밀번호 찾기</span></Link>
            </li>
            <li>
              <Link to="/Join"><span>신규 회원가입</span></Link>
            </li>
          </ul>
        </Card>
      </SubWrapper>

    </div>
  )
}

export default Join;