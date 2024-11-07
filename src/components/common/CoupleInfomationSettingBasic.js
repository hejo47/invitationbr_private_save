/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
import CheckItem from "./CheckItem";
/* CSS Module */
import styles from "../../css/module/common/CoupleInfomationSettingBasic.module.scss";

const CoupleInfomationSettingBasic = ({ couple, coupleKey, value, onChange }) => {
  const [relList, setRelList] = useState([]);
  const MRelList = [
    {
      itemName: "아들",
      itemKey: "아들"
    },
    {
      itemName: "장남",
      itemKey: "장남"
    },
    {
      itemName: "차남",
      itemKey: "차남"
    },
    {
      itemName: "삼남",
      itemKey: "삼남"
    },
    {
      itemName: "사남",
      itemKey: "사남"
    },
    {
      itemName: "오남",
      itemKey: "오남"
    },
    {
      itemName: "막내",
      itemKey: "막내"
    },
    {
      itemName: "손자",
      itemKey: "손자"
    },
    {
      itemName: "조카",
      itemKey: "조카"
    },
    {
      itemName: "동생",
      itemKey: "동생"
    },
  ];
  const FRelList = [
    {
      itemName: "딸",
      itemKey: "딸"
    },
    {
      itemName: "장녀",
      itemKey: "장녀"
    },
    {
      itemName: "차녀",
      itemKey: "차녀"
    },
    {
      itemName: "삼녀",
      itemKey: "삼녀"
    },
    {
      itemName: "사녀",
      itemKey: "사녀"
    },
    {
      itemName: "오녀",
      itemKey: "오녀"
    },
    {
      itemName: "막내",
      itemKey: "막내"
    },
    {
      itemName: "손녀",
      itemKey: "손녀"
    },
    {
      itemName: "조카",
      itemKey: "조카"
    },
    {
      itemName: "동생",
      itemKey: "동생"
    },
  ];
  useEffect(() => {
    coupleKey === "M" ?
    setRelList(MRelList)
    :
    setRelList(FRelList)
  }, [coupleKey])

  return (
    <div className={styles.couple__info}>
      <input 
        type="text" 
        id={`${coupleKey}FirstName`}
        name="lastname" 
        className={styles.info__firstname} 
        placeholder={`성`} 
        value={value.lastname}
        onChange={onChange}
      />
      <input 
        type="text" 
        id={`${coupleKey}Name`} 
        name="firstname" 
        className={styles.info__name} 
        placeholder={`이름`} 
        value={value.firstname}
        onChange={onChange}
      />
      <input 
        type="number" 
        id={`${coupleKey}Number`} 
        name="number" 
        className={styles.info__number} 
        placeholder="전화 번호" 
        value={value.number}
        onChange={onChange}
      />
      <OptionSelector 
        selectID={`${coupleKey}RelSelect`}
        selectName="relation"
        className={styles.info__firstname_selector}
        listName={relList}
        defaultValue={value.relation}
        value={value.relation}
        onChange={onChange}
      />
    </div>
  )
}

export default CoupleInfomationSettingBasic;