import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { Helmet } from "react-helmet"

import { Header, Footer } from "../../Component"

const SubService = props => {
	const [items, setItems] = useState(null)
	const base = [
		{
			id: 1,
			title: "Фирменный стиль",
			body:
				"У каждой компании существует свой фирменный стиль. Он необходим для того, чтобы люди быстрее узнавали ту или иную компанию (организацию). Также наличие фирменного стиля может привлечь большое количество новых клиентов. Поэтому он должен быть безупречен.",
			text1:
				"Что же является фирменным стилем? Фирменный стиль — набор визуальных компонентов, с которыми ассоциируется предприятие. Это могут быть различные графические элементы, шрифты, логотипы. Известно, что большинство людей узнают об организациях в Интернете (сети Интернет), на различных сайтах. Таким образом, сайт должен соответствовать предприятию, поэтому дизайнеры и разработчики должны тщательно продумать каждую деталь. Какие же правила существуют для создания дизайна успешного сайта?",
			text2:
				`1. Начальным моментом в разработке фирменного сайта является создание логотипа. Он должен быть читабельным, состоять из приятной гаммы цветов и традиционных шрифтов; 2. Спектр цветов на сайте должен соответствовать бренду, так как бренд могут узнавать именно по цвету. Чтобы сайт был привлекательным нужно использовать не более 3-4 цветов (менее 4 цветов на сайте); 3. Набор шрифтов должен сочетаться с логотипом и цветовой гаммой. Не нужно использовать более 2 видов шрифтов.  Использование фирменного стиля позволяет создать привлекательный образ компании, повысить ее популярность за счет узнаваемых элементов аудиторией, а также за счет фирменного стиля повысить запоминаемость. Фирменный стиль улучшает рекламу компании, поэтому выведение (вывод) на рынок товаров становится дешевле. Если Вы желаете, чтобы сайт имел брендовый web-дизайн, то мы советуем обратиться именно в нашу веб-студию. Мы анализируем каждую компанию и создаем сайты с фирменным стилем, опираясь на желания заказчиков и правила создания дизайна. Разработать фирменный стиль для наших специалистов не составит труда, ведь они следят за новыми тенденциями не только в сфере web-разработки, но и в любых отраслях в целом.`,
		},
	]

	useEffect(() => {
		if (!items) {
			const bases = base.filter(item => item.id === 1)
			setItems(bases[0])
		}
		/*return () => {
      setItems(null)
    }*/
	}, [setItems])
	window.items = items
	return (
		<>
			<Helmet>
				<title>ITD Company - Услуги</title>
				<meta name='description' content={`Страница сайта - Услуги`} />
			</Helmet>
			<Header />
			<section className='subservices_screen'>
				<div className='wrapper'>
					<div className='services_container'>
						<div className='gradient_title'>
              <h2>{items && items.title}</h2>
						</div>
						<div className='shift_description'>
							{items && items.body}
						</div>
					</div>
				</div>
			</section>
			<section className='subservices_description_container'>
				<div className='wrapper'>
					<div className='subservices_description'>
						<img src='../img/firm_style1.png' alt='' />
						<div className='description_text'>
							<p>
								{items && items.text1}
							</p>
						</div>
					</div>

					<div className='subservices_description'>
						<img src='../img/firm_style2.png' alt='' />
						<div className='description_text'>
							<p dangerouslySetInnerHTML={{__html: items}} />
              <p>
								{items && items.text2}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='index_contacts index_contacts_light'>
				<div className='wrapper'>
					<h2>
						Оставьте заявку <br /> и мы с Вами свяжемся!
					</h2>
					<form action=''>
						<div className='index_input_container'>
							<input
								type='text'
								className='index_contacts_input'
								placeholder='Имя'
								required
							/>
							<input
								type='tel'
								className='index_contacts_input error_input'
								placeholder='Телефон (WhatsApp/Viber)'
								required
							/>
							<input
								type='email'
								className='index_contacts_input'
								placeholder='Email'
								required
							/>
						</div>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Ваше сообщение'
							required
						></textarea>
						<div className='error_form_msg'>
							JF sdf sdf sdomvsd mosld sdflmdsfm!
						</div>
						<button type='submit'>Отправить</button>
					</form>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default withRouter(SubService)
