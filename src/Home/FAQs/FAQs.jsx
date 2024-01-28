import React, { useState } from 'react';
import styles from './FAQs.module.css';

function FAQFrame({ question, initialText, additionalText }) {
    const [expanded, setExpanded] = useState(false);

    const handleFrameExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`${styles.roundedFrame} ${expanded && styles.expandedFrame}`}>
            <div className={styles.subFrame}>
                <p className={styles.frametext}>{question}</p>
                <div className={styles.plusButtonCont}>
                    <button className={styles.plusButton} onClick={handleFrameExpand}>+</button>
                </div>

            </div>

            {expanded && <p className={styles.additionalText}>{additionalText}</p>}
        </div>
    );
}

function FAQs() {
    return (
        <div className='overlay' style={{ height: 'auto', }}>
            <div className={styles.TopframeCont}>
                {/* <div className={styles.topFrame1}></div> */}
                <div className={styles.topFrame}></div>
            </div>
            <div className={styles.pageCont}>

                <div className={styles.bgImageCont}>
                    <img src="./Q mark.png" alt="" />
                </div>
                <div className={styles.framesCont}>


                    <div className={styles.headline}>
                        <h1>FAQs</h1>
                        <h2>Financial Solutions</h2>
                    </div>
                    <div className={styles.SubframesCont1}>
                        <FAQFrame
                            question="What are the key benefits of using your financial consulting services?"

                            additionalText="The key benefits of utilizing our financial consulting services include personalized solutions aligned with your financial goals, expert guidance from seasoned professionals, and the assurance of financial peace of mind through strategic planning and optimization of resources."
                        />
                        <FAQFrame
                            question="How do you ensure compliance with financial regulations and industry standards?"

                            additionalText="To guarantee compliance with financial regulations and industry standards, we employ meticulous monitoring practices, staying abreast of evolving regulations, and implementing proactive measures to ensure our clients operate within the bounds of legal and industry requirements."
                        />
                        <FAQFrame
                            question="How do you address financial challenges unique to our industry?"

                            additionalText="In addressing financial challenges unique to your industry, we leverage our in-depth understanding to tailor solutions. "
                        />
                    </div>

                    <div className={styles.headline} style={{ marginTop: '3%' }}>

                        <h2>Exporting & Trading</h2>
                    </div>
                    <div className={styles.SubframesCont1}>
                        <FAQFrame
                            question="Which regions or countries do you facilitate trades & exports to and from?"

                            additionalText="Our company is committed to facilitating trade and exports globally. We have a widespread network and the capability to export our products to various regions and countries around the world."
                        />
                        <FAQFrame
                            question="What shipping methods and logistics solutions do you offer?"

                            additionalText="We provide a range of shipping methods and logistics solutions, Our services aim to offer flexibility, efficiency, and cost-effectiveness to meet diverse shipping needs."
                        />
                        <FAQFrame
                            question="How do you handle customs and regulatory requirements for international trade?"

                            additionalText="Our dedicated team is well-versed in global regulations, streamlining the customs clearance process and minimizing potential delays to facilitate seamless international trade transactions."
                        />
                    </div>
                </div>

                <div className={styles.contactCont}>
                    <div className={styles.ContactLabel}>
                        <h1>
                            Get in touch,
                        </h1>
                        <h1>
                            Banknote here to Help your Business !
                        </h1>
                        <h1>
                            Get in touch, Banknote here to Help your Business !
                        </h1>
                        <h1>
                            Get in touch, Banknote here to Help your Business !
                        </h1>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
