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

const Join = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      <SubTitle 
        type="mng"
        subTitle="로그인"
        subContent={`휴대폰 번호와 비밀번호 입력 후${isMobile ? "\n" : " "}로그인 하세요.`}
      />
      {/* <ManageList></ManageList> */}
      <SubWrapper column>

        <Card>
          <CardContent>

            <CardItem type="text">
              <CardInput type="text" id="text1" content="휴대폰 번호" column />
            </CardItem>

            <CardItem type="text">
              <CardInput type="password" id="text2" content="비밀번호" column />
            </CardItem>
            
          </CardContent>

          <ButtonWrapper styleType="center">
            <Button content="로그인" styleType="join__disabled"></Button>
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