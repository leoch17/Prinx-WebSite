import React, { useState } from "react";
import '../pages/Productsv2.css';
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function Productsv2() {

    const $window = $(window);
    const $body = $('body');

    class Slideshow {
        constructor(userOptions = {}) {
            const defaultOptions = {
                $el: $('.slideshow'),
                showArrows: false,
                showPagination: true,
                duration: 10000,
                autoplay: true
            }

            let options = Object.assign({}, defaultOptions, userOptions);

            this.$el = options.$el;
            this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
            this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
            this.showPagination = options.showPagination;
            this.currentSlide = 1;
            this.isAnimating = false;
            this.animationDuration = 1200;
            this.autoplaySpeed = options.duration;
            this.interval = 200;
            this.$controls = this.$el.find('.js-slider-home-button');
            this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

            this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
            this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
            this.$el.on('click', '.js-pagination-item', event => {
                if (!this.isAnimating) {
                    this.preventClick();
                    this.goToSlide(event.target.dataset.slide);
                }
            });

            this.init();
        }

        init() {
            this.goToSlide(1);
            if (this.autoplay) {
                this.startAutoplay();
            }

            if (this.showPagination) {
                let paginationNumber = this.maxSlide;
                let pagination = '<div class="pagination"><div class="container">';

                for (let i = 0; i < this.maxSlide; i++) {
                    let item = `<span class="pagination__item js-pagination-item ${i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
                    pagination = pagination + item;
                }

                pagination = pagination + '</div></div>';

                this.$el.append(pagination);
            }
        }

        preventClick() {
            this.isAnimating = true;
            this.$controls.prop('disabled', true);
            clearInterval(this.interval);

            setTimeout(() => {
                this.isAnimating = false;
                this.$controls.prop('disabled', false);
                if (this.autoplay) {
                    this.startAutoplay();
                }
            }, this.animationDuration);
        }

        goToSlide(index) {
            this.currentSlide = parseInt(index);

            if (this.currentSlide > this.maxSlide) {
                this.currentSlide = 1;
            }

            if (this.currentSlide === 0) {
                this.currentSlide = this.maxSlide;
            }

            const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
            const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
            const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

            this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
            this.$el.find('.js-pagination-item').removeClass('is-current');

            if (this.maxSlide > 1) {
                newPrev.addClass('is-prev');
                newNext.addClass('is-next');
            }

            newCurrent.addClass('is-current');
            this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
        }

        nextSlide() {
            this.preventClick();
            this.goToSlide(this.currentSlide + 1);
        }

        prevSlide() {
            this.preventClick();
            this.goToSlide(this.currentSlide - 1);
        }

        startAutoplay() {
            this.interval = setInterval(() => {
                if (!this.isAnimating) {
                    this.nextSlide();
                }
            }, this.autoplaySpeed);
        }

        destroy() {
            this.$el.off();
        }
    }

    (function () {
        let loaded = false;
        let maxLoad = 3000;

        function load() {
            const options = {
                showPagination: true
            };

            let slideShow = new Slideshow(options);
        }

        function addLoadClass() {
            $body.addClass('is-loaded');

            setTimeout(function () {
                $body.addClass('is-animated');
            }, 600);
        }

        $window.on('load', function () {
            if (!loaded) {
                loaded = true;
                load();
            }
        });

        setTimeout(function () {
            if (!loaded) {
                loaded = true;
                load();
            }
        }, maxLoad);

        addLoadClass();
    })();

    const [showModalHH2, setShowModalHH2] = useState(false);
    const [showModalHT2, setShowModalHT2] = useState(false);
    const [showModalHA2, setShowModalHA2] = useState(false);
    const [showModalHR1, setShowModalHR1] = useState(false);


    const handleCloseModalHH2 = () => {
        setShowModalHH2(false);
    };

    const handleCloseModalHT2 = () => {
        setShowModalHT2(false);
    };

    const handleCloseModalHA2 = () => {
        setShowModalHA2(false);
    };

    const handleCloseModalHR1 = () => {
        setShowModalHR1(false);
    };


    return (
        <>
            <body className="body-producto">
                <div id="wrapper">
                    <section class="slideshow" id="js-header">

                        {/* Primer Banner */}
                        <div class="slideshow__slide js-slider-home-slide is-current" data-slide="1">
                            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                                <div class="slideshow__slide-background-load-wrap background-absolute">
                                    <div class="slideshow__slide-background-load background-absolute">
                                        <div class="slideshow__slide-background-wrap background-absolute">
                                            <div class="slideshow__slide-background background-absolute">
                                                <div class="slideshow__slide-image-wrap background-absolute">
                                                    <div class="slideshow__slide-image background-absolute" style={{ backgroundImage: "url('/images/productos/banner-prinx-HH2.webp')" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slideshow__slide-caption">
                                <div class="slideshow__slide-caption-text">
                                    <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                                        <h1 class="slideshow__slide-caption-title">HH2</h1>

                                        <a class="slideshow__slide-caption-subtitle -load o-hsub -link" onClick={() => setShowModalHH2(true)}>
                                            <button class="slideshow__slide-caption-subtitle-label">Más Información</button>
                                        </a>

                                        <Modal size="md" show={showModalHH2} onHide={handleCloseModalHH2} centered>
                                            <Modal.Header style={{ backgroundColor: "#5CC600" }} closeButton>
                                                <Modal.Title style={{ color: "#fff" }} className="title-hankook">HH2</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src="pdf/hh2-modal.webp" />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <center>
                                                    <div className="lista-general">
                                                        <div className="lista">
                                                            <ul class="rolldown-list" id="myList">
                                                                <li>215/55R17</li>
                                                                <li>225/55R17</li>
                                                                <li>225/55R18</li>
                                                                <li>215/50R17</li>
                                                                <li>235/50R18</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </center>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Segundo Banner */}
                        <div class="slideshow__slide js-slider-home-slide is-next" data-slide="2">
                            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                                <div class="slideshow__slide-background-load-wrap background-absolute">
                                    <div class="slideshow__slide-background-load background-absolute">
                                        <div class="slideshow__slide-background-wrap background-absolute">
                                            <div class="slideshow__slide-background background-absolute">
                                                <div class="slideshow__slide-image-wrap background-absolute">
                                                    <div class="slideshow__slide-image background-absolute" style={{ backgroundImage: "url('/images/productos/banner-prinx-HT2.webp')" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slideshow__slide-caption">
                                <div class="slideshow__slide-caption-text">
                                    <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                                        <h1 class="slideshow__slide-caption-title">HT2</h1>

                                        <a class="slideshow__slide-caption-subtitle -load o-hsub -link" onClick={() => setShowModalHT2(true)}>
                                            <button class="slideshow__slide-caption-subtitle-label">Más Información</button>
                                        </a>

                                        <Modal size="md" show={showModalHT2} onHide={handleCloseModalHT2} centered>
                                            <Modal.Header style={{ backgroundColor: "#5CC600" }} closeButton>
                                                <Modal.Title style={{ color: "#fff" }} className="title-hankook">HT2</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body><img src="pdf/ht2-modal.webp" /></Modal.Body>
                                            <Modal.Footer>
                                                <center>
                                                    <div className="lista-general">
                                                        <div className="lista">
                                                            <ul class="rolldown-list" id="myList">
                                                                <li>265/75R16</li>
                                                                <li>265/70R17</li>
                                                                <li>235/65R17</li>
                                                                <li>265/65R17</li>
                                                                <li>245/60R18</li>
                                                                <li>265/60R18</li>
                                                                <li>275/55R20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </center>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Tercer Banner */}
                        <div class="slideshow__slide js-slider-home-slide is-prev" data-slide="3">
                            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                                <div class="slideshow__slide-background-load-wrap background-absolute">
                                    <div class="slideshow__slide-background-load background-absolute">
                                        <div class="slideshow__slide-background-wrap background-absolute">
                                            <div class="slideshow__slide-background background-absolute">
                                                <div class="slideshow__slide-image-wrap background-absolute">
                                                    <div class="slideshow__slide-image background-absolute" style={{ backgroundImage: "url('/images/productos/banner-prinx-HA2.webp')" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slideshow__slide-caption">
                                <div class="slideshow__slide-caption-text">
                                    <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                                        <h1 class="slideshow__slide-caption-title">HA2</h1>

                                        <a class="slideshow__slide-caption-subtitle -load o-hsub -link" onClick={() => setShowModalHA2(true)}>
                                            <button class="slideshow__slide-caption-subtitle-label">Más Información</button>
                                        </a>

                                        <Modal size="md" show={showModalHA2} onHide={handleCloseModalHA2} centered>
                                            <Modal.Header style={{ backgroundColor: "#5CC600" }} closeButton>
                                                <Modal.Title style={{ color: "#fff" }} className="title-hankook">HA2</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body><img src="pdf/ha2-modal.webp" /></Modal.Body>
                                            <Modal.Footer>
                                                <center>
                                                    <div className="lista-general">
                                                        <div className="lista">
                                                            <ul class="rolldown-list" id="myList">
                                                                <li>265/75R16</li>
                                                                <li>265/70R16</li>
                                                                <li>265/70R17</li>
                                                                <li>275/60R20</li>
                                                                <li>275/55R20</li>
                                                                <li>LT235/80R17</li>
                                                                <li>LT265/60R20</li>
                                                                <li>LT275/65R20</li>
                                                                <li>LT285/75R16</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </center>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cuarto Banner */}
                        <div class="slideshow__slide js-slider-home-slide is-prev" data-slide="4">
                            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
                                <div class="slideshow__slide-background-load-wrap background-absolute">
                                    <div class="slideshow__slide-background-load background-absolute">
                                        <div class="slideshow__slide-background-wrap background-absolute">
                                            <div class="slideshow__slide-background background-absolute">
                                                <div class="slideshow__slide-image-wrap background-absolute">
                                                    <div class="slideshow__slide-image background-absolute" style={{ backgroundImage: "url('/images/productos/banner-prinx-HR1.webp')" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slideshow__slide-caption">
                                <div class="slideshow__slide-caption-text">
                                    <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                                        <h1 class="slideshow__slide-caption-title">HR1</h1>

                                        <a class="slideshow__slide-caption-subtitle -load o-hsub -link" onClick={() => setShowModalHR1(true)}>
                                            <button class="slideshow__slide-caption-subtitle-label">Más Información</button>
                                        </a>

                                        <Modal size="md" show={showModalHR1} onHide={handleCloseModalHR1} centered>
                                            <Modal.Header style={{ backgroundColor: "#5CC600" }} closeButton>
                                                <Modal.Title style={{ color: "#fff" }} className="title-hankook">HR1</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body><img src="pdf/hr1-modal.webp" /></Modal.Body>
                                            <Modal.Footer>
                                                <center>
                                                    <div className="lista-general">
                                                        <div className="lista">
                                                            <ul class="rolldown-list" id="myList">
                                                                <li>35X12.50R20LT</li>
                                                                <li>35X12.50R18LT</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </center>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="c-header-home_footer">
                            <div class="o-container">
                                <div class="c-header-home_controls -nomobile o-button-group">
                                    <div class="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                                        <button class="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                                            <span class="o-button_label">
                                                <svg class="o-button_icon" role="img"><use xlinkTitle="http://www.w3.org/1999/xlink" href="#arrow-prev"></use></svg>
                                            </span>
                                        </button>
                                        <button class="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                                            <span class="o-button_label">
                                                <svg class="o-button_icon" role="img"><use xlinkTitle="http://www.w3.org/1999/xlink" href="#arrow-next"></use></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <symbol viewBox="0 0 18 18" id="arrow-next">
                                    <path id="arrow-next-arrow.svg" d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z" />
                                </symbol>
                                <symbol viewBox="0 0 18 18" id="arrow-prev">
                                    <path id="arrow-prev-arrow.svg" d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z" />
                                </symbol>
                            </svg>
                        </div>
                    </section>

                </div>
            </body>
            <Footer />
        </>
    );
}

export default Productsv2;