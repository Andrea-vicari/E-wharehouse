import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import newsList from '../assets/news/news.json';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';


function SinglePost() {

  // Click State logics
	var clicked = useLocation();
  let titleArt  = clicked.state
	console.log(titleArt.clicked)
  var whatClicked = titleArt.clicked;

  // Dark Ligth Logics
	const themeType = useSelector((state) => state.counter.value)
  let bgType, textType;
  themeType == "ligth" ? bgType = "" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-white"

  // Filter the JSON by The title
  var filterArticle = []

  newsList.forEach(function callback(value, index) {
    value.title == whatClicked ? filterArticle.push(value) : false
  });

  console.log(filterArticle)

	return (
	<>
  <Navbar />
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>{titleArt.clicked}</h1>
      </div>
    </div>
    <article className={"post single-post"  + " " + bgType + " " + textType}>
      <div className={"container"  + " " + bgType + " " + textType}>

          <div className="row">

              <div className="col-sm-10 mx-auto col-sm-offset-1">
                <div className='text-center py-3'>
                  <img src={filterArticle[0].bannerImg} className='img-fluid'/>
                </div>

                  <div className="post-content">

                      <h2 className="text-center fs-1">{filterArticle[0].title}</h2>

                      <p>{filterArticle[0].description}</p>

                  </div>

                  <footer className="post-footer border-top py-3">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <i className="bi bi-clock mx-2"></i>
                            {filterArticle[0].date}
                        </div>
                        <div>
                        <ul className="nav align-items-center justify-content-lg-end list-unstyled d-flex">
                          <li className="ms-3"><a className="text-primary" href="#">

                            <i className='bi bi-facebook fs-4'></i>
                            </a>
                          </li>
                          <li className="ms-3"><a className="text-primary" href="#">
                              <i className='bi bi-linkedin fs-4'></i>
                            </a>
                          </li><li className="ms-3"><a className="text-primary" href="#">
                          <i className='bi bi-instagram fs-4'></i>
                            </a>
                          </li>
                        </ul>
                        </div>
                      </div>
                  </footer>

              </div>

          </div>

      </div>
    </article>
    <Footer />

	</>
	)
}

export default SinglePost
