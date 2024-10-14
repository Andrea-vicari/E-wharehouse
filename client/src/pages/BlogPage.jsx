import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import newsList from '../../src/assets/news/news.json';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';

function BlogPage() {

	const themeType = useSelector((state) => state.counter.value)

	let bgType, textType, textColor;

	themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-black"
	themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


	// Declare a fixed length excerpt
	var fixedLengthExcerpt;
	// Function shorter() to short down a long description and generate an excerpt
	// the length can be set by editing "arrayPh.length = x"
	const shorter = (phrase) => {
		let arrayPh = phrase.split(' ');
		arrayPh.length = 12;
		fixedLengthExcerpt = arrayPh.join(' ');
		return fixedLengthExcerpt
	}

	// Run shorter() and add an excerpt to each object of local newsList json
	for (let i = 0; i < newsList.length; i++) {
		shorter(newsList[i].description)
		newsList[i].fixedLengthExcerpt = fixedLengthExcerpt
	}

	return (
		<>
    		<Navbar />
			<div className='container-fluid pt-5 mt-5 bg-stripe'>
				<div className='container text-center mt-5 pb-5'>
					<h1 className='display-2 text-white text-uppercase'>Blog</h1>
				</div>
			</div>
			<div className={"container-fluid" + " " + bgType + " " + textType}>
				<div className="container py-5">
					<div className="row align-items-md-stretch">
					{newsList.map((e) => {
						   return (
						<div className="col-md-6">
							<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
								<div className="col p-4 d-flex flex-column position-static">
								<strong className="d-inline-block mb-2 text-primary-emphasis">{e.category}</strong>
								<h3 className="mb-0">{e.title}</h3>
								<div className="mb-1">{e.date}</div>
								<p className="card-text mb-auto">{e.fixedLengthExcerpt}</p>
								<Link to={`/singlepost?${e.title}`} state={{ clicked: e.title }} className="icon-link gap-1 icon-link-hover stretched-link">
									Continue reading
									<i className="bi bi-arrow-right"></i>
								</Link>
								</div>
								<div className="col-auto d-none d-lg-block">
								<img src={e.thumbImage} className='img-fluid'/>
								</div>
							</div>
						</div>
							)
					})}

					</div>
				</div>
			</div>
		<Footer />
		</>
	)
}

export default BlogPage
