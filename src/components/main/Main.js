/* Import */
import { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SubHeader from "../sub/SubHeader.js";
import SubFooter from "../sub/SubFooter.js";
/* CSS Module */
import styles from "../../css/module/main/Main.module.scss";
/* Image */
import logoImg from "../../img/main/logo.svg";
import mainImg1 from "../../img/main/visual/main1.png";
import mainImg1Mo from "../../img/main/visual/main1_m.png";
import mainImg2 from "../../img/main/visual/main2.png";
import mainImg2Mo from "../../img/main/visual/main2_m.png";
import mouseImg from "../../img/main/icon/mouse.svg";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Main = () => {
  const { isMobile } = useContext(SetContext);
  const location = useLocation();
  const butterInitialized = useRef(false);
  // useEffect(() => {
  //   if (location.pathname === '/' && !butterInitialized.current) {
  //     const script = document.createElement('script');
  //     script.src = '/js/butter.js'; 
  //     script.async = true;

  //     script.onload = () => {
  //       if (window.butter && typeof window.butter.init === 'function') {
  //         const butterWrapper = document.getElementById('butter');
  //         if (butterWrapper) {
  //           window.butter.init({
  //             wrapperId: 'butter',
  //             wrapperDamper: 0.07,
  //             cancelOnTouch: false,
  //           });
  //           butterInitialized.current = true; 
  //         }
  //       } else {
  //         console.error('Butter.js가 제대로 로드되지 않았습니다.');
  //       }
  //     };

  //     script.onerror = () => {
  //       console.error('Butter.js 로드 실패');
  //     };

  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);

  //       if (window.butter && typeof window.butter.cancel === 'function') {
  //         window.butter.cancel();
  //       }

  //       butterInitialized.current = false;
  //     };
  //   }

  //   return () => {
  //     if (window.butter && typeof window.butter.cancel === 'function') {
  //       window.butter.cancel();
  //     }
  //   };

  // }, [location.pathname]);  
  return (
    <>
      <SubHeader />
      <div id="butter" className={styles.scroll__wrapper}>
        <section className="content">
        <article className="visual">
          <div className="swiper-container">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={false}
              centeredSlides={true}
              modules={[Pagination, Navigation]}
              className="visualSwiper"
              navigation={{
                prevEl: '.visual .swiper-button-wrapper .swiper-button-prev',
                nextEl: '.visual .swiper-button-wrapper .swiper-button-next',
              }}
            >
              <SwiperSlide>
                <></>
                {
                  !isMobile ? <img src={mainImg1} alt="" /> : <img src={mainImg1Mo} alt="" />
                }
                <div className="view__wrapper">
                  <div className="visual__wrapper">
                    <div className="text">
                      <h2>감성과 기능 모두 갖춘<br />모바일 청첩장!</h2>
                      <span>언제든 쉽고 빠르게 제작할 수 있습니다.</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <></>
                {
                  !isMobile ? <img src={mainImg2} alt="" /> : <img src={mainImg2Mo} alt="" />
                }
                <div className="view__wrapper">
                  <div className="visual__wrapper">
                    <div className="text">
                      <h2>다양한 디자인과<br />심플한 기능!</h2>
                      <span>특별한 당신에게 편리함을 선사합니다.</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-button-wrapper">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="scroll">
                <img src={mouseImg} alt="" />
                <p>SCROLL</p>
              </div> 
            </Swiper>
          </div>
        </article>
        <article className="intro">
          <div className="view__wrapper">
            <div className="intro__wrapper">
              <h3 className="style__title center">모바일 청첩장 소개</h3>
              <div className="list">
                <ul>
                  <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="image">
                      <img src="./images/icon/pen.svg" alt="다양한 템플릿" />
                    </div>
                    <div className="text">
                      <p>
                        다양한 템플릿
                        <span>가족, 지인용으로 사용</span>
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="image">
                      <img src="./images/icon/map.svg" alt="길찾기, 예식일정" />
                    </div>
                    <div className="text">
                      <p>
                        길찾기, 예식일정
                        <span>예식 정보를 한 번에!</span>
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <div className="image">
                      <img src="./images/icon/gift.svg" alt="정성깃든 답례품" />
                    </div>
                    <div className="text">
                      <p>
                        정성깃든 답례품
                        <span>감사의 마음 표현하기</span>
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                    <div className="image">
                      <img src="./images/icon/moneygift.svg" alt="축의금, 화환" />
                    </div>
                    <div className="text">
                      <p>
                        축의금, 화환
                        <span>축하의 마음 전하기</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article className="menu">
          <div className="view__wrapper">
            <div className="menu__wrapper">
              <div className="title">
                <h3 className="style__title">모바일 청첩장 메뉴</h3>
                <p>
                  모바일 청첩장 기능이 궁금하신가요?<br />
                  청첩장 만들기는 물론 답례품과 감사장 보내기 메뉴로<br />
                  고마운 분들에게 마음을 표현할 수 있습니다.
                </p>
                <a href="#" className="button main">
                  <p>바로 시작하기</p>
                  <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                </a>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/mail_heart.svg" alt="청첩장 만들기" />
                      </div>
                      <p>청첩장 만들기</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/modify.svg" alt="청첩장 관리" />
                      </div>
                      <p>청첩장 관리</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/flower.svg" alt="화환 보내기" />
                      </div>
                      <p>화환 보내기</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/gift_menu.svg" alt="답례품 보내기" />
                      </div>
                      <p>답례품 보내기</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/mail_click.svg" alt="감사장 보내기" />
                      </div>
                      <p>감사장 보내기</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                      <div className="image">
                        <img src="./images/icon/wedding_people.svg" alt="예식 순서" />
                      </div>
                      <p>예식 순서</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article className="template ver2">
          <div className="view__wrapper">
            <div className="template__wrapper">
              <h3 className="style__title center">다양한 템플릿</h3>
              <div className="button__wrapper">
                <a href="javascript:;" className="button template on">등록순</a>
                <a href="javascript:;" className="button template">인기순</a>
              </div>
              <div className="slide__wrapper">
                <div className="frame">
                  <div id="templateSwiper2" className="swiper2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template01.png" alt="" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template02.png" alt="" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template03.png" alt="" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template04.png" alt="" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template05.png" alt="" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template06.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div> 
                </div>
                <div id="templateSwiper" className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template01.png" alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template02.png" alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template03.png" alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template04.png" alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template05.png" alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a href="./invitation.html">
                        <img src="./images/template/template06.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-button-wrapper">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="faq">
          <div className="view__wrapper">
            <div className="faq__wrapper">
              <div className="item">
                <h3 className="style__title center white">공지사항</h3>
                <p>
                  모바일 청첩장 서비스 ‘시집가는 날’의<br />
                  새로운 소식을 전합니다.
                </p>
                <a href="#">
                  <p>바로가기</p>
                  <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                </a>
              </div>
              <div className="item">
                <h3 className="style__title center white">FAQ</h3>
                <p>
                  이용자들이 가장 자주 묻는 질문과 답변을<br />
                  확인해 보세요.
                </p>
                <a href="#">
                  <p>바로가기</p>
                  <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </article>
        </section>
        <SubFooter />
      </div>
    </>
  )
}

export default Main;