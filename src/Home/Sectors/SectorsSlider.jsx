import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import styles from './SectorsSlider.module.css';

const SectorsSlider = () => {
  const sectors = [
    'Manufacturing',
    'Trading',
    'Tech',
    'Transportation',
    'Construction',
  ];
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


  const handlePageChange = (index) => {
    setSelectedPage(index);
  };

  return (
    <div className={styles.pageContainer}>
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
                            <img src={`/Shipment.svg`} alt="Shipment and Delivery Companies" />
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

export default SectorsSlider;