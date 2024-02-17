import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Partners.module.css';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  // Define your handleButtonClick function
  const handleButtonClick = async (buttonNumber) => {
    try {
      // Find the partner data based on the buttonNumber
      const partner = data[buttonNumber - 1];

      if (partner) {


        navigate(`/partnersDetails?id=${partner.partnerName}`, {
          state: {
            partnerName: partner.partnerName,
            LogoimageSrc: partner.LogoimageSrc,
            image1Src: partner.image1Src,
            image2Src: partner.image2Src,
            videoSrc: partner.videoSrc,
            videoThumbnail: partner.videoThumbnail,
            info: partner.info
          }
        });
      } else {
        console.error(`Partner not found for button number ${buttonNumber}`);
      }
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  const sectors = [
    'Page1',
    'Page2',

  ];


  const data = [
    {
      partnerName: 'Toy & Joy',
      buttonNumber: 1,
      LogoimageSrc: '/Partners/Toy & Joy/logo.svg',
      image1Src: '/Partners/Toy & Joy/1.jpg',
      image2Src: '/Partners/Toy & Joy/2.jpg',
      videoSrc: '/Partners/Toy & Joy/video.mp4',
      videoThumbnail: '/Partners/Toy & Joy/videoThumbnail.jpg',
      info: 'Info for Button 1'
    },
    {
      partnerName: '2M Group',
      buttonNumber: 2,
      LogoimageSrc: '/Partners/2M Group/logo.svg',
      image1Src: '/Partners/2M Group/1.jpg',
      image2Src: '/Partners/2M Group/2.jpg',
      videoSrc: '/Partners/2M Group/video.mp4',
      videoThumbnail: '/Partners/2M Group/videoThumbnail.jpg',
      info: 'Info for Button 2'
    },
    {
      partnerName: 'Al Eman',
      buttonNumber: 3,
      LogoimageSrc: '/Partners/Al Eman/logo.svg',
      image1Src: '/Partners/Al Eman/1.jpg',
      image2Src: '/Partners/Al Eman/2.jpg',
      videoSrc: '/Partners/Al Eman/video.mp4',
      videoThumbnail: '/Partners/Al Eman/videoThumbnail.jpg',
      info: 'Info for Button 3'
    },
    {
      partnerName: 'Al Hosam',
      buttonNumber: 4,
      LogoimageSrc: '/Partners/Al Hosam/logo.svg',
      image1Src: '/Partners/Al Hosam/1.jpg',
      image2Src: '/Partners/Al Hosam/2.jpg',
      videoSrc: '/Partners/Al Hosam/video.mp4',
      videoThumbnail: '/Partners/Al Hosam/videoThumbnail.jpg',
      info: 'Info for Button 4'
    },
    {
      partnerName: 'Al Masrya Foam',
      buttonNumber: 5,
      LogoimageSrc: '/Partners/Al Masrya Foam/logo.svg',
      image1Src: '/Partners/Al Masrya Foam/1.jpg',
      image2Src: '/Partners/Al Masrya Foam/2.jpg',
      videoSrc: '/Partners/Al Masrya Foam/video.mp4',
      videoThumbnail: '/Partners/Al Masrya Foam/videoThumbnail.jpg',
      info: 'Info for Button 5'
    },
    {
      partnerName: 'Al Mostafa',
      buttonNumber: 6,
      LogoimageSrc: '/Partners/Al Mostafa/logo.svg',
      image1Src: '/Partners/Al Mostafa/1.jpg',
      image2Src: '/Partners/Al Mostafa/2.jpg',
      videoSrc: '/Partners/Al Mostafa/video.mp4',
      videoThumbnail: '/Partners/Al Mostafa/videoThumbnail.jpg',
      info: 'Info for Button 6'
    },
    {
      partnerName: 'Al Shorouq',
      buttonNumber: 7,
      LogoimageSrc: '/Partners/Al Shorouq/logo.svg',
      image1Src: '/Partners/Al Shorouq/1.jpg',
      image2Src: '/Partners/Al Shorouq/2.jpg',
      videoSrc: '/Partners/Al Shorouq/video.mp4',
      videoThumbnail: '/Partners/Al Shorouq/videoThumbnail.jpg',
      info: 'Info for Button 7'
    },
    {
      partnerName: 'Al Sonosy',
      buttonNumber: 8,
      LogoimageSrc: '/Partners/Al Sonosy/logo.svg',
      image1Src: '/Partners/Al Sonosy/1.jpg',
      image2Src: '/Partners/Al Sonosy/2.jpg',
      videoSrc: '/Partners/Al Sonosy/video.mp4',
      videoThumbnail: '/Partners/Al Sonosy/videoThumbnail.jpg',
      info: 'Info for Button 8'
    },
    {
      partnerName: 'Arafa Truck',
      buttonNumber: 9,
      LogoimageSrc: '/Partners/Arafa Truck/logo.svg',
      image1Src: '/Partners/Arafa Truck/1.jpg',
      image2Src: '/Partners/Arafa Truck/2.jpg',
      videoSrc: '/Partners/Arafa Truck/video.mp4',
      videoThumbnail: '/Partners/Arafa Truck/videoThumbnail.jpg',
      info: 'Info for Button 9'
    },
    {
      partnerName: 'Food Service',
      buttonNumber: 10,
      LogoimageSrc: '/Partners/Food Service/logo.svg',
      image1Src: '/Partners/Food Service/1.jpg',
      image2Src: '/Partners/Food Service/2.jpg',
      videoSrc: '/Partners/Food Service/video.mp4',
      videoThumbnail: '/Partners/Food Service/videoThumbnail.jpg',
      info: 'Info for Button 10'
    },
    {
      partnerName: 'Hesham Tyres',
      buttonNumber: 11,
      LogoimageSrc: '/Partners/Hesham Tyres/logo.svg',
      image1Src: '/Partners/Hesham Tyres/1.jpg',
      image2Src: '/Partners/Hesham Tyres/2.jpg',
      videoSrc: '/Partners/Hesham Tyres/video.mp4',
      videoThumbnail: '/Partners/Hesham Tyres/videoThumbnail.jpg',
      info: 'Info for Button 11'
    },
    {
      partnerName: 'Heslo',
      buttonNumber: 12,
      LogoimageSrc: '/Partners/Heslo/logo.svg',
      image1Src: '/Partners/Heslo/1.jpg',
      image2Src: '/Partners/Heslo/2.jpg',
      videoSrc: '/Partners/Heslo/video.mp4',
      videoThumbnail: '/Partners/Heslo/videoThumbnail.jpg',
      info: 'Info for Button 12'
    },
    {
      partnerName: 'International Textile',
      buttonNumber: 13,
      LogoimageSrc: '/Partners/International Textile/logo.svg',
      image1Src: '/Partners/International Textile/1.jpg',
      image2Src: '/Partners/International Textile/2.jpg',
      videoSrc: '/Partners/International Textile/video.mp4',
      videoThumbnail: '/Partners/International Textile/videoThumbnail.jpg',
      info: 'Info for Button 13'
    },
    {
      partnerName: 'Metal Tech',
      buttonNumber: 14,
      LogoimageSrc: '/Partners/Metal tech/logo.svg',
      image1Src: '/Partners/Metal tech/1.jpg',
      image2Src: '/Partners/Metal tech/2.jpg',
      videoSrc: '/Partners/Metal tech/video.mp4',
      videoThumbnail: '/Partners/Metal tech/videoThumbnail.jpg',
      info: 'Info for Button 14'
    },
    {
      partnerName: 'Porsh',
      buttonNumber: 15,
      LogoimageSrc: '/Partners/porsh/logo.svg',
      image1Src: '/Partners/Porsh/1.jpg',
      image2Src: '/Partners/Porsh/2.jpg',
      videoSrc: '/Partners/Porsh/video.mp4',
      videoThumbnail: '/Partners/porsh/videoThumbnail.jpg',
      info: 'Info for Button 15'
    },
    {
      partnerName: 'Power Pack',
      buttonNumber: 16,
      LogoimageSrc: '/Partners/Power Pack/logo.svg',
      image1Src: '/Partners/Power Pack/1.jpg',
      image2Src: '/Partners/Power Pack/2.jpg',
      videoSrc: '/Partners/Power Pack/video.mp4',
      videoThumbnail: '/Partners/Power Pack/videoThumbnail.jpg',
      info: 'Info for Button 16'
    },
    {
      partnerName: 'Royal Palace',
      buttonNumber: 17,
      LogoimageSrc: '/Partners/Royal Palace/logo.svg',
      image1Src: '/Partners/Royal Palace/1.jpg',
      image2Src: '/Partners/Royal Palace/2.jpg',
      videoSrc: '/Partners/Royal Palace/video.mp4',
      videoThumbnail: '/Partners/Royal Palace/videoThumbnail.jpg',
      info: 'Info for Button 17'
    },
    {
      partnerName: 'Al Sama',
      buttonNumber: 18,
      LogoimageSrc: '/Partners/Al Sama/logo.svg',
      image1Src: '/Partners/Al Sama/1.jpg',
      image2Src: '/Partners/Al Sama/2.jpg',
      videoSrc: '/Partners/Al Sama/video.mp4',
      videoThumbnail: '/Partners/Al Sama/videoThumbnail.jpg',
      info: 'Info for Button 18'
    },
    {
      partnerName: 'Tyre Market',
      buttonNumber: 19,
      LogoimageSrc: '/Partners/Tyre Market/logo.svg',
      image1Src: '/Partners/Tyre Market/1.jpg',
      image2Src: '/Partners/Tyre Market/2.jpg',
      videoSrc: '/Partners/Tyre Market/video.mp4',
      videoThumbnail: '/Partners/Tyre Market/videoThumbnail.jpg',
      info: 'Info for Button 19'
    },
    {
      partnerName: 'Alghandour',
      buttonNumber: 20,
      LogoimageSrc: '/Partners/Bon Alghandour/logo.svg',
      image1Src: '/Partners/Bon Alghandour/1.jpg',
      image2Src: '/Partners/Bon Alghandour/2.jpg',
      videoSrc: '/Partners/Bon Alghandour/video.mp4',
      videoThumbnail: '/Partners/Bon Alghandour/videoThumbnail.jpg',
      info: 'Info for Button 20'
    },
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


  // const handleButtonClick = async (buttonNumber) => {
  //   try {

  //     // // Wrap the find operation in a Promise
  //     // const findClickedData = () => {
  //     //   return new Promise((resolve, reject) => {
  //     //     const clickedData = data.find((item) => item.buttonNumber === buttonNumber);
  //     //     if (clickedData) {
  //     //       resolve(clickedData);
  //     //     } else {
  //     //       reject(new Error('Clicked data not found'));
  //     //     }
  //     //   });
  //     // };

  //     // Use async/await to wait for the Promise to resolve
  //     // const clickedData = await findClickedData();

  //     // // Update the state to hide the default description and show partner description
  //     // setDefaultDesDisplay('none');
  //     // setPartnerDesDisplay('block');

  //     // // Update the state with the data for the clicked button
  //     // setHeadlineDisplay('none');
  //     // setCurrentData(clickedData);
  //     // setImageDisplay('block');
  //     // Set the selected button
  //     // setSelectedButton(buttonNumber);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error as needed
  //   }
  // };

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
                <div className={styles.overpageCont}>
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
                              {data[0].partnerName}
                            </button>

                            <button
                              className={selectedButton === 2 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(2)}
                            >
                              {data[1].partnerName}
                            </button>

                            <button
                              className={selectedButton === 3 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(3)}
                            >
                              {data[2].partnerName}
                            </button>

                            <button
                              className={selectedButton === 4 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(4)}
                            >
                              {data[3].partnerName}
                            </button>
                            <button
                              className={selectedButton === 5 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(5)}
                            >
                              {data[4].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 6 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(6)}
                            >
                              {data[5].partnerName}
                            </button>
                            <button
                              className={selectedButton === 7 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(7)}
                            >
                              {data[6].partnerName}
                            </button>
                            <button
                              className={selectedButton === 8 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(8)}
                            >
                              {data[7].partnerName}
                            </button>
                            <button
                              className={selectedButton === 9 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(9)}
                            >
                              {data[8].partnerName}
                            </button>
                            <button
                              className={selectedButton === 10 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(10)}
                            >
                              {data[9].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 11 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(11)}
                            >
                              {data[10].partnerName}
                            </button>
                            <button
                              className={selectedButton === 12 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(12)}
                            >
                              {data[11].partnerName}
                            </button>
                            <button
                              className={selectedButton === 13 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(13)}
                            >
                              {data[12].partnerName}
                            </button>
                            <button
                              className={selectedButton === 14 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(14)}
                            >
                              {data[13].partnerName}
                            </button>
                            <button
                              className={selectedButton === 15 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(15)}
                            >
                              {data[14].partnerName}
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
                              {data[15].partnerName}
                            </button>

                            <button
                              className={selectedButton === 17 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(17)}
                            >
                              {data[16].partnerName}
                            </button>

                            <button
                              className={selectedButton === 18 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(18)}
                            >
                              {data[17].partnerName}
                            </button>

                            <button
                              className={selectedButton === 19 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(19)}
                            >
                              {data[18].partnerName}
                            </button>
                            <button
                              className={selectedButton === 20 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(20)}
                            >
                              {data[19].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 21 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(21)}
                            >
                              {data[20].partnerName}
                            </button>

                            <button
                              className={selectedButton === 22 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(22)}
                            >
                              {data[21].partnerName}
                            </button>

                            <button
                              className={selectedButton === 23 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(23)}
                            >
                              {data[22].partnerName}
                            </button>

                            <button
                              className={selectedButton === 24 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(24)}
                            >
                              {data[23].partnerName}
                            </button>
                            <button
                              className={selectedButton === 25 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(25)}
                            >
                              {data[24].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 26 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(26)}
                            >
                              {data[25].partnerName}
                            </button>

                            <button
                              className={selectedButton === 27 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(27)}
                            >
                              {data[26].partnerName}
                            </button>

                            <button
                              className={selectedButton === 28 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(28)}
                            >
                              {data[27].partnerName}
                            </button>

                            <button
                              className={selectedButton === 29 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(29)}
                            >
                              {data[28].partnerName}
                            </button>
                            <button
                              className={selectedButton === 30 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(30)}
                            >
                              {data[29].partnerName}
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
                <div className={styles.overpageCont}>
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
                              {data[30].partnerName}
                            </button>

                            <button
                              className={selectedButton === 32 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(32)}
                            >
                              {data[31].partnerName}
                            </button>

                            <button
                              className={selectedButton === 33 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(33)}
                            >
                              {data[32].partnerName}
                            </button>

                            <button
                              className={selectedButton === 34 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(34)}
                            >
                              {data[33].partnerName}
                            </button>
                            <button
                              className={selectedButton === 35 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(35)}
                            >
                              {data[34].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 36 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(36)}
                            >
                              {data[35].partnerName}
                            </button>
                            <button
                              className={selectedButton === 37 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(37)}
                            >
                              {data[36].partnerName}
                            </button>
                            <button
                              className={selectedButton === 38 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(38)}
                            >
                              {data[37].partnerName}
                            </button>
                            <button
                              className={selectedButton === 39 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(39)}
                            >
                              {data[38].partnerName}
                            </button>
                            <button
                              className={selectedButton === 40 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(40)}
                            >
                              {data[39].partnerName}
                            </button>
                          </div>
                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 41 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(41)}
                            >
                              {data[40].partnerName}
                            </button>
                            <button
                              className={selectedButton === 42 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(42)}
                            >
                              {data[41].partnerName}
                            </button>
                            <button
                              className={selectedButton === 43 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(43)}
                            >
                              {data[42].partnerName}
                            </button>
                            <button
                              className={selectedButton === 44 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(44)}
                            >
                              {data[43].partnerName}
                            </button>
                            <button
                              className={selectedButton === 45 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(45)}
                            >
                              {data[44].partnerName}
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
                              {data[45].partnerName}
                            </button>

                            <button
                              className={selectedButton === 47 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(47)}
                            >
                              {data[46].partnerName}
                            </button>

                            <button
                              className={selectedButton === 48 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(48)}
                            >
                              {data[47].partnerName}
                            </button>

                            <button
                              className={selectedButton === 49 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(49)}
                            >
                              {data[48].partnerName}
                            </button>
                            <button
                              className={selectedButton === 50 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(50)}
                            >
                              {data[49].partnerName}
                            </button>

                          </div>

                          <div className={styles.Subcontpartners}>

                            <button
                              className={selectedButton === 51 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(51)}
                            >
                              {data[50].partnerName}
                            </button>

                            <button
                              className={selectedButton === 52 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(52)}
                            >
                              {data[51].partnerName}
                            </button>

                            <button
                              className={selectedButton === 53 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(53)}
                            >
                              {data[52].partnerName}
                            </button>

                            <button
                              className={selectedButton === 54 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(24)}
                            >
                              {data[53].partnerName}
                            </button>
                            <button
                              className={selectedButton === 55 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(55)}
                            >
                              {data[54].partnerName}
                            </button>
                          </div>

                          <div className={styles.Subcontpartners}>


                            <button
                              className={selectedButton === 56 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(26)}
                            >
                              {data[55].partnerName}
                            </button>

                            <button
                              className={selectedButton === 57 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(57)}
                            >
                              {data[56].partnerName}
                            </button>

                            <button
                              className={selectedButton === 58 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(58)}
                            >
                              {data[57].partnerName}
                            </button>

                            <button
                              className={selectedButton === 59 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(59)}
                            >
                              {data[58].partnerName}
                            </button>
                            <button
                              className={selectedButton === 60 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
                              onClick={() => handleButtonClick(60)}
                            >
                              {data[59].partnerName}
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