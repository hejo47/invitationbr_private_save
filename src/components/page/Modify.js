/* import */
import { useContext } from "react";
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

const Modify = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      {
        <>
          <SubTitle 
            type="mng"
            subTitle="정보수정"
            subContent={`비밀번호, SMS 수신 여부, 회원 탈퇴를${isMobile ? "\n" : " "}설정할 수 있습니다.`}
          />
          <SubWrapper column>
            <Card>
              <CardTitle content="회원정보" essential />
              <CardContent>
                <CardItem type="text">
                  <CardInput type="text" id="text1" content="이름" />
                </CardItem>
                <CardItem type="text">
                  <CardInput type="text" id="text2" content="휴대폰 번호" />
                </CardItem>

                <CardItem type="text">
                  <CardInput type="password" id="text3" content="비밀번호 변경" column />
                  <CardInput type="password" id="text4" content="" />
                </CardItem>

                <CardItem>
                  <CardInput type="sms" id="sms" content="SMS 수신 여부" column />
                </CardItem>

              </CardContent>

              <ButtonWrapper styleType="center">
                <Button content="비밀번호 변경" styleType="join__disabled"></Button>
              </ButtonWrapper>
              <Link to="/RemoveAccount" className={styles.remove__account}>회원탈퇴</Link>

            </Card>
          </SubWrapper>
        </>
      }
    </div>
  )
}

export default Modify;