import React, { useState, useEffect, useRef } from 'react';
import Slider from './Slider';
import styles from './Accounting.module.css';
import { useLocation } from 'react-router-dom';
import '../../index.css';
import Footer from '../Footer/Footer'
import BottomButton from '../Footer/BottomButton'
import debounce from 'lodash/debounce'; // Import debounce function
const framesData = [
  {
    head1: 'Banking',
    head2: 'Facilities',
    description: 'Bank note deal with more then 27 governmental and private bank ensuring a wide array of funding options perfectly suited to your company\'s needs.',
    imageSrc: '/Banking\ Facilities\ Pic.png',
    frame1: 'Suggestion for funding from diverse sources',
    frame2: 'Restructuring current firms',
    frame3: 'Accurate Financial Projections',
    frame4: 'Customized business planes',
    frame5: 'Company Evaluation',
    frame6: 'Transaction Support'
  },
  {
    head1: 'Accounting',
    head2: 'Advisory Services',
    description: 'Banknote experts guide you through difficult, complicated challenges brought on by transactions and corporate choices.',
    imageSrc: '/AAS.png',
    frame1: 'Auditing Financial Documents',
    frame2: 'Transaction Support',
    frame3: 'Risk Management',
    frame4: 'Technical accounting consultation',
    frame5: 'Ensuring regulatory compliance',
    frame6: 'Accounting Standards Interpretation'
  },
  {
    head1: 'Financial',
    head2: 'Planning',
    description: 'We offers a comprehensive range of solutions focused on managing and optimizing your financial resources.',
    imageSrc: '/Financial\ planning\ pic.png',
    frame1: 'Budgeting and Saving Strategies',
    frame2: 'Insurance Planning',
    frame3: 'Tax Planning',
    frame4: 'Investment Planning',
    frame5: 'Debt Management',
    frame6: 'Cash Flow Management'
  },
  {
    head1: 'Assurance',
    head2: '& Advisory',
    description: 'We ensure that our customers\' innovative concepts stand on a solid financial foundation, backed by rational logic and stringent compliance with legal requisites.',
    imageSrc: '/Assurance\ &\ Advisory\ Pic.png',
    frame1: 'Global Accounting Standards',
    frame2: 'Internal Control Evaluation',
    frame3: 'Commercial Risk Service',
    frame4: 'Preparing financial statements',
    frame5: 'Ensuring the regulatory compliance',
    frame6: 'Risk Management'
  },

];


const Accounting = () => {
  const footerIconsRef = useRef(null);
  const [showBottomButton, setShowBottomButton] = useState(true); // State to manage button visibility

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPageNumber = queryParams.get('pagenumb') || 1;

  const [currentSlide, setCurrentSlide] = useState(initialPageNumber - 1);
  const totalSlides = framesData.length;

  const slideWidth = 100; // Each slide takes 100% of the width

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const slidesrowStyle = {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    width: `${totalSlides * slideWidth}%`,
    transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  useEffect(() => {
    const handleScroll = debounce((event) => {

      if (event.deltaY > 0) {
        // Scrolling down, go to the next page
        handleNextClick();
      } else if (event.deltaY < 0) {
        // Scrolling up, go to the previous page (optional)
        handlePrevClick();
      }

    }, 200); // Adjust the debounce delay as needed


    // Add the event listener to handle scroll events
    window.addEventListener('wheel', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide, handleNextClick, handlePrevClick]);


  useEffect(() => {
    const footerIcons = document.getElementById('footericons');
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.1,
    });
    if (footerIcons) {
      observer.observe(footerIcons);
    }

    return () => {
      if (footerIcons) {
        observer.unobserve(footerIcons);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        setShowBottomButton(true); // If intersecting, show the button
      } else {
        setShowBottomButton(false); // If not intersecting, hide the button
      }
    });
  };
  return (
    <div>
      <div className='overlay' style={{}}></div>
      <div className={styles.mobPageContainer} style={{ overflowY: 'auto', maxHeight: '100vh', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className={styles.submobPageContainer}>
          <div className={styles.mobTitle}>
            <h1>
              Financial <span style={{ color: '#EBD5A8' }}>Services</span>
            </h1>
          </div>
          {framesData.map((data, index) => (
            <div key={index} style={{ marginBottom: '15%' }} >
              <div className={styles.mobimageCont}>
                <img src={data.imageSrc} alt="" />
              </div>
              <div className={styles.mobText}>
                <h2 className={styles.mobHead1}>{data.head1}</h2>
                <h2 className={styles.mobHead2}>{data.head2}</h2>
                <div className={styles.mobDisCont}><p>{data.description}</p></div>
              </div>
              {Object.entries(data).slice(3).filter(([key]) => key.startsWith('frame')).map(([key, value], frameIndex) => (
                <div key={frameIndex} className={styles.mobshapecontainer}>
                  <div className={styles.mobnumbline}>
                    <div className={styles.mobnumberingshape}>
                      <span className={styles.mobnumber}>{frameIndex + 1}</span>
                    </div>
                    <hr className={styles.mobseparator} />
                  </div>
                  <div className={styles.mobframe}>
                    <h3>{value}</h3>
                  </div>
                </div>
              ))}

            </div>
          ))}

        </div>
        <div style={{ zIndex: '99' }}>  <Footer></Footer></div>

        {showBottomButton && <BottomButton ref={footerIconsRef}></BottomButton>}

      </div>



      <div className={styles.pageContainer}>
        <div className='overlay' style={{ display: 'block', position: 'fixed' }}>
          <div style={slidesrowStyle}>
            {framesData.map((data, index) => (
              <div key={index} style={{ width: `${slideWidth}%` }}>
                <Slider data={data} />
              </div>
            ))}
          </div>
          <div className={styles.slidersbuttons}>
            <button className={styles.leftarrow} onClick={handlePrevClick}></button>

            {[...Array(totalSlides).keys()].map((pageNum) => (
              <button
                key={pageNum}
                className={`${styles.pageNumber} ${pageNum === currentSlide ? styles.selectedPage : ''
                  }`}
                onClick={() => setCurrentSlide(pageNum)}
              >
                {pageNum + 1}
              </button>
            ))}

            <button className={styles.rightarrow} onClick={handleNextClick}></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Accounting;

// http://localhost:3000/financialservices/aas?pagenumb=2
