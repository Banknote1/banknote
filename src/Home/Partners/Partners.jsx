import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import styles from './Partners.module.css';

const Partners = () => {
  const sectors = [
    'Page1',
    'Page2',
    'Page3',
    'Page4',
    'Page5',
  ];

 
  const data = [
    {partnerName:'Toy & Joy' , buttonNumber: 0, imageSrc: '/toyjoy.png', info: 'Info for Button 1' },
    {partnerName:'YGB' , buttonNumber: 1, imageSrc: '/YGB.png', info: 'Info for Button 2' },
    {partnerName:'Al Safwa' , buttonNumber: 2, imageSrc: '/image3.png', info: 'Info for Button 3' },
    {partnerName:'Al Shaboshky' , buttonNumber: 3, imageSrc: '/image4.png', info: 'Info for Button 4' },
    {partnerName:'Hesham Tyres' , buttonNumber: 4, imageSrc: '/image5.png', info: 'Info for Button 5' },
    {partnerName:'Bower Trading' , buttonNumber: 5, imageSrc: '/image5.png', info: 'Info for Button 6' },
    {partnerName:'Al Mostafa' , buttonNumber: 6, imageSrc: '/image5.png', info: 'Info for Button 7' },
    {partnerName:'Al Shourok' , buttonNumber: 7, imageSrc: '/image5.png', info: 'Info for Button 8' },
    {partnerName:'Al Hossam' , buttonNumber: 8, imageSrc: '/image5.png', info: 'Info for Button 9' },
    {partnerName:'Tryo Market' , buttonNumber: 9, imageSrc: '/image5.png', info: 'Info for Button 10' },
    {partnerName:'Pyramids' , buttonNumber: 10, imageSrc: '/image5.png', info: 'Info for Button 11' },
    {partnerName:'Teramed' , buttonNumber: 11, imageSrc: '/image5.png', info: 'Info for Button 12' },
    {partnerName:'Al Shams' , buttonNumber: 12, imageSrc: '/image5.png', info: 'Info for Button 13' },
    {partnerName:'Power Trading' , buttonNumber: 13, imageSrc: '/image5.png', info: 'Info for Button 14' },
    {partnerName:'Fuchem' , buttonNumber: 14, imageSrc: '/image5.png', info: 'Info for Button 15' },
    {partnerName:'Al Fouad' , buttonNumber: 15, imageSrc: '/image5.png', info: 'Info for Button 16' },
    {partnerName:'Al Sef' , buttonNumber: 16, imageSrc: '/image5.png', info: 'Info for Button 17' },
    {partnerName:'Tolba Gorup' , buttonNumber: 17, imageSrc: '/image5.png', info: 'Info for Button 18' },
    {partnerName:'Mosbah' , buttonNumber: 18, imageSrc: '/image5.png', info: 'Info for Button 19' },
    {partnerName:'Al Masa' , buttonNumber: 19, imageSrc: '/image5.png', info: 'Info for Button 20' },
    {partnerName:'Happy Star' , buttonNumber: 20, imageSrc: '/image5.png', info: 'Info for Button 21' },
    {partnerName:'Sanusi' , buttonNumber: 21, imageSrc: '/image5.png', info: 'Info for Button 22' },
    {partnerName:'Mecro Market' , buttonNumber: 22, imageSrc: '/image5.png', info: 'Info for Button 23' },
    {partnerName:'Al Ghandour' , buttonNumber: 23, imageSrc: '/image5.png', info: 'Info for Button 24' },
    {partnerName:'Al Nozha' , buttonNumber: 24, imageSrc: '/image5.png', info: 'Info for Button 25' },
    {partnerName:'Global Vet' , buttonNumber: 25, imageSrc: '/image5.png', info: 'Info for Button 26' },
    {partnerName:'Dr Ashraf' , buttonNumber: 26, imageSrc: '/image5.png', info: 'Info for Button 27' },
    {partnerName:'Ashraf gaber' , buttonNumber: 27, imageSrc: '/image5.png', info: 'Info for Button 28' },
    {partnerName:'Metal Tech' , buttonNumber: 28, imageSrc: '/image5.png', info: 'Info for Button 29' },
    {partnerName:'2M Group' , buttonNumber: 29, imageSrc: '/image5.png', info: 'Info for Button 30' },



];
const [selectedButton, setSelectedButton] = useState(null);
 const [headlineDisplay, setHeadlineDisplay] = useState('block');
  const [imageDisplay, setImageDisplay] = useState('none');
  const [currentData, setCurrentData] = useState(data[0]); // Set to the data for the first button initially
  const [defaultDesDisplay, setDefaultDesDisplay] = useState('block');
  const [partnerDesDisplay, setPartnerDesDisplay] = useState('none');
  
  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    // Find the data for the clicked button
    const clickedData = data.find((item) => item.buttonNumber === buttonNumber);

    // Update the state with the data for the clicked button
    setHeadlineDisplay('none');
    setImageDisplay('block');
    setCurrentData(clickedData);

       // Hide the default description and show partner description
       setDefaultDesDisplay('none');
       setPartnerDesDisplay('block');
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
          }}
          disabled={!isEnabled}
          aria-label={label}
        ></button>
      )}
    </>
  );

  
 

  return (
    <div className={styles.pageContainer}>
          <div className={styles.lefttopCont}> 
          <div className={styles.headline} style={{ display: headlineDisplay }}>
                                      <h1>Success</h1>
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
                        <div className={styles.partnerdes} style={{ display: partnerDesDisplay , width:`100%`}}>
                        <div className={styles.des2} >
                             
                             <h1 style={{marginLeft:`7%`}}>
                             {currentData.info}
                             </h1>
                             </div>

                        </div>
                
 
                </div>
      {/* Carousel */}
      <Carousel
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
            {/* Different Arrangement for Each Slide */}
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
        className={selectedButton === 0 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
        onClick={() => handleButtonClick(0)}
      >
        {data[0].partnerName}
      </button>

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
</div>
<div className={styles.Subcontpartners}>
<button
          className={selectedButton === 5 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
          onClick={() => handleButtonClick(5)}
        >
          {data[5].partnerName}
        </button>
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
      </div>
      <div className={styles.Subcontpartners}>
        <button
          className={selectedButton === 10 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
          onClick={() => handleButtonClick(10)}
        >
          {data[10].partnerName}
        </button>
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
</div>

                    </div>
                    </div>
                    </div>
                    <div className={styles.rightCont}>
                <div className={styles.righttopCont}>
                <div className={styles.contpartners}>
                <div className={styles.Subcontpartners}>
                <button
    className={selectedButton === 15 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
    onClick={() => handleButtonClick(15)}
  >
    {data[15].partnerName}
  </button>

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
</div>

<div className={styles.Subcontpartners}>
  <button
    className={selectedButton === 20 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
    onClick={() => handleButtonClick(20)}
  >
    {data[20].partnerName}
  </button>

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
</div>

<div className={styles.Subcontpartners}>
  <button
    className={selectedButton === 25 ? styles.SelectedPartnerbutton : styles.unSelectedPartnerbutton}
    onClick={() => handleButtonClick(25)}
  >
    {data[25].partnerName}
  </button>

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