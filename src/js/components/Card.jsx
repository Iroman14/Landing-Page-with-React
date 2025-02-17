function Card(props) {
    const { image, title, description } = props.cards;

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <hr />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );
};

export default Card;