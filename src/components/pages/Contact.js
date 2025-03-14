import React from "react";
import '../pages/Contact.css';
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";



function Contact() {



    return (
        <>


            <body className="contacto-principal">

                <div class="box">
                    <div>
                        <a className="enlaces" href="https://wa.link/byj1si" target="_blank">
                            <div class="box__item box__item--vue">
                                <FontAwesomeIcon className="icono" icon={faWhatsapp} />
                                {/* <span>VUE JS</span> */}
                            </div>
                        </a>
                        <div class="box__bg"></div>
                    </div>

                    <div>
                        <a className="enlaces" href="tel:+584246328415" target="_blank">
                            <div class="box__item box__item--react">
                                <FontAwesomeIcon className="icono" icon={faPhone} />
                                {/* <span>REACT JS</span> */}
                            </div>
                        </a>
                        <div class="box__bg"></div>
                    </div>

                    <div>
                        <a className="enlaces" href="mailto:info@cauchoslamundial.com" target="_blank">
                            <div class="box__item box__item--angular">
                                <FontAwesomeIcon className="icono" icon={faEnvelope} />
                                {/* <span>ANGULAR JS</span> */}
                            </div>
                        </a>
                        <div class="box__bg"></div>
                    </div>

                    <div>
                        <a className="enlaces" href="https://www.google.com/maps/place/Cauchos+La+Mundial+C.A./@10.585714,-71.630291,16z/data=!4m6!3m5!1s0x8e899772bf5d1d1b:0x1c0c2ab5928ca2b!8m2!3d10.5857137!4d-71.6302907!16s%2Fg%2F11b5qrbd27?hl=en&entry=ttu" target="_blank">
                            <div class="box__item box__item--angular">
                                <FontAwesomeIcon className="icono" icon={faMap} />
                                {/* <span>ANGULAR JS</span> */}
                            </div>
                        </a>
                        <div class="box__bg"></div>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default Contact;