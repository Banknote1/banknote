import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Partners.module.css';



const fadeAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + 'ms';
  const transitionTimingFunction = 'ease-in-out';

  let slideStyle = {
    position: 'absolute',
    display: 'block',

    minHeight: '100%',
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: 'relative',
    },
    prevStyle: {
      ...slideStyle,
      opacity: 0, // Fade out the previous slide
    },
  };
};

const Partners = () => {
  const sectors = [
    'Page1',
    'Page2',
    'Page3',
    'Page4',
    'Page5',
  ];


  const data = [
    { partnerName: ' ', buttonNumber: 0, imageSrc: '/xyz.xyz', info: '' },
    { partnerName: 'Toy & Joy', buttonNumber: 1, imageSrc: '/toyjoy.svg', info: 'Info for Button 1' },
    { partnerName: 'YGB', buttonNumber: 2, imageSrc: '/YBG.svg', info: 'Info for Button 2' },
    { partnerName: 'Al Safwa', buttonNumber: 3, imageSrc: '/image3.png', info: 'Info for Button 3' },
    { partnerName: 'Al Shaboshky', buttonNumber: 4, imageSrc: '/image4.png', info: 'Info for Button 4' },
    { partnerName: 'Hesham Tyres', buttonNumber: 5, imageSrc: '/image5.png', info: 'Info for Button 5' },
    { partnerName: 'Bower Trading', buttonNumber: 6, imageSrc: '/image5.png', info: 'Info for Button 6' },
    { partnerName: 'Al Mostafa', buttonNumber: 7, imageSrc: '/image5.png', info: 'Info for Button 7' },
    { partnerName: 'Al Shourok', buttonNumber: 8, imageSrc: '/image5.png', info: 'Info for Button 8' },
    { partnerName: 'Al Hossam', buttonNumber: 9, imageSrc: '/image5.png', info: 'Info for Button 9' },
    { partnerName: 'Tryo Market', buttonNumber: 10, imageSrc: '/image5.png', info: 'Info for Button 10' },
    { partnerName: 'Pyramids', buttonNumber: 11, imageSrc: '/image5.png', info: 'Info for Button 11' },
    { partnerName: 'Teramed', buttonNumber: 12, imageSrc: '/image5.png', info: 'Info for Button 12' },
    { partnerName: 'Al Shams', buttonNumber: 13, imageSrc: '/image5.png', info: 'Info for Button 13' },
    { partnerName: 'Power Trading', buttonNumber: 14, imageSrc: '/image5.png', info: 'Info for Button 14' },
    { partnerName: 'Fuchem', buttonNumber: 15, imageSrc: '/image5.png', info: 'Info for Button 15' },
    { partnerName: 'Al Fouad', buttonNumber: 16, imageSrc: '/image5.png', info: 'Info for Button 16' },
    { partnerName: 'Al Sef', buttonNumber: 17, imageSrc: '/image5.png', info: 'Info for Button 17' },
    { partnerName: 'Tolba Gorup', buttonNumber: 18, imageSrc: '/image5.png', info: 'Info for Button 18' },
    { partnerName: 'Mosbah', buttonNumber: 19, imageSrc: '/image5.png', info: 'Info for Button 19' },
    { partnerName: 'Al Masa', buttonNumber: 20, imageSrc: '/image5.png', info: 'Info for Button 20' },
    { partnerName: 'Happy Star', buttonNumber: 21, imageSrc: '/image5.png', info: 'Info for Button 21' },
    { partnerName: 'Sanusi', buttonNumber: 22, imageSrc: '/image5.png', info: 'Info for Button 22' },
    { partnerName: 'Mecro Market', buttonNumber: 23, imageSrc: '/image5.png', info: 'Info for Button 23' },
    { partnerName: 'Al Ghandour', buttonNumber: 24, imageSrc: '/image5.png', info: 'Info for Button 24' },
    { partnerName: 'Al Nozha', buttonNumber: 25, imageSrc: '/image5.png', info: 'Info for Button 25' },
    { partnerName: 'Global Vet', buttonNumber: 26, imageSrc: '/image5.png', info: 'Info for Button 26' },
    { partnerName: 'Dr Ashraf', buttonNumber: 27, imageSrc: '/image5.png', info: 'Info for Button 27' },
    { partnerName: 'Ashraf gaber', buttonNumber: 28, imageSrc: '/image5.png', info: 'Info for Button 28' },
    { partnerName: 'Metal Tech', buttonNumber: 29, imageSrc: '/image5.png', info: 'Info for Button 29' },
    { partnerName: '2M Group', buttonNumber: 30, imageSrc: '/image5.png', info: 'Info for Button 30' },
    { partnerName: 'Toy & Joy', buttonNumber: 31, imageSrc: '/toyjoy.svg', info: 'Info for Button 1' },
    { partnerName: 'YGB', buttonNumber: 32, imageSrc: '/YBG.svg', info: 'Info for Button 2' },
    { partnerName: 'Al Safwa', buttonNumber: 33, imageSrc: '/image3.png', info: 'Info for Button 3' },
    { partnerName: 'Al Shaboshky', buttonNumber: 34, imageSrc: '/image4.png', info: 'Info for Button 4' },
    { partnerName: 'Hesham Tyres', buttonNumber: 35, imageSrc: '/image5.png', info: 'Info for Button 5' },
    { partnerName: 'Bower Trading', buttonNumber: 36, imageSrc: '/image5.png', info: 'Info for Button 6' },
    { partnerName: 'Al Mostafa', buttonNumber: 37, imageSrc: '/image5.png', info: 'Info for Button 7' },
    { partnerName: 'Al Shourok', buttonNumber: 38, imageSrc: '/image5.png', info: 'Info for Button 8' },
    { partnerName: 'Al Hossam', buttonNumber: 39, imageSrc: '/image5.png', info: 'Info for Button 9' },
    { partnerName: 'Tryo Market', buttonNumber: 40, imageSrc: '/image5.png', info: 'Info for Button 10' },
    { partnerName: 'Pyramids', buttonNumber: 41, imageSrc: '/image5.png', info: 'Info for Button 11' },
    { partnerName: 'Teramed', buttonNumber: 42, imageSrc: '/image5.png', info: 'Info for Button 12' },
    { partnerName: 'Al Shams', buttonNumber: 43, imageSrc: '/image5.png', info: 'Info for Button 13' },
    { partnerName: 'Power Trading', buttonNumber: 44, imageSrc: '/image5.png', info: 'Info for Button 14' },
    { partnerName: 'Fuchem', buttonNumber: 45, imageSrc: '/image5.png', info: 'Info for Button 15' },
    { partnerName: 'Al Fouad', buttonNumber: 46, imageSrc: '/image5.png', info: 'Info for Button 16' },
    { partnerName: 'Al Sef', buttonNumber: 47, imageSrc: '/image5.png', info: 'Info for Button 17' },
    { partnerName: 'Tolba Gorup', buttonNumber: 48, imageSrc: '/image5.png', info: 'Info for Button 18' },
    { partnerName: 'Mosbah', buttonNumber: 49, imageSrc: '/image5.png', info: 'Info for Button 19' },
    { partnerName: 'Al Masa', buttonNumber: 50, imageSrc: '/image5.png', info: 'Info for Button 20' },
    { partnerName: 'Happy Star', buttonNumber: 51, imageSrc: '/image5.png', info: 'Info for Button 21' },
    { partnerName: 'Sanusi', buttonNumber: 52, imageSrc: '/image5.png', info: 'Info for Button 22' },
    { partnerName: 'Mecro Market', buttonNumber: 53, imageSrc: '/image5.png', info: 'Info for Button 23' },
    { partnerName: 'Al Ghandour', buttonNumber: 54, imageSrc: '/image5.png', info: 'Info for Button 24' },
    { partnerName: 'Al Nozha', buttonNumber: 55, imageSrc: '/image5.png', info: 'Info for Button 25' },
    { partnerName: 'Global Vet', buttonNumber: 56, imageSrc: '/image5.png', info: 'Info for Button 26' },
    { partnerName: 'Dr Ashraf', buttonNumber: 57, imageSrc: '/image5.png', info: 'Info for Button 27' },
    { partnerName: 'Ashraf gaber', buttonNumber: 58, imageSrc: '/image5.png', info: 'Info for Button 28' },
    { partnerName: 'Metal Tech', buttonNumber: 59, imageSrc: '/image5.png', info: 'Info for Button 29' },
    { partnerName: '2M Group', buttonNumber: 60, imageSrc: '/image5.png', info: 'Info for Button 30' },




  ];
  const [selectedButton, setSelectedButton] = useState(null);
  const [headlineDisplay, setHeadlineDisplay] = useState('block');
  const [imageDisplay, setImageDisplay] = useState('none');
  const [currentData, setCurrentData] = useState(data[0]);
  const [defaultDesDisplay, setDefaultDesDisplay] = useState('block');
  const [partnerDesDisplay, setPartnerDesDisplay] = useState('none');

  const handleButtonClick = async (buttonNumber) => {
    try {
      // Wrap the find operation in a Promise
      const findClickedData = () => {
        return new Promise((resolve, reject) => {
          const clickedData = data.find((item) => item.buttonNumber === buttonNumber);
          if (clickedData) {
            resolve(clickedData);
          } else {
            reject(new Error('Clicked data not found'));
          }
        });
      };

      // Use async/await to wait for the Promise to resolve
      const clickedData = await findClickedData();

      // Update the state to hide the default description and show partner description
      setDefaultDesDisplay('none');
      setPartnerDesDisplay('block');

      // Update the state with the data for the clicked button
      setHeadlineDisplay('none');
      setCurrentData(clickedData);
      setImageDisplay('block');
      // Set the selected button
      setSelectedButton(buttonNumber);
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  const handleReset = () => {
    setSelectedButton(null);
    setHeadlineDisplay('block');
    setImageDisplay('none');
    setCurrentData(data[0]);
    setDefaultDesDisplay('block');
    setPartnerDesDisplay('none');
  };


  const [selectedPage, setSelectedPage] = useState(0);
  const renderCustomArrow = (direction, clickHandler, isEnabled, label) => (
    <>
      {direction === 'prev' && (
        <button
          className={styles.leftarrow}
          onClick={() => {
            clickHandler();
            setSelectedPage((prevPage) => (prevPage === 0 ? sectors.length - 1 : prevPage - 1));
            handleReset();
          }}
          disabled={!isEnabled}
          aria-label={label}
        ></button>
      )}

      {direction === 'next' && (
        <button
          className={styles.rightarrow}
          onClick={() => {
            clickHandler();
            setSelectedPage((prevPage) => (prevPage === sectors.length - 1 ? 0 : prevPage + 1));
            handleReset();

          }}
          disabled={!isEnabled}
          aria-label={label}
        ></button>
      )}
    </>
  );


  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component has mounted
    setAnimate(true);
  }, []);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.lefttopCont}>
        <div className={styles.headline} style={{ display: headlineDisplay }}>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>S</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>u</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>c</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>c</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>e</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>s</h1>
            <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>s</h1>
          </div>
          <h2>Partners</h2>
        </div>
        <div className={styles.partnerlogo}>
          <img
            src={currentData.imageSrc}
            alt={`Image for Button ${currentData.buttonNumber}`}
            style={{ display: imageDisplay }}
          />

        </div>

      </div>
      <div className={styles.rightbottomCont}>

        <div className={styles.defaultdes} style={{ display: defaultDesDisplay }}>
          <div className={styles.des}  >
            <div className={styles.des1} >
              <h1>+80</h1>
              <h2>Partners</h2>
            </div>
            <div className={styles.des2} >

              <h1>
                <span style={{ color: '#DDB96E' }}>Our</span> collaborative approach ensures effective relationships, contributing to successful ventures across these diverse industries.
              </h1>
            </div>
          </div></div>
        <div className={styles.partnerdes} style={{ display: partnerDesDisplay, width: `100%` }}>
          <div className={styles.des2} >

            <h1 style={{ marginLeft: `7%` }}>
              {currentData && currentData.info}
            </h1>
          </div>

        </div>


      </div>
      {/* Carousel */}
      <Carousel
        className={styles.Carousel}
        animationHandler={fadeAnimationHandler}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={true} // Enable arrows
        renderArrowNext={(clickHandler1, hasNext, label) =>
          renderCustomArrow('next', clickHandler1, hasNext, label)
        }
        renderArrowPrev={(clickHandler2, hasPrev, label) =>
          renderCustomArrow('prev', clickHandler2, hasPrev, label)
        }

      >

        {sectors.map((sector, index) => (
          <div className={styles.CarouselCont} key={index} style={{ position: 'relative' }}>
            {index === 0 && (
              <>
                {/* Overlay for Manufacturing */}
                <div className='overlay'>
                  <div className={styles.slidecontainer}>



                    <div className={styles.leftCont}>
                      <div className={styles.lefttopCont}>

                      </div>
                      <div className={styles.leftbottomCont}>
                        <div className={styles.contpartners}>
                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 1 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(1)}
                            >
                              {data[1].partnerName}
                            </button>

                            <button
                              className={selectedButton === 2 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(2)}
                            >
                              {data[2].partnerName}
                            </button>

                            <button
                              className={selectedButton === 3 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(3)}
                            >
                              {data[3].partnerName}
                            </button>

                            <button
                              className={selectedButton === 4 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(4)}
                            >
                              {data[4].partnerName}
                            </button>
                            <button
                              className={selectedButton === 5 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(5)}
                            >
                              {data[5].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 6 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(6)}
                            >
                              {data[6].partnerName}
                            </button>
                            <button
                              className={selectedButton === 7 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(7)}
                            >
                              {data[7].partnerName}
                            </button>
                            <button
                              className={selectedButton === 8 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(8)}
                            >
                              {data[8].partnerName}
                            </button>
                            <button
                              className={selectedButton === 9 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(9)}
                            >
                              {data[9].partnerName}
                            </button>
                            <button
                              className={selectedButton === 10 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(10)}
                            >
                              {data[10].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 11 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(11)}
                            >
                              {data[11].partnerName}
                            </button>
                            <button
                              className={selectedButton === 12 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(12)}
                            >
                              {data[12].partnerName}
                            </button>
                            <button
                              className={selectedButton === 13 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(13)}
                            >
                              {data[13].partnerName}
                            </button>
                            <button
                              className={selectedButton === 14 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(14)}
                            >
                              {data[14].partnerName}
                            </button>
                            <button
                              className={selectedButton === 15 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(15)}
                            >
                              {data[15].partnerName}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className={styles.rightCont}>
                      <div className={styles.righttopCont}>
                        <div className={styles.contpartners}>
                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 16 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(16)}
                            >
                              {data[16].partnerName}
                            </button>

                            <button
                              className={selectedButton === 17 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(17)}
                            >
                              {data[17].partnerName}
                            </button>

                            <button
                              className={selectedButton === 18 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(18)}
                            >
                              {data[18].partnerName}
                            </button>

                            <button
                              className={selectedButton === 19 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(19)}
                            >
                              {data[19].partnerName}
                            </button>
                            <button
                              className={selectedButton === 20 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(20)}
                            >
                              {data[20].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 21 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(21)}
                            >
                              {data[21].partnerName}
                            </button>

                            <button
                              className={selectedButton === 22 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(22)}
                            >
                              {data[22].partnerName}
                            </button>

                            <button
                              className={selectedButton === 23 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(23)}
                            >
                              {data[23].partnerName}
                            </button>

                            <button
                              className={selectedButton === 24 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(24)}
                            >
                              {data[24].partnerName}
                            </button>
                            <button
                              className={selectedButton === 25 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(25)}
                            >
                              {data[25].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 26 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(26)}
                            >
                              {data[26].partnerName}
                            </button>

                            <button
                              className={selectedButton === 27 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(27)}
                            >
                              {data[27].partnerName}
                            </button>

                            <button
                              className={selectedButton === 28 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(28)}
                            >
                              {data[28].partnerName}
                            </button>

                            <button
                              className={selectedButton === 29 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(29)}
                            >
                              {data[29].partnerName}
                            </button>
                            <button
                              className={selectedButton === 30 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(30)}
                            >
                              {data[30].partnerName}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content of the Slide */}


              </>
            )}

            {index === 1 && (
              <>

                {/* Overlay for Trading */}
                <div className='overlay'>
                  <div className={styles.slidecontainer}>



                    <div className={styles.leftCont}>
                      <div className={styles.lefttopCont}>

                      </div>
                      <div className={styles.leftbottomCont}>
                        <div className={styles.contpartners}>
                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 31 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(31)}
                            >
                              {data[31].partnerName}
                            </button>

                            <button
                              className={selectedButton === 32 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(32)}
                            >
                              {data[32].partnerName}
                            </button>

                            <button
                              className={selectedButton === 33 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(33)}
                            >
                              {data[33].partnerName}
                            </button>

                            <button
                              className={selectedButton === 34 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(34)}
                            >
                              {data[34].partnerName}
                            </button>
                            <button
                              className={selectedButton === 35 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(35)}
                            >
                              {data[35].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 36 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(36)}
                            >
                              {data[36].partnerName}
                            </button>
                            <button
                              className={selectedButton === 37 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(37)}
                            >
                              {data[37].partnerName}
                            </button>
                            <button
                              className={selectedButton === 38 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(38)}
                            >
                              {data[38].partnerName}
                            </button>
                            <button
                              className={selectedButton === 39 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(39)}
                            >
                              {data[39].partnerName}
                            </button>
                            <button
                              className={selectedButton === 40 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(40)}
                            >
                              {data[40].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 41 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(41)}
                            >
                              {data[41].partnerName}
                            </button>
                            <button
                              className={selectedButton === 42 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(42)}
                            >
                              {data[42].partnerName}
                            </button>
                            <button
                              className={selectedButton === 43 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(43)}
                            >
                              {data[43].partnerName}
                            </button>
                            <button
                              className={selectedButton === 44 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(44)}
                            >
                              {data[44].partnerName}
                            </button>
                            <button
                              className={selectedButton === 45 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(45)}
                            >
                              {data[45].partnerName}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className={styles.rightCont}>
                      <div className={styles.righttopCont}>
                        <div className={styles.contpartners}>
                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 46 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(46)}
                            >
                              {data[46].partnerName}
                            </button>

                            <button
                              className={selectedButton === 47 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(47)}
                            >
                              {data[47].partnerName}
                            </button>

                            <button
                              className={selectedButton === 48 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(48)}
                            >
                              {data[48].partnerName}
                            </button>

                            <button
                              className={selectedButton === 49 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(49)}
                            >
                              {data[49].partnerName}
                            </button>
                            <button
                              className={selectedButton === 50 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(50)}
                            >
                              {data[50].partnerName}
                            </button>

                          </div>

                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 51 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(51)}
                            >
                              {data[51].partnerName}
                            </button>

                            <button
                              className={selectedButton === 52 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(52)}
                            >
                              {data[52].partnerName}
                            </button>

                            <button
                              className={selectedButton === 53 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(53)}
                            >
                              {data[53].partnerName}
                            </button>

                            <button
                              className={selectedButton === 54 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(24)}
                            >
                              {data[54].partnerName}
                            </button>
                            <button
                              className={selectedButton === 55 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(55)}
                            >
                              {data[55].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 56 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(26)}
                            >
                              {data[56].partnerName}
                            </button>

                            <button
                              className={selectedButton === 57 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(57)}
                            >
                              {data[57].partnerName}
                            </button>

                            <button
                              className={selectedButton === 58 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(58)}
                            >
                              {data[58].partnerName}
                            </button>

                            <button
                              className={selectedButton === 59 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(59)}
                            >
                              {data[59].partnerName}
                            </button>
                            <button
                              className={selectedButton === 60 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(60)}
                            >
                              {data[60].partnerName}
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </>
            )}

            {index === 2 && (
              <>

                {/* Overlay for Tech */}
                <div className='overlay'>





                </div>
                {/* Content of the Slide */}



              </>
            )}

            {index === 3 && (
              <>

                {/* Overlay for Transportation */}
                <div className='overlay'>

                </div>
                {/* Content of the Slide */}

              </>
            )}

            {index === 4 && (
              <>

                {/* Overlay for Construction */}
                <div className='overlay'>

                </div>
                {/* Content of the Slide */}


              </>
            )}
          </div>
        ))}

      </Carousel>
      <div className={styles.arrows}>
        {/* Numbered buttons */}
        {sectors.map((_, index) => (
          <button
            key={index}
            className={`${styles.pageNumber} ${index === selectedPage ? styles.selectedPage : ''}`}

          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Partners;