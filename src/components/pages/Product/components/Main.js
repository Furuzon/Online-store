import React from 'react'

export default function Main() {
    return (
        <section>
            <div className="section">
                <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1 style={{fontWeight: 'bold'}}>Preorder Feature</h1>
                    </div>
                    <div className="col-md-12 t-center">
                        <h5>Allow your customers to make preorders.</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-1">
                        <div id="product-option">
                            <div className="product-option img-active">
                                <img alt="img" src="./img/thumb-product01.jpg"/>
                            </div>
                            <div className="product-option">
                                <img alt="img" src="./img/thumb-product02.jpg"/>
                            </div>
                            <div className="product-option">
                                <img alt="img" src="./img/thumb-product03.jpg"/>
                            </div>
                            <div className="product-option">
                                <img alt="img" src="./img/thumb-product04.jpg"/>
                            </div>
                            <div className="up">
                                <i className="fa fa-angle-up"></i>
                            </div>
                            <div className="down">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 wow zoomIn" data-wow-duration="3s">
                        <div id="product-main-view">
                            <div className="product-view">
                                <img alt="img" src="./img/main-product04.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="product-body">
                            <p id="product-code">SKU: 481</p>
                            <p id="product-code">Availability: In Stock</p>
                            <h1>Product Name</h1>
                            <h2>$644</h2>
                            <div className="product-rating">
                                <i className="fa fa-star-o empty"></i>
                                <i className="fa fa-star-o empty"></i>
                                <i className="fa fa-star-o empty"></i>
                                <i className="fa fa-star-o empty"></i>
                                <i className="fa fa-star-o empty"></i>
                            </div>
                            <div className="size">
                                <span>
                                    <storng>SIZE:</storng> S
                                </span>
                                <ul className="size-option list-unstyled d-flex">
                                    <li className="size-active">S</li>
                                    <li>M</li>
                                    <li>L</li>
                                </ul>
                            </div>
                            <div className="icons">
                                <ul className="like list-unstyled d-flex">
                                    <li><i className="fa fa-heart"></i></li>
                                    <li><i className="fa fa-exchange"></i></li>
                                    <li><i className="fa fa-shopping-cart"></i></li>
                                </ul>
                            </div>
                            <div className="links d-flex">
                                <i className="fa fa-signal"></i>Size guide
                                <i className="fa fa-cube"></i>Shiping
                                <i className="fa fa-mail-forward"></i>Ask about this product
                            </div>
                            <div className="qty d-flex mt-5">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <div className="add-cart">
                                <button className="add-to-cart">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
