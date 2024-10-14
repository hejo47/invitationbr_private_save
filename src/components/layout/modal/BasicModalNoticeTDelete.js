/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import BasicModal from './BasicModal';
/* CSS Module */
// import styles from "../../../css/module/layout/modal/BasicModalHeader.module.scss";

const BasicModalNoticeTDelete = ({ openvar, onClose }) => {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className=""
        onClose={onClose} 
        notice={true} 
        noticeContent="탭 삭제"
        ButtonWrapperUse={true}
        btnContent1="취소"
        btnContent2="탭 삭제"
      >
        <p>해당탭을 삭제하시겠습니까?<br />
        탭 삭제 시 입력한 내용도 함께 삭제됩니다.</p>
      </BasicModal>
    </>
  );
}

export default BasicModalNoticeTDelete;