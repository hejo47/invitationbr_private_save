/* Import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/BgMusicSettingPlayer.module.scss";
/* Image */
import bgmCoverImg from "../../img/bgm/bgm_cover.png";
import bgmCdImg from "../../img/bgm/bgm_cd.png";
import bgmPlayImg from "../../img/icon/icon_play.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 배경 음악 편집 - 플레이어 (BgMusicSetting)
const BgMusicSettingPlayer = () => {
  const { selectBGM, bgFreeList } = useContext(SetContext);
  return (
    <div className={styles.bg__player_wrap}>
      <div className={styles.info}>
        <div className={styles.info__wrap}>
          <div className={styles.album}>
            <div className={styles.cover}>
              <img src={bgmCoverImg} alt="" />
              {/* 회전하는 애니메이션 필요: .active */}
              <div className={`${styles.cd} ${styles.active}`}> 
                <img src={bgmCdImg} alt="" /> 
              </div>
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.title__wrap}>
              <p>{bgFreeList.map((item) => item.bgid === selectBGM ? item.bgtitle : null)}</p>
            </div>
            <div className={styles.author}>
              {bgFreeList.map((item) => item.bgid === selectBGM ? item.bgauthor : null)}
            </div>
          </div>
        </div>
        <div className={styles.player}>
          <img src={bgmPlayImg} alt="" />
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timeline__wrap}>
          <div className={styles.timeline__current}></div>
          <div className={styles.timeline__view}></div>
        </div>
        <div className={styles.time}>
          <span>0:19</span>
          <span>/</span>
          <span>3:21</span>
        </div>
      </div>
    </div>
  )
}

export default BgMusicSettingPlayer;