/* import */
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/ManageList.module.scss";
/* Component */
import ManageItem from "../sub/ManageItem.js";
import BasicTooltip from "../layout/BasicTooltip.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const ManageList = ({ noticeList }) => {
  const { isMobile } = useContext(SetContext);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 6000);
    return () => clearTimeout(timer); 
  }, []);
  const [ inviteList, setInviteList ] = useState(
    [
      {
        id: `invite${Math.random()}`,
        use: true,
        title: "테마 - [베이직] 모던",
        createDate: "2024-09-15",
        modifyDate: "2024-11-30",
        weddingDate: "2025-02-27"
      },
      {
        id: `invite${Math.random()}`,
        use: false,
        title: "(복사) 테마 - [베이직] 모던",
        createDate: "2024-11-30",
        modifyDate: "2024-12-24",
        weddingDate: "2025-02-01"
      },
      {
        id: `invite${Math.random()}`,
        use: false,
        title: "테마 - [베이직] 모던",
        createDate: "2024-09-15",
        modifyDate: "2024-11-30",
        weddingDate: "2025-04-01"
      },
    ]
  )
  return (
    <div className={styles.manage__list}>
      <div className={styles.manage__list_wrap}>
        <ul>
          {inviteList.map((item, idx) => (
            <>
              <ManageItem 
                key={item.id}
                inviteIdx={idx}
                inviteItem={item}
                onChange={setInviteList}
              >
                {
                  idx === 0 ?
                  <BasicTooltip 
                    title="사용하지 않을 경우 미사용으로 설정해 주세요." 
                    placement="top"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  /> : null
                }
              </ManageItem>              
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ManageList;