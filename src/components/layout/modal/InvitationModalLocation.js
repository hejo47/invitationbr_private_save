/* Import */
import { useContext } from "react";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalLocation.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_map_modal.png";
/* Context */
import { InfoContext } from "../../../store/option-info-context.js";

const InvitationModalLocation = ({ openvar, onClose }) => {
  const { selectLocationFile } = useContext(InfoContext);
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose}
        ButtonWrapperUse={false}
        headSrc={iconModalHeader}
        headContent="오시는 길"
      >
        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.title__top}`}>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <div className={styles.img__wrap}>
                  {
                    selectLocationFile.length > 0 ? 
                    <img src={selectLocationFile[0].src} alt={selectLocationFile[0].alt} />
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalLocation;