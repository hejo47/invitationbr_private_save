/* import */
import { useState } from "react";
/* CSS Module */
import styles from "../../css/module/sub/SubList.module.scss";
/* Component */
import SubListSearch from "./SubListSearch.js";
import SubListItemAc from "./SubListItemAc.js";
import SubPaging from "./SubPaging.js";
/* Context */
// import { SetContext } from "../../store/option-set-context.js";
/* Image */
// import iconClipImg from "../../img/icon/icon_clip.png";

const SubListAc = ({ list }) => {
  const [ activeQna, setActiveQna ] = useState();
  const clickActiveQna = (id) => {
    if(activeQna === id) {
      setActiveQna("");
    } else {
      setActiveQna(id);
    }
  }
  return (
    <div className={`${styles.sub__list} ${styles.type__ac}`}>
      <div className={styles.sub__list_wrapper}>
        <SubListSearch length={list.length}></SubListSearch>
        <ul>
          {list.map((item, idx) => (
            <SubListItemAc 
              id={"qnaItem" + idx}
              key={"qnaItem" + Math.random() * 10}
              activeId={activeQna}
              item={item}
              onClick={clickActiveQna}
            >
            </SubListItemAc>
          ))}
        </ul>
        <SubPaging></SubPaging>
      </div>
    </div>
  )
}

export default SubListAc;