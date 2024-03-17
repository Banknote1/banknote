import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import styles from './SectorsSlider.module.css';
import Footer from '../Footer/Footer'
import BottomButton from '../Footer/BottomButton'
import debounce from 'lodash/debounce'; // Import debounce function

const SectorsSlider = () => {
  const sectors = [
    'Manufacturing',
    'Trading',
    'Tech',
    'Transportation',
    'Construction',
  ];
  const [selectedPage, setSelectedPage] = useState(0);
  const footerIconsRef = useRef(null);
  const location = useLocation();
  const [showBottomButton, setShowBottomButton] = useState(true); // State to manage button visibility
  useEffect(() => {
    // Parse the 'pagenumb' query parameter from the URL
    const params = new URLSearchParams(location.search);
    const pageNumber = parseInt(params.get('pagenumb'), 10) || 0;

    // Update the selectedPage state based on the parsed value
    setSelectedPage(Math.max(0, Math.min(pageNumber - 1, sectors.length - 1)));
  }, [location.search, sectors.length]);
  useEffect(() => {
    const handleScroll = debounce((event) => {
      if (event.deltaY > 0) {
        // Scrolling down, go to the next page
        setSelectedPage((prevPage) => (prevPage === sectors.length - 1 ? 0 : prevPage + 1));
      } else if (event.deltaY < 0) {
        // Scrolling up, go to the previous page
        setSelectedPage((prevPage) => (prevPage === 0 ? sectors.length - 1 : prevPage - 1));

      }
    }, 200); // Adjust the debounce delay as needed

    // Add the event listener to handle scroll events
    window.addEventListener('wheel', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [selectedPage]);

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

  const handlePageChange = (index) => {
    setSelectedPage(index);
  };
  const renderCustomArrow = (direction, clickHandler, isEnabled, label) => (
    <div className={styles.arrowsContainer}>
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
      {/* Numbered buttons */}
      {direction !== 'prev' && (
        <div className={styles.arrows}>
          {sectors.map((_, index) => (
            <button
              key={index}
              className={`${styles.pageNumber} ${index === selectedPage ? styles.selectedPage : ''}`}
              onClick={() => setSelectedPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
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
    </div>
  );

  const [positions, setPositions] = useState([0, 0, 0, 0, 0]);
  // const [prevClicked, setPrevClicked] = useState([0, 0, 0, 0]);
  const [touchStartX, setTouchStartX] = useState(0);

  // const handleImageClick = (index, imgIndex) => {
  //   const newPositions = [...positions];
  //   const newPrevClicked = [...prevClicked];

  //   if (index === 1 && prevClicked[imgIndex] !== 1) {
  //     newPositions[imgIndex] += 55; // Slide to the right
  //   } else if (index === 3 && prevClicked[imgIndex] !== 3) {
  //     newPositions[imgIndex] -= 55; // Slide to the left
  //   } else if (index === 2 && prevClicked[imgIndex] === 3) {
  //     newPositions[imgIndex] += 55; // Slide to the left
  //   } else if (index === 2 && prevClicked[imgIndex] === 1) {
  //     newPositions[imgIndex] -= 55; // Slide to the right
  //   }
  //   newPrevClicked[imgIndex] = index;

  //   setPositions(newPositions);
  //   setPrevClicked(newPrevClicked);
  // };
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };
  const handleTouchMove = (event, imgIndex) => {
    const touchMoveX = event.touches[0].clientX;
    const diffX = touchMoveX - touchStartX;

    // Determine if swiping should be prevented
    const isFirstImage = positions[imgIndex] === 0;
    const isLastImage = positions[imgIndex] <= -110; // Adjust this value as per your image width and count

    const newPositions = [...positions];
    const threshold = 50;

    if (Math.abs(diffX) > threshold && !(isFirstImage && diffX > 0) && !(isLastImage && diffX < 0)) {
      newPositions[imgIndex] += diffX > 0 ? 55 : -55; // Adjust position based on the direction of the swipe
      setPositions(newPositions);
      setTouchStartX(touchMoveX);
    }
  };


  return (
    <div>
      <div className={styles.mobPageContainer} style={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '100vh', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className={styles.submobPageContainer}>
          <div className={styles.mobTitle}>
            <h1>
              Sectors <span style={{ color: '#EBD5A8' }}>We Serve</span>
            </h1>
          </div>
          <div>
            <div style={{ height: '35vw', overflow: 'hidden' }}>
              <div className={styles.imagesCont} style={{ display: 'flex', flexDirection: 'row', transform: `translateX(${positions[0]}vw)`, transition: 'transform 0.9s ease ' }} onTouchStart={handleTouchStart} onTouchMove={(event) => handleTouchMove(event, 0)}>
                <img src="/Sectors/Factory pic 1.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Factory pic 2.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Factory pic 3.png" alt="" style={{ width: '50vw' }} />
              </div>

            </div>

            <div className={styles.mobText}>
              <h2 className={styles.mobHead1}>Banknote’s</h2>
              <h2 className={styles.mobHead1}>Financial Empowerment </h2>
              <h2 className={styles.mobHead2}>for Factories</h2>
              <div className={styles.mobDisCont}><p>Our consultancy specializes in empowering factories through meticulous cost analysis, and  strategic capital allocation.</p></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5vw', marginBottom: '15%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Animal feeds.svg" alt="" />
                  <h1>Animal Feeds Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Clothes.svg" alt="" />
                  <h1>Fabrics & Clothes Industry</h1>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Pottle.svg" alt="" />
                  <h1>Plastics
                    Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Food.svg" alt="" />
                  <h1>Food Products
                    Industry</h1>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Medical.svg" alt="" />
                  <h1>Medical Supplies
                    Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Wood.svg" alt="" />
                  <h1>Woods
                    Industry</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ height: '35vw', overflow: 'hidden' }}>
              <div className={styles.imagesCont} style={{ display: 'flex', flexDirection: 'row', transform: `translateX(${positions[1]}vw)`, transition: 'transform 0.9s ease ' }} onTouchStart={handleTouchStart} onTouchMove={(event) => handleTouchMove(event, 1)}>
                <img src="/Sectors/Trading pic 1.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Trading pic 2.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Trading pic 3.png" alt="" style={{ width: '50vw' }} />
              </div></div>

            <div className={styles.mobText}>
              <h2 className={styles.mobHead1}>Banknote’s</h2>
              <h2 className={styles.mobHead1}>Financial Empowerment </h2>
              <h2 className={styles.mobHead2}>for Trades</h2>
              <div className={styles.mobDisCont}><p>We empower merchants by optimizing payments, managing finances, and mitigating risks.</p></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5vw', marginBottom: '15%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Animal feeds.svg" alt="" />
                  <h1>Animal Feeds Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Clothes.svg" alt="" />
                  <h1>Fabrics & Clothes Industry</h1>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Pottle.svg" alt="" />
                  <h1>Plastics
                    Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Food.svg" alt="" />
                  <h1>Food Products
                    Industry</h1>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Medical.svg" alt="" />
                  <h1>Medical Supplies
                    Industry</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Wood.svg" alt="" />
                  <h1>Woods
                    Industry</h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ height: '35vw', overflow: 'hidden' }}>
              <div className={styles.imagesCont} style={{ display: 'flex', flexDirection: 'row', transform: `translateX(${positions[2]}vw)`, transition: 'transform 0.9s ease ' }} onTouchStart={handleTouchStart} onTouchMove={(event) => handleTouchMove(event, 2)}>
                <img src="/Sectors/tech pic 1.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/tech pic 2.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/tech pic 3.png" alt="" style={{ width: '50vw' }} />
              </div></div>

            <div className={styles.mobText}>
              <h2 className={styles.mobHead1}>Banknote’s</h2>
              <h2 className={styles.mobHead1}>Support for </h2>
              <h2 className={styles.mobHead2}>Tech &
                Communication</h2>
              <div className={styles.mobDisCont}><p>We aid tech firms by strategizing financial growth, securing capital, and managing risks.</p></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5vw', marginBottom: '15%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/software.svg" alt="" />
                  <h1>Software House</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/product.svg" alt="" />
                  <h1>Product Based
                    Companies</h1>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/hardware.svg" alt="" />
                  <h1>Hardware supplies</h1>
                </div>

              </div>

            </div>
          </div>
          <div>
            <div style={{ height: '35vw', overflow: 'hidden' }}>
              <div className={styles.imagesCont} style={{ display: 'flex', flexDirection: 'row', transform: `translateX(${positions[3]}vw)`, transition: 'transform 0.9s ease ' }} onTouchStart={handleTouchStart} onTouchMove={(event) => handleTouchMove(event, 3)}>
                <img src="/Sectors/Transportation pic 1.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Transportation pic 2.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Transportation pic 3.png" alt="" style={{ width: '50vw' }} />
              </div></div>

            <div className={styles.mobText}>
              <h2 className={styles.mobHead1}>Banknote’s</h2>
              <h2 className={styles.mobHead1}>Support for </h2>
              <h2 className={styles.mobHead2}>Transportation</h2>
              <div className={styles.mobDisCont}><p>Whether you're involved in logistics, shipping, aviation, or any other aspect of transportation, we offer a range of professional services to support your needs.</p></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5vw', marginBottom: '15%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/shipment.svg" alt="" />
                  <h1>Logistics
                    Companies</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/logistics.svg" alt="" />
                  <h1>Shipment and Delivery
                    Companies</h1>
                </div>
              </div>


            </div>
          </div>
          <div>
            <div style={{ height: '35vw', overflow: 'hidden' }}>
              <div className={styles.imagesCont} style={{ display: 'flex', flexDirection: 'row', transform: `translateX(${positions[4]}vw)`, transition: 'transform 0.9s ease ' }} onTouchStart={handleTouchStart} onTouchMove={(event) => handleTouchMove(event, 4)}>
                <img src="/Sectors/Construction pic 1.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Construction pic 2.png" alt="" style={{ width: '50vw' }} />
                <img src="/Sectors/Construction pic 3.png" alt="" style={{ width: '50vw' }} />
              </div></div>

            <div className={styles.mobText}>
              <h2 className={styles.mobHead1}>Banknote’s</h2>
              <h2 className={styles.mobHead1}>Support for </h2>
              <h2 className={styles.mobHead2}>Constructions</h2>
              <div className={styles.mobDisCont}><p>We specialize in aiding construction projects through tailored financial planning, risk management, and project financing.</p></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5vw', marginBottom: '15%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5%' }}>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Constructions.svg" alt="" />
                  <h1>Constructions
                    Companies</h1>
                </div>
                <div className={styles.iconsCont} style={{ display: 'flex', flexDirection: 'column' }}>
                  <img src="/Engineering.svg" alt="" />
                  <h1>Engineering consultancies
                    Companies</h1>
                </div>
              </div>


            </div>
          </div>
        </div>
        <Footer></Footer>
        {showBottomButton && <BottomButton ref={footerIconsRef}></BottomButton>}
      </div>

      <div className={styles.pageContainer}>
        {/* Carousel */}
        <Carousel
          selectedItem={selectedPage}

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
                  {/* Background Image for Manufacturing */}
                  <img
                    src={`/Manufactoring\ background.png`}
                    className={styles.backgroundImage}
                  />
                  {/* Overlay for Manufacturing */}
                  <div className='overlay'>

                    <div className={styles.slidecontainer}>

                      <div className={styles.leftCont}>

                        <div className={styles.lefttopCont}>
                          <div className={styles.headline}>
                            <h1>Banknote’s</h1>
                            <h1>Financial</h1>
                            <h1>Empowerment</h1>
                            <div style={{ display: `flex`, height: `15px` }}> <h1>for &nbsp;</h1> <h2>Factories</h2></div>
                          </div>

                          <div className={styles.des1}>
                            <p>Our consultancy specializes in empowering factories through meticulous cost analysis, and  strategic capital allocation.</p>
                          </div>
                        </div>
                        <div className={styles.leftbottomCont}>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Animal\ feeds.svg`} alt="Animal Feeds" />
                              <p>Animal Feeds Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Clothes.svg`} alt="Fabrics & Clothes" />
                              <p>Fabrics & Clothes Industry</p>
                            </div>
                          </div>

                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Pottle.svg`} alt="Plastics" />
                              <p>Plastics Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Food.svg`} alt="Food Products" />
                              <p>Food Products Industry</p>
                            </div>
                          </div>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Medical.svg`} alt="Medical Supplies" />
                              <p>Medical Supplies Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Wood.svg`} alt="Woods" />
                              <p>Woods Industry</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.rightCont}>
                        <div className={styles.righttopCont}>
                          <img src="/sectors_slide1.png" alt="Sectors Image" />
                        </div>
                        <div className={styles.rightbottomCont}>
                          <div className={styles.des2}>
                            <p>
                              From securing funding to managing risks, our expertise fuels informed decision-making for sustained growth and enhanced profitability.
                            </p></div>
                        </div>
                      </div>

                    </div>




                  </div>
                  {/* Content of the Slide */}


                </>
              )}

              {index === 1 && (
                <>
                  {/* Background Image for Trading */}
                  <img
                    src={`/Trading\ background.png`}
                    className={styles.backgroundImage}
                  />
                  {/* Overlay for Trading */}
                  <div className='overlay'>

                    <div className={styles.slidecontainer}>

                      <div className={styles.leftCont}>

                        <div className={styles.lefttopCont}>
                          <div className={styles.headline}>
                            <h1>Banknote’s</h1>
                            <h1>Financial</h1>
                            <h1>Empowerment</h1>
                            <div style={{ display: `flex`, height: `15px` }}> <h1>for &nbsp;</h1> <h2>Trades</h2></div>
                          </div>

                          <div className={styles.des1}>
                            <p>We empower merchants by optimizing payments, managing finances, and mitigating risks.</p>
                          </div>
                        </div>
                        <div className={styles.leftbottomCont}>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Animal\ feeds.svg`} alt="Animal Feeds" />
                              <p>Animal Feeds Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Clothes.svg`} alt="Fabrics & Clothes" />
                              <p>Fabrics & Clothes Industry</p>
                            </div>
                          </div>

                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Pottle.svg`} alt="Plastics" />
                              <p>Plastics Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Food.svg`} alt="Food Products" />
                              <p>Food Products Industry</p>
                            </div>
                          </div>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Medical.svg`} alt="Medical Supplies" />
                              <p>Medical Supplies Industry</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/Wood.svg`} alt="Woods" />
                              <p>Woods Industry</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.rightCont}>
                        <div className={styles.righttopCont}>
                          <img src="/sectors_slide2.png" alt="Sectors Image" />
                        </div>
                        <div className={styles.rightbottomCont}>
                          <div className={styles.des2}>
                            <p>From Financial Management to expansion funding, our expertise drives growth while ensuring compliance and strategic planning for lasting success.
                            </p></div>
                        </div>
                      </div>

                    </div>

                  </div>


                </>
              )}

              {index === 2 && (
                <>
                  {/* Background Image for Tech */}
                  <img
                    src={`/Tech\ background.png`}
                    className={styles.backgroundImage}
                  />
                  {/* Overlay for Tech */}
                  <div className='overlay'>


                    <div className={styles.slidecontainer}>

                      <div className={styles.leftCont}>

                        <div className={styles.lefttopCont}>
                          <div className={styles.headline}>
                            <h1>Banknote’s</h1>
                            <h1>Support for</h1>
                            <h1>Tech &</h1>
                            <div style={{ display: `flex`, height: `15px` }}> <h1></h1> <h2>Communication</h2></div>
                          </div>

                          <div className={styles.des1}>
                            <p>We aid tech firms by strategizing financial growth, securing capital, and managing risks.</p>
                          </div>
                        </div>
                        <div className={styles.leftbottomCont}>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/software.svg`} alt="Software House" />
                              <p>Software House</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={`/hardware.svg`} alt="Hardware supplies" />
                              <p>Hardware supplies</p>
                            </div>
                          </div>

                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/product.svg`} alt="Product Based Companies" />
                              <p>Product Based Companies</p>
                            </div>
                            {/* <div className={styles.icon}>
    <img src={`/Food.svg`} alt="Food Products" />
     <p>Food Products Industry</p>
    </div> */}
                          </div>
                          {/* <div className={styles.iconsCont}>
  <div className={styles.icon}>
    <img  src={`/Medical.svg`} alt="Medical Supplies" />
     <p>Medical Supplies Industry</p>
    </div>
    <div className={styles.icon}>
    <img src={`/Wood.svg`} alt="Woods"/>
     <p>Woods Industry</p>
    </div>
  </div> */}
                        </div>
                      </div>
                      <div className={styles.rightCont}>
                        <div className={styles.righttopCont}>
                          <img src="/sectors_slide3.png" alt="Sectors Image" />
                        </div>
                        <div className={styles.rightbottomCont}>
                          <div className={styles.des2}>
                            <p>From Mergers & Acquisitions to revenue enhancement, our expertise drives innovation and compliance, ensuring financial strength in dynamic markets.
                            </p></div>
                        </div>
                      </div>

                    </div>


                  </div>
                  {/* Content of the Slide */}



                </>
              )}

              {index === 3 && (
                <>
                  {/* Background Image for Transportation */}
                  <img
                    src={`/Transportation\ background.png`}
                    className={styles.backgroundImage}
                  />
                  {/* Overlay for Transportation */}
                  <div className='overlay'>

                    <div className={styles.slidecontainer}>

                      <div className={styles.leftCont}>

                        <div className={styles.lefttopCont}>
                          <div className={styles.headline}>
                            <h1>Banknote’s</h1>
                            <h1>Support for</h1>

                            <div style={{ display: `flex`, height: `15px` }}> <h1></h1> <h2>Transportation</h2></div>
                          </div>

                          <div className={styles.des1}>
                            <p>Whether you're involved in logistics, shipping, aviation, or any other aspect of transportation, we offer a range of professional services to support your needs.</p>
                          </div>
                        </div>
                        <div className={styles.leftbottomCont}>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/logistics.svg`} alt="Logistics Companies" />
                              <p>Logistics Companies</p>
                            </div>
                            {/* <div className={styles.icon}>
    <img  src={`/hardware.svg`} alt="Hardware supplies" />
     <p>Hardware supplies</p>
    </div> */}
                          </div>

                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/shipment.svg`} alt="Shipment and Delivery Companies" />
                              <p>Shipment and Delivery Companies</p>
                            </div>
                            {/* <div className={styles.icon}>
    <img src={`/Food.svg`} alt="Food Products" />
     <p>Food Products Industry</p>
    </div> */}
                          </div>
                          {/* <div className={styles.iconsCont}>
  <div className={styles.icon}>
    <img  src={`/Medical.svg`} alt="Medical Supplies" />
     <p>Medical Supplies Industry</p>
    </div>
    <div className={styles.icon}>
    <img src={`/Wood.svg`} alt="Woods"/>
     <p>Woods Industry</p>
    </div>
  </div> */}
                        </div>
                      </div>
                      <div className={styles.rightCont}>
                        <div className={styles.righttopCont}>
                          <img src="/sectors_slide4.png" alt="Sectors Image" />
                        </div>
                        <div className={styles.rightbottomCont}>
                          <div className={styles.des2}>
                            <p>Our expertise can help you navigate the complex landscape of the transportation sector and keep your operations running smoothly.
                            </p></div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* Content of the Slide */}

                </>
              )}

              {index === 4 && (
                <>
                  {/* Background Image for Construction */}
                  <img
                    src={`/Construction\ background.png`}
                    className={styles.backgroundImage}
                  />
                  {/* Overlay for Construction */}
                  <div className='overlay'>

                    <div className={styles.slidecontainer}>

                      <div className={styles.leftCont}>

                        <div className={styles.lefttopCont}>
                          <div className={styles.headline}>
                            <h1>Banknote’s</h1>
                            <h1>Support for</h1>

                            <div style={{ display: `flex`, height: `15px` }}> <h1></h1> <h2>constructions</h2></div>
                          </div>

                          <div className={styles.des1}>
                            <p>We specialize in aiding construction projects through tailored financial planning, risk management, and project financing.</p>
                          </div>
                        </div>
                        <div className={styles.leftbottomCont}>
                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Constructions.svg`} alt="Constructions Companies" />
                              <p>Constructions Companies</p>
                            </div>
                            {/* <div className={styles.icon}>
    <img  src={`/hardware.svg`} alt="Hardware supplies" />
     <p>Hardware supplies</p>
    </div> */}
                          </div>

                          <div className={styles.iconsCont}>
                            <div className={styles.icon}>
                              <img src={`/Engineering.svg`} alt="Engineering consultancies Companies" />
                              <p>Engineering consultancies Companies</p>
                            </div>
                            {/* <div className={styles.icon}>
    <img src={`/Food.svg`} alt="Food Products" />
     <p>Food Products Industry</p>
    </div> */}
                          </div>
                          {/* <div className={styles.iconsCont}>
  <div className={styles.icon}>
    <img  src={`/Medical.svg`} alt="Medical Supplies" />
     <p>Medical Supplies Industry</p>
    </div>
    <div className={styles.icon}>
    <img src={`/Wood.svg`} alt="Woods"/>
     <p>Woods Industry</p>
    </div>
  </div> */}
                        </div>
                      </div>
                      <div className={styles.rightCont}>
                        <div className={styles.righttopCont}>
                          <img src="/sectors_slide5.png" alt="Sectors Image" />
                        </div>
                        <div className={styles.rightbottomCont}>
                          <div className={styles.des2}>
                            <p>Our expertise ensures cost control, cash flow management, and compliance, fostering successful project execution within timelines and budgets.
                            </p></div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* Content of the Slide */}


                </>
              )}
            </div>
          ))}

        </Carousel>

      </div>
    </div>
  );
};

export default SectorsSlider;