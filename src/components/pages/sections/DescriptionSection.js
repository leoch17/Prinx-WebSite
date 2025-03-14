import React, { useState } from "react";
import '../sections/DescriptionSection.css';

function DescriptionSection() {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    const handleMouseEnterLeft = () => {
        setHoverLeft(true);
    };

    const handleMouseLeaveLeft = () => {
        setHoverLeft(false);
    };

    const handleMouseEnterRight = () => {
        setHoverRight(true);
    };

    const handleMouseLeaveRight = () => {
        setHoverRight(false);
    };

    return (
        <>
            <div className="principal-desc">
                <div className="description-seccion">
                    <div className="description">
                        <div className={`container ${hoverLeft ? 'hover-left' : ''} ${hoverRight ? 'hover-right' : ''}`}>
                            <div class="split left" onMouseEnter={handleMouseEnterLeft} onMouseLeave={handleMouseLeaveLeft}>
                                <h1 className="title-desc">CERTIFICACIONES INTERNACIONALES</h1>
                                <ul className="slogan-desc">
                                    <li><b>E-Mark</b> es una certificación europea que se requiere para vender productos en la Unión Europea.</li>
                                    <li><b>CCC</b> es una certificación china que se requiere para vender productos en China.</li>
                                    <li><b>USA DOT</b> es una certificación estadounidense que se requiere para vender productos en los Estados Unidos.</li>
                                    <li><b>INMETRO</b> es una certificación brasileña que se requiere para vender productos en Brasil.</li>
                                    <li><b>ISO TS 16949</b> es una certificación internacional de gestión de calidad que se requiere para vender productos en la industria automotriz.</li>
                                    <li><b>GSO</b> es una certificación de normalización del Consejo de Cooperación de los Estados Árabes del Golfo que se requiere para vender productos en los Estados Árabes del Golfo.</li>
                                    <br />
                                    Estas certificaciones garantizan que los productos cumplen con los estándares de calidad y seguridad establecidos por cada mercado.
                                </ul>
                                <div className="image-contenedor" >
                                    <img className="image-desc" src="/images/certificado.webp" />
                                </div>
                            </div>
                            <div class="split right" onMouseEnter={handleMouseEnterRight} onMouseLeave={handleMouseLeaveRight}>
                                <video className="video-prinx" style={{ background: "center center no repeat" }} src="/video/prinx-eslogan.webm" autoPlay loop muted />
                                {/* <h1 className="title-desc" style={{ color: "#000" }}>Prinx</h1> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionSection;