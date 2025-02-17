function Card (props) {
    const { image1, title1, description1, image2, title2, description2, image3, title3, description3, image4, title4, description4 } = props.cards;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto mb-5">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt={title1} />
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{title1}</h5>
                            <p className="card-text">{description1}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto mb-5">
                    <div className="card">
                        <img src={image2} className="card-img-top" alt={title2} />
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{title2}</h5>
                            <p className="card-text">{description2}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto mb-5">
                    <div className="card">
                        <img src={image3} className="card-img-top" alt={title3} />
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{title3}</h5>
                            <p className="card-text">{description3}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto mb-5">
                    <div className="card">
                        <img src={image4} className="card-img-top" alt={title4} />
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{title4}</h5>
                            <p className="card-text">{description4}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;