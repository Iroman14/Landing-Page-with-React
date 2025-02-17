function Jumbotron() {
    return (
        <div className="bg-secondary rounded-3 p-5 m-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-medium text-light">Bienvenido a 4Geeks Academy</h1>
                <p className="fs-4 text-light">El lugar donde puedes aprender sobre los principales lenguajes de programación. Explora sus características, usos y ventajas, desde lenguajes clásicos como C y Java hasta los más modernos como Python, JavaScript y Rust. Encuentra guías, comparaciones y recursos para ayudarte a elegir el mejor lenguaje según tus necesidades, ya seas principiante o desarrollador avanzado.</p>
                <button className="btn btn-light btn-lg" type="button">Leer más...</button>
            </div>
        </div>
    );
};

export default Jumbotron;