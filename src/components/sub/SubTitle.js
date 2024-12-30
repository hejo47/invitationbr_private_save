/* import */
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* CSS Module */
import styles from "../../css/module/sub/SubTitle.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const SubTitle = ({ subTitle, subContent, subPhoto, type }) => {
  gsap.registerPlugin(ScrollTrigger);
  const { isMobile } = useContext(SetContext);
  const photoRef = useRef(null);
  useEffect(() => {
    if(type !== "mng") {
      const element = photoRef.current;
      if (!isMobile) {
        gsap.fromTo(
          element,
          { width: "50vw",
            height: "40vh",
            borderRadius: "16px"
          },
          {
            width: "100vw",
            height: "80vh",
            borderRadius: "0px",
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: element,
              scroller: "body",
              start: "top", 
              end: "+=50%", 
              scrub: true,
              markers: true, 
            },
          }
        );
      } else if (isMobile) {
        gsap.fromTo(
          element,
          { width: "50vw",
            height: "12vh",
            borderRadius: "16px"
          },
          {
            width: "100vw",
            height: "25vh",
            borderRadius: "0px",
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: element,
              scroller: "body",
              start: "top", 
              end: "+=10%", 
              scrub: true,
              // markers: true, 
            },
          }
        );
      }
      ScrollTrigger.refresh();
    }
  }, [isMobile, type]);
  return (
    <div 
      className={styles.sub__title}
      // style={type !== "mng" && !isMobile ? {minHeight: "calc(1080 / 1920 * 100vw)"} : null}
      style={type !== "mng" && !isMobile ? {minHeight: "calc(120vh)"} : null}
    >
      <div className={styles.sub__title_wrap}>
        <h2>{subTitle}</h2>
        {subContent ? <p>{subContent}</p> : null}
      </div>
      {
        type !== "mng" ?
        <div 
          ref={photoRef} 
          className={styles.sub__title_photo} 
          style={{height: "380px", backgroundImage: `url(${subPhoto})`}}
        >
        </div> : null
      }
    </div>
  )
}

export default SubTitle;