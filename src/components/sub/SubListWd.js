/* import */
import { useState } from "react";
/* CSS Module */
import styles from "../../css/module/sub/SubList.module.scss";
/* Component */
import SubListWdTitle from "./SubListWdTitle.js";
import SubListItemAc from "./SubListItemAc.js";
import SubPaging from "./SubPaging.js";
import SubListItemWd from "../sub/SubListItemWd.js";
/* Context */
// import { SetContext } from "../../store/option-set-context.js";
/* Image */
// import iconClipImg from "../../img/icon/icon_clip.png";

const SubListWd = ({ list, type, titlecontent }) => {
  const [ activeQna, setActiveQna ] = useState();
  const clickActiveQna = (id) => {
    if(activeQna === id) {
      setActiveQna("");
    } else {
      setActiveQna(id);
    }
  }
  return (
    <div className={`${styles.sub__list} ${styles.type__wd}`}>
      <div className={styles.sub__list_wrapper}>
        <SubListWdTitle 
          type={type}
          titlecontent={titlecontent}
        ></SubListWdTitle>
        <ul>
          {list.map((item, idx) => (
            <SubListItemWd
              key={"qnaItem" + Math.random() * 10}
              item={item}
              idx={idx}
            >
            </SubListItemWd>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SubListWd;