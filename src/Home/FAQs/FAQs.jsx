import React, { useEffect, useState } from 'react';
import styles from './FAQs.module.css';
import TextField from '@mui/material/TextField';
import Calendar from './Calendar'; // Import the Calendar component
import CalendarMob from './CalendarMob'; // Import the Calendar component

import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer'
import BottomButton from '../Footer/BottomButton'
function FAQFrame({ question, initialText, additionalText }) {
    const [expanded, setExpanded] = useState(false);

    const handleFrameExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={`${styles.roundedFrame} ${expanded && styles.expandedFrame}`}
            onClick={handleFrameExpand}
        >
            <div className={styles.subFrame}>
                <p className={styles.frametext}>{question}</p>
                <div className={styles.plusButtonCont}>
                    <div className={styles.plusButton}>+</div>
                </div>
            </div>

            {expanded && <p className={styles.additionalText}>{additionalText}</p>}
        </div>

    );
}
function MobFAQFrame({ question, initialText, additionalText }) {
    const [expanded, setExpanded] = useState(false);

    const handleFrameExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={`${styles.mobroundedFrame} ${expanded && styles.mobexpandedFrame}`}
            onClick={handleFrameExpand}
        >
            <div className={styles.mobsubFrame}>
                <p className={styles.mobframetext}>{question}</p>
                <div className={styles.mobplusButtonCont}>
                    <div className={styles.mobplusButton}>+</div>
                </div>
            </div>

            {expanded && <p className={styles.mobadditionalText}>{additionalText}</p>}
        </div>

    );
}
const Modal = ({ onClose }) => {
    const [selectedButton, setSelectedButton] = useState({ column: 0, index: 0 });

    const handleButtonClick = (column, index) => {
        setSelectedButton({ column, index });
    };

    const isButtonSelected = (column, index) => {
        return selectedButton && selectedButton.column === column && selectedButton.index === index;
    };
    let now = new Date();
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initial date

    const handleDateSelection = (date) => {
        setSelectedDate(date);

    };
    const handleSubmit = () => {
        // Combine selectedDate and selected time
        // Define time slots corresponding to each button
        const timeSlots = [
            ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'],
            ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM']
        ];

        // Get the selected time slot using column and index
        const selectedTimeSlot = timeSlots[selectedButton.column][selectedButton.index];

        // Combine selectedDate and selected time slot
        const selectedDateTime = `${selectedDate} ${selectedTimeSlot}`;


        console.log('Selected Date & Time:', selectedDateTime);

        const preferredCallTimeField = document.getElementById('preferred-call-time-web');
        const preferredCallTimeLabel = document.getElementById('preferred-call-time-web-label');

        if (preferredCallTimeField && preferredCallTimeLabel) {
            preferredCallTimeField.value = selectedDateTime;

            // Save the selected button's value
            setSelectedButton(selectedButton);

            // Set data-shrink attribute to "true" and update class to reflect the new state
            preferredCallTimeLabel.setAttribute('data-shrink', 'true');
            preferredCallTimeLabel.classList.add('MuiInputLabel-shrink');

            // Replace the old class with the new class
            preferredCallTimeLabel.classList.remove('css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root');
            preferredCallTimeLabel.classList.add('css-1c2i806-MuiFormLabel-root-MuiInputLabel-root');
        }

        onClose(); // Close the modal after submitting
    };

    const handleClose = () => {


        const preferredCallTimeField = document.getElementById('preferred-call-time-web');
        const preferredCallTimeLabel = document.getElementById('preferred-call-time-web-label');

        if (preferredCallTimeField && preferredCallTimeLabel) {
            if (preferredCallTimeField.value !== '') {

                // Set data-shrink attribute to "true" and update class to reflect the new state
                preferredCallTimeLabel.setAttribute('data-shrink', 'true');
                preferredCallTimeLabel.classList.add('MuiInputLabel-shrink');

                // Replace the old class with the new class
                preferredCallTimeLabel.classList.remove('css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root');
                preferredCallTimeLabel.classList.add('css-1c2i806-MuiFormLabel-root-MuiInputLabel-root');
            }
        }

        onClose(); // Close the modal after submitting
    };
    return (
        <div className={styles.modaloverlay}  >
            <div className={styles.modal}>

                <div style={{ width: `100%`, height: `auto`, alignItems: `center`, display: `flex` }}>  <h2 style={{ color: '#B9BBBE', fontSize: 26, fontFamily: 'Quicksand', fontWeight: '500', wordWrap: 'break-word' }}>Select Date & Time  </h2></div>
                <div style={{ width: `100%`, display: `flex`, flexDirection: `row`, gap: `9%`, justifyContent: `center` }}>
                    <div className={styles.Calendar} style={{}}>
                        <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} onSelectDate={handleDateSelection} />
                    </div>
                    <div className={styles.Calendar} style={{ flexDirection: 'row', width: `40%`, gap: `1rem` }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: `1rem` }}>
                            <button
                                className={isButtonSelected(0, 0) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(0, 0)}
                            >
                                09:00 AM
                            </button>
                            <button
                                className={isButtonSelected(0, 1) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(0, 1)}
                            >
                                11:00 AM
                            </button>
                            <button
                                className={isButtonSelected(0, 2) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(0, 2)}
                            >
                                01:00 PM
                            </button>
                            <button
                                className={isButtonSelected(0, 3) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(0, 3)}
                            >
                                03:00 PM
                            </button>
                            <button
                                className={isButtonSelected(0, 4) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(0, 4)}
                            >
                                05:00 PM
                            </button>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: `1rem`, paddingTop: '1rem', paddingBottom: '1rem' }}>
                            <button
                                className={isButtonSelected(1, 0) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(1, 0)}
                            >
                                10:00 AM
                            </button>
                            <button
                                className={isButtonSelected(1, 1) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(1, 1)}
                            >
                                12:00 PM
                            </button>
                            <button
                                className={isButtonSelected(1, 2) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(1, 2)}
                            >
                                02:00 PM
                            </button>
                            <button
                                className={isButtonSelected(1, 3) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(1, 3)}
                            >
                                04:00 PM
                            </button>
                            <button
                                className={isButtonSelected(1, 4) ? styles.selectedButton : styles.button}
                                onClick={() => handleButtonClick(1, 4)}
                            >
                                06:00 PM
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ display: `flex`, flexDirection: `row`, height: `15%`, width: `100%`, alignItems: `end`, justifyContent: `end`, gap: `5%` }}>

                    <div style={{ width: `20%`, height: `60%` }}>
                        <button className={styles.Canceldate} onClick={handleClose}>Cancel</button>
                    </div>
                    <div style={{ width: `20%`, height: `60%` }}>
                        <button className={styles.Submitdate} onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        </div >
    );
};
const MobModal = ({ onClose }) => {
    const [selectedButton, setSelectedButton] = useState({ column: 0, index: 0 });

    const handleButtonClick = (column, index) => {
        setSelectedButton({ column, index });
    };

    const isButtonSelected = (column, index) => {
        return selectedButton && selectedButton.column === column && selectedButton.index === index;
    };
    let now = new Date();
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initial date

    const handleDateSelection = (date) => {
        setSelectedDate(date);

    };
    const handleSubmit = () => {
        // Combine selectedDate and selected time
        // Define time slots corresponding to each button
        const timeSlots = [
            ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'],
            ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM']
        ];

        // Get the selected time slot using column and index
        const selectedTimeSlot = timeSlots[selectedButton.column][selectedButton.index];

        // Combine selectedDate and selected time slot
        const selectedDateTime = `${selectedDate} ${selectedTimeSlot}`;


        console.log('Selected Date & Time:', selectedDateTime);

        const preferredCallTimeField = document.getElementById('preferred-call-time');
        const preferredCallTimeLabel = document.getElementById('preferred-call-time-label');

        if (preferredCallTimeField && preferredCallTimeLabel) {
            preferredCallTimeField.value = selectedDateTime;

            // Save the selected button's value
            setSelectedButton(selectedButton);

            // Set data-shrink attribute to "true" and update class to reflect the new state
            preferredCallTimeLabel.setAttribute('data-shrink', 'true');
            preferredCallTimeLabel.classList.add('MuiInputLabel-shrink');

            // Replace the old class with the new class
            preferredCallTimeLabel.classList.remove('css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root');
            preferredCallTimeLabel.classList.add('css-1c2i806-MuiFormLabel-root-MuiInputLabel-root');
        }

        onClose(); // Close the modal after submitting
    };

    const handleClose = () => {


        const preferredCallTimeField = document.getElementById('preferred-call-time');
        const preferredCallTimeLabel = document.getElementById('preferred-call-time-label');

        if (preferredCallTimeField && preferredCallTimeLabel) {
            if (preferredCallTimeField.value !== '') {

                // Set data-shrink attribute to "true" and update class to reflect the new state
                preferredCallTimeLabel.setAttribute('data-shrink', 'true');
                preferredCallTimeLabel.classList.add('MuiInputLabel-shrink');

                // Replace the old class with the new class
                preferredCallTimeLabel.classList.remove('css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root');
                preferredCallTimeLabel.classList.add('css-1c2i806-MuiFormLabel-root-MuiInputLabel-root');
            }
        }

        onClose(); // Close the modal after submitting
    };
    const [showFirstSet, setShowFirstSet] = useState(true);
    const [showSecondSet, setShowSecondSet] = useState(false);

    const handleNextButtonClick = () => {
        setShowFirstSet(false);
        setShowSecondSet(true);
    };

    const handleCancelButtonClick = () => {
        // Reset to initial state
        setShowFirstSet(true);
        setShowSecondSet(false);
    };

    const handleSubmitButtonClick = () => {
        // Handle submit action
    };

    const handleBackButtonClick = () => {
        setShowFirstSet(true);
        setShowSecondSet(false);
    };
    return (
        <div className={styles.modaloverlay}  >
            <div className={styles.modalmob}>

                <div style={{ width: `100%`, height: `auto`, alignItems: `center`, display: `flex`, marginLeft: '20px' }}>
                    <h2 style={{ color: '#B9BBBE', fontSize: 22, fontFamily: 'Quicksand', fontWeight: '500', wordWrap: 'break-word' }}>Select Date & Time
                    </h2>
                </div>
                <div style={{ width: `100%`, height: '100%', display: `flex`, flexDirection: `row`, gap: `9%`, justifyContent: `center` }}>
                    {showFirstSet && (
                        <div>
                            <div className={styles.Calendarmob}>
                                <CalendarMob year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} onSelectDate={handleDateSelection} />
                            </div>
                            <div style={{ height: '30%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center`, gap: `10%`, alignItems: 'center', width: '100%' }}>
                                    <button className={styles.Canceldatemob} onClick={handleClose}>Cancel</button>
                                    <button className={styles.Submitdatemob} onClick={handleNextButtonClick}>Next</button>
                                </div>
                            </div>

                        </div>
                    )}
                    {showSecondSet && (
                        <div>
                            <div className={styles.Calendarmob}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: `1rem` }}>
                                    <button
                                        className={isButtonSelected(0, 0) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(0, 0)}
                                    >
                                        09:00 AM
                                    </button>
                                    <button
                                        className={isButtonSelected(0, 1) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(0, 1)}
                                    >
                                        11:00 AM
                                    </button>
                                    <button
                                        className={isButtonSelected(0, 2) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(0, 2)}
                                    >
                                        01:00 PM
                                    </button>
                                    <button
                                        className={isButtonSelected(0, 3) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(0, 3)}
                                    >
                                        03:00 PM
                                    </button>
                                    <button
                                        className={isButtonSelected(0, 4) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(0, 4)}
                                    >
                                        05:00 PM
                                    </button>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: `1rem` }}>
                                    <button
                                        className={isButtonSelected(1, 0) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(1, 0)}
                                    >
                                        10:00 AM
                                    </button>
                                    <button
                                        className={isButtonSelected(1, 1) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(1, 1)}
                                    >
                                        12:00 PM
                                    </button>
                                    <button
                                        className={isButtonSelected(1, 2) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(1, 2)}
                                    >
                                        02:00 PM
                                    </button>
                                    <button
                                        className={isButtonSelected(1, 3) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(1, 3)}
                                    >
                                        04:00 PM
                                    </button>
                                    <button
                                        className={isButtonSelected(1, 4) ? styles.selectedButton : styles.button}
                                        onClick={() => handleButtonClick(1, 4)}
                                    >
                                        06:00 PM
                                    </button>
                                </div>
                            </div>
                            <div style={{ height: '30%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center`, gap: `10%`, alignItems: 'center', width: '100%' }}>                                <button className={styles.Canceldatemob} onClick={handleBackButtonClick}>Back</button>
                                    <button className={styles.Submitdatemob} onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>                                </div>

                    )}
                </div>
                {/* <div style={{ display: `flex`, flexDirection: `row`, height: `15%`, width: `100%`, justifyContent: `end`, gap: `5%`, marginTop: '.5rem' }}>

                    <div style={{ width: `6rem`, height: `2.5rem` }}>
                        <button className={styles.Canceldatemob} onClick={handleClose}>Cancel</button>
                    </div>
                    <div style={{ width: `6rem`, height: `2.5rem` }}>
                        <button className={styles.Canceldatemob} onClick={handleSubmit}>Back</button>
                    </div>
                    <div style={{ width: `6rem`, height: `2.5rem` }}>
                        <button className={styles.Submitdatemob} onClick={handleSubmit}>Next</button>
                    </div>
                    <div style={{ width: `6rem`, height: `2.5rem` }}>
                        <button className={styles.Submitdatemob} onClick={handleSubmit}>Submit</button>
                    </div>
                </div> */}

            </div>
        </div >
    );
};
function FAQs() {
    const location = useLocation();
    let setTriggerScroll = location.state?.setTriggerScroll || false;

    const [isHovered, setIsHovered] = useState(false);
    const textFieldStyle = {
        color: 'white',
        borderBottom: '1px solid white', // Initial underline style
    };
    const redAsteriskStyle = {
        color: 'red',
    };
    const [showModal, setShowModal] = useState(false);
    const [showModalmob, setShowModalmob] = useState(false);
    const handleTextFieldClick = () => {
        setShowModal(true);
    };
    const handleTextFieldClickmob = () => {
        setShowModalmob(true);
    };
    useEffect(() => {
        if (setTriggerScroll) {
            // Scroll to the contactForm div
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth',
                });
            }
            // Reset triggerScroll after scrolling
            setTriggerScroll = false;
        }
    }, [setTriggerScroll]);

    return (
        <div>

            <div className={styles.mobPageContainer} style={{ maxHeight: '0', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className={styles.submobPageContainer}>

                    <div className={styles.mobheadline}>
                        <h1>FAQ<span style={{ color: '#E4C78B' }}>s</span></h1>
                        <h2>Financial Solutions</h2>
                    </div>
                    <div className={styles.SubframesCont1}>
                        <MobFAQFrame
                            question="What are the key benefits of using your financial consulting services?"

                            additionalText="The key benefits of utilizing our financial consulting services include personalized solutions aligned with your financial goals, expert guidance from seasoned professionals, and the assurance of financial peace of mind through strategic planning and optimization of resources."
                        />
                        <MobFAQFrame
                            question="How do you ensure compliance with financial regulations and industry standards?"

                            additionalText="To guarantee compliance with financial regulations and industry standards, we employ meticulous monitoring practices, staying abreast of evolving regulations, and implementing proactive measures to ensure our clients operate within the bounds of legal and industry requirements."
                        />
                        <MobFAQFrame
                            question="How do you address financial challenges unique to our industry?"

                            additionalText="In addressing financial challenges unique to your industry, we leverage our in-depth understanding to tailor solutions. "
                        />
                    </div>
                    <div className={styles.mobheadline} style={{ marginTop: '10%', marginBottom: '2%' }}>

                        <h2>Exporting & Trading</h2>
                    </div>
                    <div className={styles.SubframesCont1}>
                        <MobFAQFrame
                            question="Which regions or countries do you facilitate trades & exports to and from?"

                            additionalText="Our company is committed to facilitating trade and exports globally. We have a widespread network and the capability to export our products to various regions and countries around the world."
                        />
                        <MobFAQFrame
                            question="What shipping methods and logistics solutions do you offer?"

                            additionalText="We provide a range of shipping methods and logistics solutions, Our services aim to offer flexibility, efficiency, and cost-effectiveness to meet diverse shipping needs."
                        />
                        <MobFAQFrame
                            question="How do you handle customs and regulatory requirements for international trade?"

                            additionalText="Our dedicated team is well-versed in global regulations, streamlining the customs clearance process and minimizing potential delays to facilitate seamless international trade transactions."
                        />
                    </div>

                    <div className={styles.cropedCont}>
                        <div className={styles.mobbglogo}>
                            <img src="/bgmob.png" alt="" />
                        </div>
                        <div className={styles.mobContactLabelCont}>
                            <h1>
                                Get in touch,
                            </h1>
                            <h1>
                                Banknote here to
                            </h1>

                            <h1 style={{ color: '#E4C78B' }}>
                                Help your Business!
                            </h1>
                        </div>
                        <div id="contactForm" className={styles.contactForm} style={{ marginBottom: '10%' }}>
                            <div className={styles.mobunderlinetextfield}>
                                <div className={styles.submobunderlinetextfield}>
                                    <TextField
                                        id="company-name"
                                        label={<span>Company Name <span style={redAsteriskStyle}>*</span></span>}
                                        variant="standard"
                                        inputProps={{ style: textFieldStyle }}
                                        InputLabelProps={{
                                            style: { color: 'white' }, // Color for label
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#DDB96E', // Change focus underline color to black
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="your-sector"
                                        label={<span>Your Sector <span style={redAsteriskStyle}>*</span></span>}
                                        variant="standard"
                                        inputProps={{ style: textFieldStyle }}
                                        InputLabelProps={{
                                            style: { color: 'white' }, // Color for label
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#DDB96E', // Change focus underline color to black
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="full-name"
                                        label={<span>Full Name <span style={redAsteriskStyle}>*</span></span>}
                                        variant="standard"
                                        inputProps={{ style: textFieldStyle }}
                                        InputLabelProps={{
                                            style: { color: 'white' }, // Color for label
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#DDB96E', // Change focus underline color to black
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="email"
                                        label={<span>Email <span style={redAsteriskStyle}>*</span></span>}
                                        variant="standard"
                                        inputProps={{ style: textFieldStyle }}
                                        InputLabelProps={{
                                            style: { color: 'white' }, // Color for label
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#DDB96E', // Change focus underline color to black
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="phone-number"
                                        label={<span>Phone Number <span style={redAsteriskStyle}>*</span></span>}
                                        variant="standard"
                                        inputProps={{ style: textFieldStyle }}
                                        InputLabelProps={{
                                            style: { color: 'white' }, // Color for label
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#DDB96E', // Change focus underline color to black
                                            },
                                        }}
                                    />
                                    <div style={{ position: 'relative' }}>
                                        <TextField
                                            style={{ width: `100%` }}
                                            id="preferred-call-time"
                                            label={<span>Preferred Call Time <span style={redAsteriskStyle}>*</span></span>}
                                            variant="standard"
                                            inputProps={{ style: textFieldStyle, readOnly: true }}
                                            InputLabelProps={{
                                                style: { color: 'white' }, // Color for label
                                            }}
                                            onClick={handleTextFieldClickmob} // Handle click event
                                            sx={{
                                                '& .MuiInput-underline:after': {
                                                    borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                },
                                            }}
                                        />
                                        {showModalmob && <MobModal onClose={() => setShowModalmob(false)} />} {/* Render modal if showModal is true */}


                                    </div>



                                    <button className={styles.sendButton} style={{ height: `3vw`, background: '#DDB96E', borderRadius: 5, color: '#000', fontSize: '1.4rem' }}>Schedule Consultation </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                <BottomButton></BottomButton>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.overlay} >
                    <div className={styles.TopframeCont}>
                        {/* <div className={styles.topFrame1}></div> */}
                        <div className={styles.topFrame}></div>
                    </div>
                    <div style={{ height: '100% ', overflowY: 'auto', display: 'flex', flexDirection: `column`, width: `100%` }}>
                        <div className={styles.subScroll} >
                            <div className={styles.question}>
                                <div className={styles.bgImageCont}>
                                    <img src="./Q mark.png" alt="" />
                                </div>
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
                            </div>
                            <div id="contactForm" style={{ display: 'flex', flexDirection: 'row', height: `43%`, marginTop: `5%` }}>
                                <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                                    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                        <img style={{ width: '100%', height: '110%', zIndex: `-1`, position: 'absolute' }} src="/contact_bg.png" alt="" />

                                        <div className={styles.ContactLabel}>
                                            <div className={styles.ContactLabelCont}>
                                                <h1>
                                                    Get in touch,
                                                </h1>
                                                <h1>
                                                    Banknote here
                                                </h1>
                                                <h1>
                                                    to <span style={{ color: '#E4C78B' }}>Help your</span>
                                                </h1>
                                                <h1 style={{ color: '#E4C78B' }}>
                                                    Business!
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: `50%` }}>
                                    <div id="contactForm" className={styles.contactForm}>
                                        <div className={styles.underlinetextfield}>
                                            <TextField
                                                id="company-name"
                                                label={<span>Company Name <span style={redAsteriskStyle}>*</span></span>}
                                                variant="standard"
                                                inputProps={{ style: textFieldStyle }}
                                                InputLabelProps={{
                                                    style: { color: 'white' }, // Color for label
                                                }}
                                                sx={{
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                    },
                                                }}
                                            />
                                            <TextField
                                                id="your-sector"
                                                label={<span>Your Sector <span style={redAsteriskStyle}>*</span></span>}
                                                variant="standard"
                                                inputProps={{ style: textFieldStyle }}
                                                InputLabelProps={{
                                                    style: { color: 'white' }, // Color for label
                                                }}
                                                sx={{
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                    },
                                                }}
                                            />
                                            <TextField
                                                id="full-name"
                                                label={<span>Full Name <span style={redAsteriskStyle}>*</span></span>}
                                                variant="standard"
                                                inputProps={{ style: textFieldStyle }}
                                                InputLabelProps={{
                                                    style: { color: 'white' }, // Color for label
                                                }}
                                                sx={{
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                    },
                                                }}
                                            />
                                            <TextField
                                                id="email"
                                                label={<span>Email <span style={redAsteriskStyle}>*</span></span>}
                                                variant="standard"
                                                inputProps={{ style: textFieldStyle }}
                                                InputLabelProps={{
                                                    style: { color: 'white' }, // Color for label
                                                }}
                                                sx={{
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                    },
                                                }}
                                            />
                                            <TextField
                                                id="phone-number"
                                                label={<span>Phone Number <span style={redAsteriskStyle}>*</span></span>}
                                                variant="standard"
                                                inputProps={{ style: textFieldStyle }}
                                                InputLabelProps={{
                                                    style: { color: 'white' }, // Color for label
                                                }}
                                                sx={{
                                                    '& .MuiInput-underline:after': {
                                                        borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                    },
                                                }}
                                            />
                                            <div style={{ position: 'relative' }}>
                                                <TextField
                                                    style={{ width: `100%` }}
                                                    id="preferred-call-time-web"
                                                    label={<span>Preferred Call Time <span style={redAsteriskStyle}>*</span></span>}
                                                    variant="standard"
                                                    inputProps={{ style: textFieldStyle, readOnly: true }}
                                                    InputLabelProps={{
                                                        style: { color: 'white' }, // Color for label
                                                    }}
                                                    onClick={handleTextFieldClick} // Handle click event
                                                    sx={{
                                                        '& .MuiInput-underline:after': {
                                                            borderBottomColor: '#DDB96E', // Change focus underline color to black
                                                        },
                                                    }}
                                                />
                                                {showModal && <Modal onClose={() => setShowModal(false)} />} {/* Render modal if showModal is true */}
                                                <img
                                                    style={{
                                                        position: 'absolute',
                                                        right: 0,
                                                        width: '5.5%',
                                                        top: '5.5px',
                                                        transition: 'transform 0.2s ease-in-out', // Add transition for a smoother effect
                                                    }}
                                                    src="/info.svg"
                                                    alt=""
                                                    onMouseOver={(e) => {
                                                        e.target.style.transform = 'scale(1.1)';
                                                        setIsHovered(true);
                                                    }} // Add hover effect
                                                    onMouseOut={(e) => {
                                                        e.target.style.transform = 'scale(1)';
                                                        setIsHovered(false);
                                                    }} // Reset on hover out
                                                />
                                                {isHovered && (
                                                    <div style={{ position: 'relative' }}>
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                top: '-9px',
                                                                right: '0px', // Adjust the right property to move the frame to the right

                                                                width: 0,
                                                                height: 0,
                                                                borderLeft: '10px solid transparent',
                                                                borderRight: '10px solid transparent',
                                                                borderBottom: '10px solid #fff', // Adjust the color as needed
                                                                zIndex: '2',
                                                            }}
                                                        ></div>
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                top: '100%',
                                                                right: '-25px', // Adjust the right property to move the frame to the right
                                                                padding: '10px',
                                                                background: '#fff',
                                                                border: '1px solid #ddd',
                                                                borderRadius: '4px',
                                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                                zIndex: '1',
                                                            }}
                                                        >
                                                            <p className={styles.msgInfo}>When do you want us to call you?</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>



                                            <button className={styles.sendButton} style={{ height: `3vw`, background: '#DDB96E', borderRadius: 5 }}>Send</button>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.footer}>
                                <div style={{ margin: `0`, width: `70%` }} className="container">
                                    <div style={{ width: `115%` }} className="row mb-4">
                                        <div className="col-md-6">

                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/location.svg" alt="" />

                                                <h1>106 Nile, 5th Floor, Dokki, Giza, Egypt</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/clock.svg" alt="" />

                                                <h1>Saturday - Thursday 08:00 am - 06:00 pm</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: `115%` }} className="row mb-4">
                                        <div className="col-md-6">

                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/mail.svg" alt="" />

                                                <h1>info@banknote-consult.com</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/phone.svg" alt="" />

                                                <h1>(+20) 1000558282 or (+20) 01069269754</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: `115%` }} className="row mb-4">
                                        <div className="col-md-6">
                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/people.svg" alt="" />

                                                <h1>Careers</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={styles.footerSubCont}   >
                                                <img src="/footericons/telephone.svg" alt="" />

                                                <h1>0233365177</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>);
}

export default FAQs;
