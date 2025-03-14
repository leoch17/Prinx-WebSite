import React from "react";
import '../components/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <>
            <div className="footer_1">
                <div className="container">
                    <div className="row ">
                        <br />
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h4 className="final-words">Horario de Atención:</h4>
                            <p className="final-words">
                                Lunes – Viernes, 8:00 a.m. – 6:00 p.m.
                            </p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <aside className="widget social_widget">
                                <div className="links-options-footer">
                                    <a className="icon-social" href="https://www.instagram.com/prinxtire.ve/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a className="icon-social" href="https://www.facebook.com/prinxtire.ve/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a className="icon-social" href="https://www.youtube.com/@prinxchengshan4115" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                            </aside>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div >

                <center>
                    <div class="footer-horario">
                        <a href="/" className="social-logo">
                            <img src="images/prinx-logo.webp" width={190} />
                        </a>
                        <a
                            href="https://www.cauchoslamundial.com/"
                            target="_blank"
                            className="social-logo"
                        >
                            <img src="images/clm-blanco.png" width={190} />
                        </a>
                    </div>
                </center>

                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="copyright">
                            <a className="enlace" href="/" target="_blank">PRINX Venezuela</a> © Todos los derechos reservados. Diseñado por Grupo La Mundial C.A.
                        </div>
                        <br />
                    </div>
                </div>
            </div >

        </>
    );
}

export default Footer;