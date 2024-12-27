/* import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/sub/SubListItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconQuest from "../../img/icon/icon_quest.png";
import iconAnswer from "../../img/icon/icon_answer.png";
import { ReactComponent as IconDownArrowImg } from "../../img/icon/icon_settingItem_arrow.svg";

const SubListItemAc = ({ item, id, activeId, onClick }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <li 
      onClick={() => onClick(id)}
      className={`${styles.sub__list_ltem} ${styles.type__ac} ${id === activeId ? styles.active : ""}`}>
      <div className={styles.sub__list_ltem__wrapper}>
        <div className={styles.info}>
          {true ?
            <img src={iconQuest} alt="" className={styles.quest__img} /> :
            <img src={iconAnswer} alt="" className={styles.quest__img} />
          }
          <div className={styles.badge}><p>{item.type}</p></div>
          <div className={styles.title}>
            <p>{item.title}</p>
          </div>
        </div>
        {isMobile ? 
          null :
          <div className={styles.img__wrap}>
            <IconDownArrowImg></IconDownArrowImg>
          </div>
        }
      </div>
      <div className={styles.answer__info}>
        <img src={iconAnswer} alt="" className={styles.quest__img} />
        <div className={styles.answer}>
          <p>{item.answer}</p>
        </div>
      </div>
    </li>
  )
}

export default SubListItemAc;