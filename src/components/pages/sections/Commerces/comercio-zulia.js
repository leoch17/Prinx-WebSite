import React from "react";
import '../Commerces/css commerces/comercio.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";
import Footer from "../../../Footer";

function Comercio_zulia() {

    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2>Redes de Distribución del Zulia</h2>
                            <br></br><br></br>
                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL 72, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 72 GILBERTO CORREA, ENTRE AV. 13 Y AV. 12 AL LADO DE FARMACIA FARMAEXPRESS.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank"> +58 412-2618392</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.2100799929663!2d-71.61596608000409!3d10.669499683865592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999d446d6317d%3A0x6b5846a8095c79d5!2sRuedas%20La%20Mundial%2072%2C%20C.A.!5e0!3m2!1ses!2sve!4v1685629178927!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL CECILIO ACOSTA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. 9B CON CALLE 67 CECILIO ACOSTA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.234247697298!2d-71.61340748604994!3d10.677206251225455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89994e59916691%3A0xfe5933d950b31512!2sRuedas%20La%20Mundial!5e0!3m2!1sen!2sve!4v1685476320688!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL SABANETA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> SECTOR SABANETA, DIAGONAL AL MONUMENTO LA CHINITA DE LA C1.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.8260344166465!2d-71.64203876495948!3d10.628478416304889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999beca66dc79%3A0x36e5800889123875!2sRuedas%20La%20Mundial%20Sabaneta!5e0!3m2!1sen!2sve!4v1685476457134!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL VERITAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 90, CON AV. 8 (DIAGONAL A LA ESTACIÓN DE SERVICIO NUEVO CIRCO), LAS VERITAS, MARACAIBO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.5559377343!2d-71.61050540879857!3d10.64841612360719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999e5e16eec79%3A0xcafe6474ff2d41b3!2sRuedas%20la%20Mundial%20Veritas!5e0!3m2!1sen!2sve!4v1685476504545!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header class="acordion-header">RUEDAS LA MUNDIAL SUR, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> UBICADA A 200 METROS DE LA ESCUELA DE POLICÍAS DE SAN FRANCÍSCO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584122618392" target="_blank">+58 412-2618392</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.1889969281747!2d-71.62410179458313!3d10.558915070637386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89979e7bbb8271%3A0xd9b6b8ffb13d653a!2sRuedas%20La%20Mundial%20Sur!5e0!3m2!1sen!2sve!4v1685476539488!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header class="acordion-header">COMERCIAL ARGUELLE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/comercialarguelles/" target="_blank">@comercialarguelles</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584146709476" target="_blank">+58 414-6709476</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0605664814384!2d-71.45600580444317!3d10.41676453378635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89c703a34d37ef%3A0xeb65cc585015602a!2sComercial%20Arguelles!5e0!3m2!1sen!2sve!4v1691524235370!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header class="acordion-header">AGROTIRE'S VE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. DERECHA SECTOR JALISCO FRENTE A LOS BOMBEROS VILLA DEL ROSARIO.<br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/agrotires/" target="_blank">@agrotires</a><br />
                                        <FontAwesomeIcon icon={faPhone} /><a className="contacts" href="tel:+584146416431" target="_blank">+58 414-6416431</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.4035126655622!2d-72.33704494025714!3d10.31439451871641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8a6d49eca17667%3A0xe15798a396169160!2sAgrotires%20Ve%2C%20C.A.!5e0!3m2!1sen!2sve!4v1691524585546!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header class="acordion-header">UNICAUCHO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. INTERCOMUNAL, SECTOR BELLO MONTE, CABIMAS.<br />
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/unicaucho.ve/" target="_blank">@unicaucho.ve</a><br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584126400216" target="_blank">+58 412-6400216</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header class="acordion-header">CAUCHOS, LLANTAS Y NEUMÁTICOS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <FontAwesomeIcon icon={faLocationArrow} /> CTRA N CON AV 62 CASA NRO S/N SECTOR EL JABILLO CIUDAD OJEDA - EL DANTO ZULIA ZONA POSTAL 4019.<br></br> */}
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/setorcamultitienda/" target="_blank">@setorcamultitienda</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584147467838" target="_blank">+58 414-7467838</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2343.2266050691983!2d-71.90353429460383!3d8.988548348052815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknMTguMiJOIDcxwrA1NCcwNy45Ilc!5e0!3m2!1ses!2sve!4v1691526468896!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header class="acordion-header">INVERSIONES 3S & N.C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} />  AV. INDEPENDENCIA A 100 MTS DE CORPOZULIA SECTOR LA FLORIDA.<br></br>
                                        <FontAwesomeIcon icon={faPhone} /><a className="contacts" href="tel:+584128631518" target="_blank">+58 412-8631518</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <Accordion.Header class="acordion-header">SOBRE RUEDAS Y RINES LA H C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} />  CARRETERA H CON AV. 31, CABIMAS.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/sobreruedasyrines/" target="_blank">@sobreruedasyrines</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /><a className="contacts" href="tel:+584146290971" target="_blank">+58 414-6290971</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1166.6692752247518!2d-71.44576211826114!3d10.406316714275093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89c7ecf0f37d79%3A0x33de2db0f18a8982!2sSobre%20Ruedas%20y%20Rines%20la%20H%20C.A.!5e0!3m2!1ses!2sve!4v1691527187637!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <Accordion.Header class="acordion-header">RACING TIRE, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} />  AV. 9B CALLE 67 SECTOR CECILIO ACOSTA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/racingtires/" target="_blank">@racingtires</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /><a className="contacts" href="tel:+584146333924" target="_blank">+58 414-6333924</a><br />
                                        <h4>Marcas Disponibles:</h4><br />
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/hankook.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/dunlop.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/nankang.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/chengshan.jpeg' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/prinx.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/westlake.png' loop />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="logotipos" src='/images/logos/weathertech.png' loop />
                                            </Carousel.Item>
                                        </Carousel><br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.380507823533!2d-71.61358684230662!3d10.677424276604155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8998dbcfdda259%3A0xf4cbf6c9df78ca01!2sRacing%20Tire%2C%20C.A.!5e0!3m2!1sen!2sve!4v1691527557501!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion><br></br><br></br>
                        </div>
                    </center>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default Comercio_zulia;