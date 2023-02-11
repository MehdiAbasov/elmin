import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPhone } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2'
import myPhoto from './img/1.jpg'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CountUp from 'react-countup';
import img1 from './img/2.jpg';
import img2 from './img/3.jpg';
import img3 from './img/4.jpg';
import img4 from './img/5.jpg';
import img5 from './img/6.jpg';
import img6 from './img/7.jpg';
import img7 from './img/8.jpg';
import img8 from './img/9.jpg';
import img9 from './img/10.jpg';
import "swiper/css";
import "swiper/css/scrollbar";

import { Pagination, EffectCoverflow } from "swiper";
function App() {

  const overlayRef = useRef();
  const bars = useRef()
  const xmark = useRef()
  function openOverlay() {
    if (bars) {
      overlayRef.current.classList.add('d-flex')
    }
  }
  function closeOverlay() {
    if (xmark) {
      overlayRef.current.classList.remove('d-flex')
    }
    else if (overlayRef) {
      overlayRef.current.classList.remove('d-flex')
    }
  }

  console.log("THIS WEBSITE CREATED BY MEHDI ABASOV")

  const form = useRef();
  const YOUR_SERVICE_ID = "service_ccl90gb"
  const YOUR_TEMPLATE_ID = "template_h3w7znh"
  const YOUR_PUBLIC_KEY = "aWBCmGJZRnyOC4-JE"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  };
  return (
    <>
      <title>Elmin Agayev</title>
      <meta name="keywords" content="elmin agayev, Elmin, elmin, az-dili dersleri, ders, azerbaycan, azerbaycan-dili, azerbaycan dili"></meta>
      <div className='overlay' onClick={closeOverlay} ref={overlayRef}>
        <span className='xmark' ref={xmark} onClick={closeOverlay}><HiXMark /></span>
        <div className='nav-links'>
          <li className='nav-item'><a href='#haqqımda'>Ana Səhifə</a></li>
          <li className='nav-item'><a href='#haqqımda'>Haqqımda</a></li>
          <li className='nav-item'><a href='#əlaqə'>Əlaqə</a></li>
          <li className='nav-item'><a href='#videolar'>Videolar</a></li>
          <li className='nav-item'><a href='#rəylər'>Rəylər</a></li>
        </div>
        <div className='social-icons'>
          <a href='https://www.facebook.com/elmin.agayev.560' target="_blank"><BsFacebook /></a>
          <a href='https://www.facebook.com/@elminagayev' target="_blank"><AiFillYoutube /></a>
          <a href='https://t.me/filo099' target="_blank"><BsTelegram /></a>
        </div>
      </div>
      <div className='Navbar'>
        <div className='container Navbar-container'>
          <a className='logo' href='#haqqımda'>Elmin Agayev</a>
          <div className='nav-links'>
            <li className='nav-item'><a href='#haqqımda'>Ana Səhifə</a></li>
            <li className='nav-item'><a href='#haqqımda'>Haqqımda</a></li>
            <li className='nav-item'><a href='#əlaqə'>Əlaqə</a></li>
            <li className='nav-item'><a href='#qalereya'>Qalereya</a></li>
            <li className='nav-item'><a href='#videolar'>Videolar</a></li>
            <li className='nav-item'><a href='#rəylər'>Rəylər</a></li>
          </div>
          <div className='social-icon gap-4'>
            <a target='_blank' href="https://www.facebook.com/elmin.agayev.560" className='icon'><BsFacebook /></a>
            <a target="_blank" href="https://www.youtube.com/@elminagayev" className='icon'><AiFillYoutube /></a>
            <a href='https://t.me/filo099' target='_blank' className='icon'><BsTelegram /></a>
          </div>
          <div className='menu-icon' onClick={openOverlay} ref={bars}>
            <FaBars />
          </div>
        </div>
      </div>
      <div className='container'>
        <div id='haqqımda' className="about-us row">
          <div className="left-side col-xl-6 col-md-12">
            <div className="l-top">
              <p>Mən</p>
              <span>Elmin Ağayev</span>
              <p>Azərbaycan dili və ədəbiyyat müəllimi</p>
              <p>
                Dörd illik pedoqoji təcrübə.
                Abituriyent və müəllimlərə dəstək üçün youtube kanalımız
                fəaliyyətdədir.
                Dəstək olub faydalana bilərsiniz.</p>
            </div>
            <div className="buttons">
              <a href='#form'>Əlaqə</a>
              <a href='tel:+994 50 877 81 94'>Zəng Et <FaPhone /></a>
            </div>
          </div>
          <div className="right-side col-xl-6 col-md-12">
            <img src={myPhoto} alt="my photo" />
          </div>
        </div>
      </div>
      <div className='container'>
        <h2 id='videolar'>Videolar <AiFillYoutube /></h2>
        <div className='row videolar'>
          <div className='col-xl-4 col-md-12'>
            <iframe src="https://www.youtube.com/embed/C2RRWJh98o4" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='col-xl-4 col-md-12'>
            <iframe src="https://www.youtube.com/embed/P4TAw13ohyw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='col-xl-4 col-md-12'>
            <iframe src="https://www.youtube.com/embed/2agWBI-5sOw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2 id='rəylər'>Reyler</h2>
        <div className='reyler'>

          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='Swiper-Slide'>
                <h5>Mehdi Abasov</h5>
                <p className='rey-metni'>
                  dəyərli insan, müəllim. Həmişə səsiniz yüksəklərdən gəlsin
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Swiper-Slide'>
                <h5>Mehdi Abasov</h5>
                <p className='rey-metni'>dəyərli insan, müəllim. Həmişə səsiniz yüksəklərdən gəlsin</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Swiper-Slide'>
                <h5>Mehdi Abasov</h5>
                <p className='rey-metni'>dəyərli insan, müəllim. Həmişə səsiniz yüksəklərdən gəlsin</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Swiper-Slide'>
                <h5>Mehdi Abasov</h5>
                <p className='rey-metni'>dəyərli insan, müəllim. Həmişə səsiniz yüksəklərdən gəlsin</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='Swiper-Slide'>
                <h5>Mehdi Abasov</h5>
                <p className='rey-metni'>dəyərli insan, müəllim. Həmişə səsiniz yüksəklərdən gəlsin</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='container'>
        <h2 id='qalereya'>Qalereya</h2>
        <div className='fotolar'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}

            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img5} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img6} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img7} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img8} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='drag-siper-slide'>
                <img src={img9} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <h2 id='əlaqə'>Contact</h2>
        <form ref={form} onSubmit={sendEmail} id="form" className='form'>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" name="user_name" className="form-control" id="exampleFormControlInput1" placeholder="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" name="user_email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className='mb-3'>
            <input className='submit btn btn-primary' type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className='Footer'>
        <footer className='container'>
          <div className='row'>
            <div className='col-md-4 d-flex align-items-center'>
              <a className='logo' href='#haqqımda'>Elmin Agayev</a>
            </div>
            <div className='col-md-4 d-flex flex-column justify-content-center'>
              <a href='#'>Ana Səhifə</a>
              <a href='#'>Haqqımda</a>
              <a target="_blank" href='https://www.youtube.com/@elminagayev'>Videolar</a>
              <a href='#form'>Əlaqə</a>
              <a href='#rəylər'>Rəylər</a>
            </div>
            <div className='col-md-4 gap-4 d-flex align-items-center'>
              <a target="_blank" href="https://www.facebook.com/elmin.agayev.560"
                className="fcb-btn scl-btn"><BsFacebook /></a>
              <a target="_blank" href="https://www.youtube.com/@elminagayev" className="ytb-btn scl-btn"><AiFillYoutube /></a>
              <a className='t-btn scl-btn' href='https://t.me/filo099' target='_blank'><BsTelegram /></a>
            </div>
          </div>
          <div className='footer-bottom'>
            <span>ElminAgayev © 2023</span>
            <a target='_blank' href='https://www.instagram.com/mehdi_abasovv/'><FaCode />Site By Mehdi Abasov</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
