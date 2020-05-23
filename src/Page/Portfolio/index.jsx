import React, { useEffect, useCallback, useState } from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router-dom'

import { Header, Footer } from '../../Component'

import './style.scss'

const Portfolio = props => {
  const history = useHistory()
	const { view } = props
  const base = [
    {
      id: "01",
      title: "Picasso Studio",
      desc: "Студия интерьерного дизайна",
      link: "http://artprokofyev.art/",
      prev: "../../portfolio/prev/picasso_studio.jpg",
      file: "../../portfolio/picasso-min.jpg"
    },
    {
      id: "02",
      title: "Rec Hustle",
      desc: "Продакшн студи полного цикла/Узбекистан",
      prev: "../../portfolio/prev/rec_hustle.jpg",
      link: "http://redhustle.uz/",
      file: "../../portfolio/rechustle-min.jpg"
    },
    /* {
      id: "03",
      title: "Бизнес-блог",
      desc: "",
      link: "https://itd.company",
      file: "../../portfolio/busenisblog-min.jpg"
    }, */
    {
      id: "03",
      title: "КупиМама",
      desc: "Интернет-магазин детских товаров",
      prev: "../../portfolio/prev/kupimama.jpg",
      link: "http://xn--80aawhlbr5a.com/",
      file: "../../portfolio/kupimama-min.jpg"
    },
    {
      id: "04",
      title: "Мария Семенова",
      desc: "Сайт-визитка услуги визажа/Дубай",
      prev: "../../portfolio/prev/mary.jpg",
      link: "http://mariyasemenova.eu/",
      file: "../../portfolio/mary-min.jpg"
    },
    {
      id: "05",
      title: "Металл Донбасса",
      desc: "Корпоративный сайт",
      prev: "../../portfolio/prev/metaldon.jpg",
      link: "https://itd.company",
      file: "../../portfolio/metaldon-min.jpg"
    },
    {
      id: "06",
      title: "Нероли",
      desc: "Салон косметики и парфюмерии",
      prev: "../../portfolio/prev/neroly.jpg",
      link: "https://itd.company",
      file: "../../portfolio/neroli-min.jpg"
    },
    {
      id: "07",
      title: "Промо-сайт конференции SAY-IT",
      desc: "Шаблон",
      prev: "../../portfolio/prev/sayit.jpg",
      link: "https://itd.company",
      file: "../../portfolio/sayit-min.jpg"
    },
    /* {
      id: "09",
      title: "Промо-сайт продуктовый магазин",
      desc: "",
      link: "https://itd.company",
      file: "../../portfolio/product-min.jpg"
    }, */
    {
      id: "08",
      title: "Rykhlova Accessorise",
      desc: "Одностраничный сайт для производителя аксессуаров",
      prev: "../../portfolio/prev/rykhlova.jpg",
      link: "http://rykhlova.com/",
      file: "../../portfolio/ruklova-min.jpg"
    },
    /* {
      id: "11",
      title: "Торгэкспорт",
      desc: "",
      link: "https://itd.company",
      file: "../../portfolio/torgex-min.jpg"
    }, */
  ]
  const [ port, setPort ] = useState(null)
  const handleClose = useCallback(() => {
    history.push("/portfolio")
    window.scrollTo(0, 0)
    setPort(null)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const openPortfolio = base.filter(item => item.title === port)
  return (
		<>
			<Helmet>
				<title>ITD Company - Портфолио</title>
				<meta name='description' content='Страница сайта - Портфолио' />
			</Helmet>
			{!view && (<><Header />
			<section className='portfolio_cases_screen'>
				<div className='wrapper'>
					<div className='portfolio_cases_container'>
						<div style={{ width: "100%" }}>
							<div className='gradient_title'>
								<h2>Портфолио</h2>
							</div>
						</div>
						{base &&
							base.map((item, id) => (
                <article key={id} style={{background: `url(${item.prev})`}} onClick={() => {
                  setPort(item.title)
                  window.scrollTo(0, 0)
                }}>
									<Link to={`/portfolio/${item.title}`}>
										<div className='case_number'>{item.id}</div>
										<div className='portfolio_description_container'>
											<h4 className='portfolio_case_title'>{item.title}</h4>
											<div className='description'>{item.desc}</div>
										</div>
									</Link>
								</article>
							))}
					</div>
				</div>
			</section>
			<Footer /></>)}
			{view && (
				<section className='portfolio_form'>
					<img
						src='../../img/close_form.png'
						alt=''
            id='close_portfolio_form'
            onClick={() => handleClose()}
          />
          {openPortfolio && openPortfolio.map(item => (
            <div key={item.id}><button id='go_to_site'>
              <a href={item.link}>Website</a>
            </button>
            <div className='portfolio_form_container'>
              <img key={item.title} src={`${item.file}`} alt={item.title} />
              {/* <img src='../../img/portfolio_1.png' alt='' /> */}
            </div></div>
          ))}
          <Footer />
        </section>
			)}
		</>
	)
}

export default withRouter(Portfolio)
