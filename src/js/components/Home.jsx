import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
	{
		image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1",
		title: "Python",
		description: "Un lenguaje de programación interpretado y de alto nivel, conocido por su sintaxis sencilla y legible. Es ideal para desarrollo web, ciencia de datos, inteligencia artificial y automatización.",
	},
	{
		image: "https://conclase.net/imagen/c/curso/C++logo.svg",
		title: "C++",
		description: "Un lenguaje de programación de propósito general y bajo nivel, ampliamente utilizado en sistemas operativos, software embebido y aplicaciones que requieren alto rendimiento y control sobre la memoria.",
	},
	{
		image: "https://okhosting.com/wp-content/uploads/2019/01/java.jpg",
		title: "Java",
		description: "Un lenguaje de programación orientado a objetos que es popular en el desarrollo de aplicaciones empresariales, móviles (Android) y sistemas escalables.",
	},
	{
		image: "https://contentstatic.techgig.com/photo/117361179/why-every-c-developer-should-give-rust-programming-language-a-try.jpg?26732",
		title: "Rust",
		description: "Un lenguaje moderno enfocado en seguridad y rendimiento, diseñado para evitar errores de memoria y facilitar la programación concurrente. Es una alternativa eficiente a C y C++ en el desarrollo de sistemas.",

	}
];

function Home() {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto mb-5">
							<Card key={index} cards={card} />
						</div>
					))};
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;