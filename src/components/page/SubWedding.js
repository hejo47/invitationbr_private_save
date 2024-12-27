/* import */
// import { useContext } from "react";
/* CSS */
import styles from "../../css/module/page/SubNotice.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import SubSideMenu from "../sub/SubSideMenu.js";
import SubListWd from "../sub/SubListWd.js";
// Context
// import { SetContext } from "../../store/option-set-context.js";

const menuList = [
  {
    src: "/",
    title: "예식 전"
  },
  {
    src: "/",
    title: "예식"
  },
  {
    src: "/",
    title: "예식 후"
  },
]

const beforeList = [
  {
    title: "신랑, 신부 웨딩홀 도착",
    content: "도착 시간에 따라 정시 도착인 경우 본 신부 대기실로 이동, 조금 일찍 도착한 경우 보조 대기실로 이동합니다."
  },
  {
    title: "신부 대기실 연출 및 원판 촬영 시작",
    content: "예식 시간이 첫 식 오전 11시 식인 경우, 가족들과 합의 하에 원판을 먼저 촬영하기도 합니다."
  },
  {
    title: "신랑님은 부모님과 함께 하객 분들에게 결혼식 시작 전까지 인사",
    content: ""
  },
  {
    title: "결혼식 시작 10분 전 신부대기실 사진 촬영 종료 신부님 입장 준비",
    content: "사회자는 장내 하객들에게 곧 예식이 시작됨을 알립니다."
  }
];

const weddingList = [
  {
    title: "하객 장내 입장 자리에 모두 착석",
    content: "신랑 부모님은 혼주석에 착석 합니다."
  },
  {
    title: "사회자가 결혼식 시작을 알리는 개회 선언",
    content: ""
  },
  {
    title: "사회자는 주례 있는 결혼식의 경우 주례자 소개, 없으면 생략하고 본 결혼식은 주례가 없는 결혼식으로 진행됨을 알림",
    content: "사회자 소개에 따라 주례자 등단, 하객 인사합니다."
  },
  {
    title: "양가 혼주 입장",
    content: ""
  },
  {
    title: "신랑 씩씩하게 입장",
    content: ""
  },
  {
    title: "사회자 멘트에 맞춰 아버지와 함께 신부님 입장",
    content: ""
  },
  {
    title: "신랑님은 신부님 아버님으로부터 신부님 손 건네 받은 뒤 함께 단상 앞으로 이동",
    content: "주례자에게 인사(없으면 생략) 합니다."
  },
  {
    title: "서로 마주 보고 맞절",
    content: "예물 교환을 하기도 합니다."
  },
  {
    title: "주례 있으면 주례자를 향해 자리 이동",
    content: "주례 없는 결혼식의 경우 신랑, 신부 하객을 정면으로 자리 바꾼 후 준비된 혼인 서약서를 번갈아 낭독합니다."
  },
  {
    title: "주례자 혼인서약 낭독 후 성혼 선언",
    content: "주례 없는 결혼식의 경우 신랑, 신부 혼인서약 후 사회자 또는 양가 부모님 중 한 분이 성혼 선언 낭독합니다."
  },
  {
    title: "주례사",
    content: "주례 없는 결혼식의 경우 부모님이 덕담을 하기도 합니다. (경우에 따라 생략)"
  },
  {
    title: "축가 또는 축사, 준비된 영상 시청",
    content: ""
  },
  {
    title: "양가 부모님께 인사",
    content: "신부 부모님께 먼저 인사하고 신랑 부모님에게 인사합니다."
  },
  {
    title: "신랑, 신부 양가 부모님과 함께 찾아주신 하객분들에게 감사 인사",
    content: ""
  },
  {
    title: "퇴장 행진",
    content: ""
  },
]

const afterList = [
  {
    title: "신랑, 신부 원판 촬영",
    content: "주례자가 있을 경우 함께 촬영합니다."
  },
  {
    title: "신랑, 신부 양가 부모님 촬영",
    content: ""
  },
  {
    title: "신랑, 신부 양가 친 인척 사진 촬영",
    content: ""
  },
  {
    title: "신랑, 신부 직계 가족 사진 촬영",
    content: ""
  },
  {
    title: "신랑, 신부 친구, 직장동료 및 지인 사진 촬영",
    content: ""
  },
  {
    title: "신랑, 신부 마지막 촬영",
    content: ""
  },
  {
    title: "폐백실 이동",
    content: ""
  },
  {
    title: "옷 갈아입고 연회장 이동하여 인사",
    content: "순서는 변경될 수 있습니다."
  },
  {
    title: "폐백 진행",
    content: "폐백 음식은 보통 신부측에서 딸을 잘 봐달라는 의미로 예를 갖춰 준비합니다."
  },
  {
    title: "혼주 가족 신랑, 신부 식사 후 마무리",
    content: ""
  }
]

const SubWedding = () => {
  // const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__notice}>
      <SubTitle 
        subTitle="예식 순서" 
        subContent="결혼식 진행순서에 대해 안내 드립니다."
        subPhoto={"/img/sub/sub_wedding.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>
        {false ?
          <SubListWd 
            type="예식 전" 
            list={beforeList}
            titlecontent="예식 시작 전까지 신부님은 신부대기실에서, 
            신랑님과 부모님들은 축하하러 와주신 하객분들에게 인사를 드립니다.
            이 대기 시간은 예식 시작 전까지로 보통 한 시간 정도 입니다."
          ></SubListWd> : null
        }
        
        {true ? 
        <SubListWd 
          type="예식" 
          list={weddingList}
          titlecontent="예식 시작 시간에 맞추어 사회자가 개식 선언을 선언하고 
          양가 혼주님이 입장하여 신랑, 신부님의 마지막 퇴행 행진까지의 
          과정을 말합니다."
        ></SubListWd> : null}
        {false ? 
        <SubListWd 
          type="예식 후" 
          list={afterList}
          titlecontent="퇴장 이후부터 진행되는 기념사진 촬영과 폐백을 말합니다."
        >
        </SubListWd> : null}

      </SubWrapper>
    </div>
  )
}

export default SubWedding;