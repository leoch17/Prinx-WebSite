import React from "react";
import '../pages/Products.css';
import $ from 'jquery';

function Products() {
    $(document).ready(function () {

        var curPage = 1;
        var numOfPages = $(".skw-page").length;
        var animTime = 1000;
        var scrolling = false;
        var pgPrefix = ".skw-page-";

        function pagination() {
            scrolling = true;

            $(pgPrefix + curPage).removeClass("inactive").addClass("active");
            $(pgPrefix + (curPage - 1)).addClass("inactive");
            $(pgPrefix + (curPage + 1)).removeClass("active");

            setTimeout(function () {
                scrolling = false;
            }, animTime);
        };

        function navigateUp() {
            if (curPage === 1) return;
            curPage--;
            pagination();
        };

        function navigateDown() {
            if (curPage === numOfPages) return;
            curPage++;
            pagination();
        };

        $(document).on("mousewheel DOMMouseScroll", function (e) {
            if (scrolling) return;
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
            } else {
                navigateDown();
            }
        });

        $(document).on("keydown", function (e) {
            if (scrolling) return;
            if (e.which === 38) {
                navigateUp();
            } else if (e.which === 40) {
                navigateDown();
            }
        });

    });

    return (
        <>
            <div class="skw-pages">
                <div class="skw-page skw-page-1 active">
                    <div class="skw-page__half skw-page__half--left">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content"></div>
                        </div>
                    </div>
                    <div class="skw-page__half skw-page__half--right">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content">
                                <h2 class="skw-page__heading">Skewed One Page Scroll</h2>
                                <p class="skw-page__description">Just scroll down</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skw-page skw-page-2">
                    <div class="skw-page__half skw-page__half--left">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content">
                                <h2 class="skw-page__heading">Page 2</h2>
                                <p class="skw-page__description">Nothing to do here, continue scrolling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="skw-page__half skw-page__half--right">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content"></div>
                        </div>
                    </div>
                </div>
                <div class="skw-page skw-page-3">
                    <div class="skw-page__half skw-page__half--left">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content"></div>
                        </div>
                    </div>
                    <div class="skw-page__half skw-page__half--right">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content">
                                <h2 class="skw-page__heading">Page 3</h2>
                                <p class="skw-page__description">The end is near, I promise!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skw-page skw-page-4">
                    <div class="skw-page__half skw-page__half--left">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content">
                                <h2 class="skw-page__heading">Page 4</h2>
                                <p class="skw-page__description">Ok, ok, just one more scroll!</p>
                            </div>
                        </div>
                    </div>
                    <div class="skw-page__half skw-page__half--right">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content"></div>
                        </div>
                    </div>
                </div>
                <div class="skw-page skw-page-5">
                    <div class="skw-page__half skw-page__half--left">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content"></div>
                        </div>
                    </div>
                    <div class="skw-page__half skw-page__half--right">
                        <div class="skw-page__skewed">
                            <div class="skw-page__content">
                                <h2 class="skw-page__heading">Epic finale</h2>
                                <p class="skw-page__description">
                                    Feel free to check
                                    <a class="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on
                                    <a class="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;