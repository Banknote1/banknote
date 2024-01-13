import React from 'react';
import styles from './Accounting.module.css'; // Adjust the import based on your file structure

const Slider = ({ data }) => {
  const currentFrame = data;

  return (
    <div className={styles.sliderCont}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderContent}>
          <div className={styles.sliderText}>
            <h2 className={styles.head1}>{currentFrame.head1}</h2>
            <h2 className={styles.head2}>{currentFrame.head2}</h2>
            <div className={styles.disCont}><p>{currentFrame.description}</p></div>
            
          </div>
          <div className={styles.sliderImage}>
            <img src={currentFrame.imageSrc} alt="Slider Image" />
          </div>
        </div>

        {/* Frames container */}
        <div className={styles.framesContainer}>
          {/* Frames in rows of three */}
          <div className={styles.frameRow}>
            {/* Frame 1 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>1</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame1}</h3>
              </div>
            </div>

            {/* Frame 2 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>2</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame2}</h3>
              </div>
            </div>

            {/* Frame 3 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>3</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame3}</h3>
              </div>
            </div>
          </div>

          <div className={styles.frameRow2}>
            {/* Frame 4 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>4</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame4}</h3>
              </div>
            </div>
            {/* Frame 5 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>5</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame5}</h3>
              </div>
            </div>
            {/* Frame 6 */}
            <div className={styles.shapecontainer}>
              <div className={styles.numbline}>
                <div className={styles.numberingshape}>
                  <span className={styles.number}>6</span>
                </div>
                <hr className={styles.separator} />
              </div>
              <div className={styles.frame}>
                <h3>{currentFrame.frame6}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
