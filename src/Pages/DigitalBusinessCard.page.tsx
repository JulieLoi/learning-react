import React, { useReducer, useRef, useCallback } from 'react';
import Split from 'react-split';
import { toPng } from 'html-to-image';

import Form from "../components/DigitalBusinessCard/Form.component";
import Information from '../components/DigitalBusinessCard/Information.component';
import Description from '../components/DigitalBusinessCard/Description.component';
import Footer from '../components/DigitalBusinessCard/Footer.component';

import '../stylesheets/split.css';
import styles from '../stylesheets/DigitalBusinessCard.module.css';
import { BusinessCard } from '../Types';
import { cardFormReducer } from '../Reducers';


const DigitalBusinessCardPage: React.FC = () => {

    // Initial Form Data and reducer
    const initialState: BusinessCard = {
        info: {
            image: "",
            name: "",
            jobPosition: "",
            personalLink: "",
            emailLink: "https://gmail.google.com/inbox/",
            linkedInLink: "https://www.linkedin.com/",
        },
        desc: {
            aboutText: "",
            interestsText: "",
        },
        footer: {
            twitterLink: "https://twitter.com",
            facebookLink: "http://facebook.com",
            instagramLink: "https://instagram.com",
            githubLink: "https://github.com",
        },
    }
    const [cardState, cardDispatch] = useReducer(cardFormReducer, initialState);

    // Download PNG
    const cardRef = useRef<HTMLDivElement>(null)
    const saveImage = useCallback(() => {
        if (cardRef.current === null) { return }
        toPng(cardRef.current, { cacheBust: true, })
          .then((dataUrl) => {
            console.log(cardRef.current)

            const link = document.createElement('a');
            link.download = 'Business-Card.png';
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => { 
            console.error('Oops, something went wrong!', err);
            window.alert("You are missing a working 'Image Link'!");
        })
    }, [cardRef]);

    // Digital Business Card Page
    return (
        <Split className="split" minSize={450} sizes={[75, 30]}>
            <div className={styles["form-section"]}>
                <Form 
                    dispatch={cardDispatch}
                    downloadFunction={saveImage}
                />
            </div>
            <div className={`${styles["card-section"]}`}>
                <div ref={cardRef}>
                    <div className={styles["card"]} >
                        <Information info={cardState.info} />
                        <Description desc={cardState.desc} />
                        <Footer footer={cardState.footer} />    
                    </div>               
                </div>

            </div>
        </Split>   
    );
};

export default DigitalBusinessCardPage;
