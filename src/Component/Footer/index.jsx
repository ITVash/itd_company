import React from "react"
import { Link } from "react-router-dom"

import "./style.scss"

const Footer = () => {
	return (
		<footer>
			<nav>
				<ul className='wrapper'>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/about'>О нас</Link>
					</li>
					<li>
						<Link to='/service'>Услуги</Link>
					</li>
					<li>
						<Link to='/portfolio'>Портфолио</Link>
					</li>
					<li>
						<Link to='/contacts'>Контакты</Link>
					</li>
				</ul>
			</nav>
			<section className='wrapper'>
				<ul>
					<li>
						<a href='#'>
							<img src='/img/soc_be.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_face.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_inst.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_tg.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_vk.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_pin.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_twit.png' alt='' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src='/img/soc_you.png' alt='' />
						</a>
					</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
