import React, { useState, useEffect, useCallback } from "react"
import { Helmet } from "react-helmet"
import classNames from "classnames"
import Toggle from "react-slide-toggle"

import { Header, Footer } from "../../Component"

import "./style.scss"

const TypeSite = () => {
	const [check, setCheck] = useState(false)
	const [mobi, setMobi] = useState(false)
	const [desc, setDesc] = useState({
		promo: true,
		is: false,
		sv: false,
		sp: false,
		one: false,
		cs: false,
		lan: false,
		blog: false,
		port: false,
	})
	const [list, setList] = useState({
		list1: [],
		list1Text: '',
		list2: [],
		list2Text:'',
		list3: [],
		list3Text: '',
		list4: []
	})
	window.check = list
	const maping = new Map([{
		list1: [],
		list1Text: '',
		list2: [],
		list2Text:'',
		list3: [],
		list3Text: '',
		list4: []
	}])
	let obj = {
		list1: [],
		list1Text: '',
		list2: [],
		list2Text:'',
		list3: [],
		list3Text: '',
		list4: []
	}
	window.checkM = obj
	const slider = () => {
		const types = document.querySelectorAll(".types_item")
		types.forEach((items, id) => {
			items.addEventListener("click", () => {
				if (window.innerWidth <= 800) {
					setMobi(true)
				} else {
					setMobi(false)
				}
			})
		})

		let index = 0
		const slides = document.querySelectorAll(".clickbait_slide")
		let length = slides.length
		for (let i = 0; i < length; i++) {
			let offset = i * 100 + "%"
			slides.item(i).style.left = offset
		}
		if (check)
			document.querySelector("#number_of_slide").textContent =
				"0" + (index + 1) + "/" + length + ""
		const nextSlide = document.querySelector("#next_slide")
		const prevSlide = document.querySelector("#prev_slide")
		if (check)
			nextSlide.addEventListener("click", () => {
				index++
				prevSlide.classList.remove("disable")
				if (index >= length - 1) {
					nextSlide.classList.add("disable")
					document.querySelector("#slider_title").textContent =
						"Отлично! Остался последний шаг. Оставьте нам ваши контакты и мы с вами связажемся"
				}
				if (index > length - 1) {
					index--
				}
				slides.forEach((item, id) => {
					let offset = (id - index) * 100 + "%"
					item.style.transition = "all .500s linear"
					setTimeout(() => (item.style.left = offset), 1)
				})
				document.querySelector("#number_of_slide").textContent =
					"0" + (index + 1) + "/" + length + ""
			})
		if (check)
			prevSlide.addEventListener("click", () => {
				index--
				nextSlide.classList.remove("disable")
				document.querySelector("#slider_title").textContent =
					"Ответьте на несколько вопросов и получите информацию о заказе"
				if (index <= 0) {
					prevSlide.classList.add("disable")
				}
				if (index < 0) {
					index++
				}
				slides.forEach((item, id) => {
					let offset = (id - index) * 100 + "%"
					item.style.transition = "all .500s linear"
					setTimeout(() => (item.style.left = offset), 1)
				})
				document.querySelector("#number_of_slide").textContent =
					"0" + (index + 1) + "/" + length + ""
			})
	}
	useEffect(() => {
		slider()
	}, [slider])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>ITD Company - Типы сайтов</title>
				<meta name='description' content='Страница сайта - Типы сайтов' />
			</Helmet>
			<Header />
			<div className='index_contacts_light'>
				<div className='wrapper'>
					<div className='services_container '>
						<div className='gradient_title'>
							<h2>Типы сайтов</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='index_contacts_light'>
				<div className='wrapper types_site_container'>
					<div className='types'>
						<ul>
							<li
								className={classNames("types_item", { active: desc.promo })}
								onClick={() => {
									setDesc({
										promo: true,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t1.png'
													alt=''
													className='type_icon'
												/>
												<p>Промо-сайт</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Промо-сайт</b> — уникальный веб-ресурс,
														необходимый для представления и продвижения
														какого-либо продукта или услуги. Зачастую такие
														сайты создаются для проведения рекламной компании.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Информация изложена кратко и четко; Система
															управления сайтом проста в использовании
														</li>
														<li>
															- Особое внимание выделяется крупным изображениям;
															Упор такого сайта делается на графическую
															составляющую (демо-ролики, презентации,
															флеш-анимацию)
														</li>
														<li>
															- Может содержать в себе большое количество
															интерактивных элементов и инфографики; Запускается
															параллельно с оффлайн рекламой
														</li>
														<li>
															-Ограниченный функционал. Большая посещаемость,
															что отражается в поисковой выдаче, и поэтому
															рекламируемый товар получает большую популярность.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Для представителей бизнеса, которые презентуют
															новый продукт или услугу; Магазинам, если в вашем
															магазине проводится масштабная акция или вы
															желаете продвинуть новый товар.
														</li>
														<li>
															- Крупным организациям, планирующим проведение
															крупномасштабных акций или мероприятий. Людям,
															запускающим сезонную акцию, распродажу
														</li>
														<li>
															- Предпринимателям, которые хотят начать свой
															бизнес в интернете. Предпринимателям, продвигающим
															какие-либо мероприятия;
														</li>
														<li>- Компаниям, улучшающим свою репутацию.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.is })}
								onClick={() => {
									setDesc({
										promo: false,
										is: true,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t2.png'
													alt=''
													className='type_icon'
												/>
												<p> Интернет-магазин</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Интернет-магазин</b> - веб сервис, рекламирующий
														товар или услугу и предоставляющий возможность
														совершить покупку или продажу.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Удобство покупок из любого удобного места
															Наличие личного кабинета;
														</li>
														<li>
															- Возможность подключения онлайн оплаты
															Подключение платежной системы;
														</li>
														<li>
															- Возможность гибко выстраивать цены на продукцию,
															проводить акции. Есть возможность устанавливать
															разную стоимость продукции, скидки, акции;
														</li>
														<li>
															- Выбор доставки в удобное для вас место в удобное
															время. Существуют сервисы для статистики и
															анализа.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Розничным магазинам, желающим начать бизнес по
															продаже своих товаров. Компаний, планирующим вести
															продажи через сеть Интернет;
														</li>
														<li>
															- Оптовым магазинам, желающим начать
															автоматизированную торговлю в интернете.
															Торговцев, которые планируют увеличить продажи.
														</li>
														<li>
															- Предпринимателям большим и малым, которые хотят
															вывести свой бизнес в онлайн.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.sv })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: true,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Сайт-визитка</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Сайт-визитка</b> - сайт, в который может входить
														одна или нескольких страниц. Такой вид ресурса
														необходим для изложения важной информации об
														организации, частном лице, товарах или услугах.
														Обычно это бывают контактные данные, описание
														продукции или услуги.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Привлечение новых клиентов при небольших
															затратах. Подробная информация о товаре/услуги,
															компании, частном лице;
														</li>
														<li>
															- Организации различных уровней могут выставить
															свои товары и услуги большому количеству людей,
															которые пользуются интернетом Небольшое количество
															страниц;
														</li>
														<li>
															- Возможность простой корректировки данных на
															страницах сайта. Ограниченный функционал
														</li>
														<li>- Недорогая цена заказа такого сайта.</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Небольшим организациям с фиксированным перечнем
															продукции или услуг, не требующих функций
															интернет-магазина. Для организаций,
															предпринимателей, предоставляющих свою продукцию
															или услуги.
														</li>
														<li>
															- Людям творческих профессий, которые хотят
															представить свое портфолио в интернете, информацию
															о себе и своих услугах.
														</li>
														<li>
															- Частным лицам. В том случае если вам необходим
															персональный сайт, чтобы другие могли прочитать о
															вас или посмотреть ваши фотографии.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.sp })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: true,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t4.png'
													alt=''
													className='type_icon'
												/>
												<p>Сайт-портфолио</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Сайт-портфолио</b> - сайт, предназначенный для
														презентации каких-либо навыков, работ компании или
														частного лица. Может состоять из одной или
														нескольких страниц
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Дизайн сайта может характеризовать деятельность
															владельца. Краткая информация о компании или
															частном лице;
														</li>
														<li>
															- Удобство наполнения контентом
															(видео,фото,аудио). Представление навыков и работ
															организации
														</li>
														<li>
															- Привлечение внимания на свои работы. Простой
															дизайн;
														</li>
														<li>
															- Демонстрирование навыков владельца. Множество
															изображений.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Для творческих людей – фотографов, видео
															операторов, писателей, дизайнеров. Для
															организаций, представляющих свои работы аудитории;
														</li>
														<li>
															- Людям не творческих профессий – строители,
															мастера различных отделочных работ. Для людей
															разных профессий, желающих показать результат
															собственных навыков.
														</li>
														<li>- Для просто креативных людей.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.one })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: true,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t5.png'
													alt=''
													className='type_icon'
												/>
												<p>Одностраничник</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Одностаничник</b> - сайт, состоящий исключительно
														из одной страницы. Предназначен для привлечения
														клиентов и оказания каких-либо услуг.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Интересный и удобный дизайн. Состоит из одной
															страницы;
														</li>
														<li>
															- Возможное использование 3D. графикиМожет
															содержать контент на любую тематику;
														</li>
														<li>
															- Подталкивает к целевому действию, например,
															совершить заказ, или звонок, оставить данные для
															обратной связи. Крупные изображения;
														</li>
														<li>
															- Привлекает подписчиков на какой-то конкретный
															ресурс.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Для людей или компаний, которые хотят впечатлить
															посетителя своим сайтом, предоставить ему немного
															информации. Для предпринимателей и организаций,
															которые представляют свои услуги и продукцию;
														</li>
														<li>
															- Для компаний, которые хотят привести посетителей
															к совершению заказа. Для людей, которые желают
															предоставить информацию о каком-либо мероприятии
															или обзор.
														</li>
														<li>
															- Небольшим компаниям, которые хотят привлечь
															внимание к своей деятельности. (Как рекламная
															листовка).
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.cs })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: true,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t6.png'
													alt=''
													className='type_icon'
												/>
												<p>Корпоративный сайт</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Корпоративный сайт</b> - сайт, необходимый для
														представления компании. Такие сайты должны
														заинтересовать посетителей, чтобы они обращались
														именно в ту компанию, которую сайт представляет.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Визитная карточка компании или фирмы, которая им
															владеет. Наличие CRM-системы;
														</li>
														<li>
															- Уникальный и запоминающийся дизайн в фирменном
															стиле.
														</li>
														<li>
															- Привлечение новых партнеров. Наличие баз знаний;
														</li>
														<li>
															- Наличие сервиса поддержки клиентов (Онлайн
															помощь от представителя или горячая линия).
															Аутентификация. Общий доступ к сервисам;
														</li>
														<li>
															- Публикация новых линеек товаров или новостей
															бренда или компании.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Крупным или небольшим компаниям, которые хотят
															привлечь новых партнеров для бизнеса.
														</li>
														<li>
															- Компаниям, повышающим интерес к бренду или
															продукции посредством сети Интернет. Для компаний,
															желающих повысить свою популярность и предоставить
															больше информации о своей организации.
														</li>
														<li>
															- Брендам или компаниям, ведущим свою работу с
															сотрудниками удаленно через интранет.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.lan })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: true,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t7.png'
													alt=''
													className='type_icon'
												/>
												<p>Лендинг</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Landing page</b> - продающий сайт, состоящий из
														одной или двух страниц только из одной страницы.
														Обычно сайт такого вида используют в рекламных
														целях, где кратко представлена информация об услуге,
														товаре или мероприятии.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Интеграция красивой анимации. Landing page
															состоит исключительно из одной страницы;
														</li>
														<li>
															- Кнопки и текст, призывающий к действию.
															Ограниченный функционал;
														</li>
														<li>
															- Вся необходимая информация о товаре/услуге или
															мероприятии в месте, которое посетитель увидит в
															первые секунды. Крупные изображения.
														</li>
														<li>
															- Интересная навигация, основанная на якорной
															системе.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Для людей творческих профессий, если они хотят
															уникальным образом представить информацию о себе и
															своих услугах. Для компаний или частных лиц,
															рекламирующих товар или услугу;
														</li>
														<li>
															- Для компаний или общественных организаций,
															проводящих или организовывающих мероприятия. Для
															организаторов мероприятий.
														</li>
														<li>- Для магазинов, продвигающих новый товар.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.blog })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: true,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Блог</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Блог</b> - веб-ресурс, содержащий записи с
														текстом или мультимедиа. Отличительной особенностью
														блога от других сайтов является то, что записи или
														статьи (статьи-обзоры) обычно добавляются
														публикуются регулярно.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Возможность обратной связи и отклика на
															информацию. Содержат подробную информацию;
														</li>
														<li>
															- Шире возможности нежели, в социальных сетях.
															Может содержать личные данные;
														</li>
														<li>
															- Информация представлена на сайте понятным
															«человеческим» языком. Регулярное добавление
															данных в виде постов.
														</li>
														<li>
															- У блогов всегда больше постоянных посетителей,
															чем у простого сайта.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Авторам, в различных отраслях жизни, которые
															делятся с людьми опытом своей жизни и работы. Для
															компаний и частных лиц, которые желают повысить
															свой рейтинг и популярность;
														</li>
														<li>
															- Людям, являющимся специалистами в определенном
															деле, и которые хотят рассказать о своей
															деятельности. Для организаций и частных лиц,
															которые делают обзор на товары, услуги,
															мероприятия.
														</li>
														<li>- Обзорщикам различных товаров.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.port })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: true,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Портал</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Веб-портал</b> - сайт, который предоставляет
														пользователю различные интерактивные
														интернет-сервисы, которые работают в рамках этого
														сайта. Веб-портал может состоять из нескольких
														сайтов. Также порталы функционируют как точки
														доступа к информации в интернете или сайты, которые
														помогают пользователям в поиске нужной информации.
														Такие порталы представляют информацию из различных
														источников в единообразном виде. Иногда их называют
														навигационными сайтами.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- Предназначены для самой широкой аудитории.
															Наличие описаний, изображений, мультимедиа в
															больших количествах;
														</li>
														<li>
															- Могут быть общедоступными или корпоративными.
															Предусматривает Ссылки на другие сервисы;
														</li>
														<li>
															- Очень полезны для корпоративной сферы благодаря,
															своей функциональности.
														</li>
														<li>
															- Интеграция различных приложений или клиентов для
															бизнеса Business-to-employees. Простой дизайн
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- Предназначены для сотрудников, клиентов и
															партнеров одного предприятия. Для частных лиц,
															компаний, распространяющие сервисы определенной
															тематики.
														</li>
														<li>
															- Для специфических видов рынка и обслуживаемого
															аудиторию, пользующуюся услугами этого рынка или
															работающую на нем Business-to-consumer
														</li>
														<li>
															- Для крупных предприятий и информационных
															агенств.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/img/ti1.png' alt='' />
													</a>
													<a href='#'>
														<img src='/img/ti2.png' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
						</ul>
						<button id='view_check_list' onClick={() => setCheck(true)}>
							Заполнить чек-лист
						</button>
					</div>
					<div id='type_description_container'>
						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.promo },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Промо-сайт</b> — уникальный веб-ресурс, необходимый для
									представления и продвижения какого-либо продукта или услуги.
									Зачастую такие сайты создаются для проведения рекламной
									компании.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Информация изложена кратко и четко; Система управления
										сайтом проста в использовании
									</li>
									<li>
										- Особое внимание выделяется крупным изображениям; Упор
										такого сайта делается на графическую составляющую
										(демо-ролики, презентации, флеш-анимацию)
									</li>
									<li>
										- Может содержать в себе большое количество интерактивных
										элементов и инфографики; Запускается параллельно с оффлайн
										рекламой
									</li>
									<li>
										-Ограниченный функционал. Большая посещаемость, что
										отражается в поисковой выдаче, и поэтому рекламируемый товар
										получает большую популярность.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Для представителей бизнеса, которые презентуют новый
										продукт или услугу; Магазинам, если в вашем магазине
										проводится масштабная акция или вы желаете продвинуть новый
										товар.
									</li>
									<li>
										- Крупным организациям, планирующим проведение
										крупномасштабных акций или мероприятий. Людям, запускающим
										сезонную акцию, распродажу
									</li>
									<li>
										- Предпринимателям, которые хотят начать свой бизнес в
										интернете. Предпринимателям, продвигающим какие-либо
										мероприятия;
									</li>
									<li>- Компаниям, улучшающим свою репутацию.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.is },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Интернет-магазин</b> - веб сервис, рекламирующий товар или
									услугу и предоставляющий возможность совершить покупку или
									продажу.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Удобство покупок из любого удобного места Наличие личного
										кабинета;
									</li>
									<li>
										- Возможность подключения онлайн оплаты Подключение
										платежной системы;
									</li>
									<li>
										- Возможность гибко выстраивать цены на продукцию, проводить
										акции. Есть возможность устанавливать разную стоимость
										продукции, скидки, акции;
									</li>
									<li>
										- Выбор доставки в удобное для вас место в удобное время.
										Существуют сервисы для статистики и анализа.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Розничным магазинам, желающим начать бизнес по продаже
										своих товаров. Компаний, планирующим вести продажи через
										сеть Интернет;
									</li>
									<li>
										- Оптовым магазинам, желающим начать автоматизированную
										торговлю в интернете. Торговцев, которые планируют увеличить
										продажи.
									</li>
									<li>
										- Предпринимателям большим и малым, которые хотят вывести
										свой бизнес в онлайн.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.sv },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Сайт-визитка</b> - сайт, в который может входить одна или
									нескольких страниц. Такой вид ресурса необходим для изложения
									важной информации об организации, частном лице, товарах или
									услугах. Обычно это бывают контактные данные, описание
									продукции или услуги.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Привлечение новых клиентов при небольших затратах.
										Подробная информация о товаре/услуги, компании, частном
										лице;
									</li>
									<li>
										- Организации различных уровней могут выставить свои товары
										и услуги большому количеству людей, которые пользуются
										интернетом Небольшое количество страниц;
									</li>
									<li>
										- Возможность простой корректировки данных на страницах
										сайта. Ограниченный функционал
									</li>
									<li>- Недорогая цена заказа такого сайта.</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Небольшим организациям с фиксированным перечнем продукции
										или услуг, не требующих функций интернет-магазина. Для
										организаций, предпринимателей, предоставляющих свою
										продукцию или услуги.
									</li>
									<li>
										- Людям творческих профессий, которые хотят представить свое
										портфолио в интернете, информацию о себе и своих услугах.
									</li>
									<li>
										- Частным лицам. В том случае если вам необходим
										персональный сайт, чтобы другие могли прочитать о вас или
										посмотреть ваши фотографии.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.sp },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Сайт-портфолио</b> - сайт, предназначенный для презентации
									каких-либо навыков, работ компании или частного лица. Может
									состоять из одной или нескольких страниц
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Дизайн сайта может характеризовать деятельность владельца.
										Краткая информация о компании или частном лице;
									</li>
									<li>
										- Удобство наполнения контентом (видео,фото,аудио).
										Представление навыков и работ организации
									</li>
									<li>
										- Привлечение внимания на свои работы. Простой дизайн;
									</li>
									<li>
										- Демонстрирование навыков владельца. Множество изображений.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Для творческих людей – фотографов, видео операторов,
										писателей, дизайнеров. Для организаций, представляющих свои
										работы аудитории;
									</li>
									<li>
										- Людям не творческих профессий – строители, мастера
										различных отделочных работ. Для людей разных профессий,
										желающих показать результат собственных навыков.
									</li>
									<li>- Для просто креативных людей.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.one },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Одностаничник</b> - сайт, состоящий исключительно из одной
									страницы. Предназначен для привлечения клиентов и оказания
									каких-либо услуг.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Интересный и удобный дизайн. Состоит из одной страницы;
									</li>
									<li>
										- Возможное использование 3D. графикиМожет содержать контент
										на любую тематику;
									</li>
									<li>
										- Подталкивает к целевому действию, например, совершить
										заказ, или звонок, оставить данные для обратной связи.
										Крупные изображения;
									</li>
									<li>
										- Привлекает подписчиков на какой-то конкретный ресурс.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Для людей или компаний, которые хотят впечатлить
										посетителя своим сайтом, предоставить ему немного
										информации. Для предпринимателей и организаций, которые
										представляют свои услуги и продукцию;
									</li>
									<li>
										- Для компаний, которые хотят привести посетителей к
										совершению заказа. Для людей, которые желают предоставить
										информацию о каком-либо мероприятии или обзор.
									</li>
									<li>
										- Небольшим компаниям, которые хотят привлечь внимание к
										своей деятельности. (Как рекламная листовка).
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.cs },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Корпоративный сайт</b> - сайт, необходимый для
									представления компании. Такие сайты должны заинтересовать
									посетителей, чтобы они обращались именно в ту компанию,
									которую сайт представляет.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Визитная карточка компании или фирмы, которая им владеет.
										Наличие CRM-системы;
									</li>
									<li>
										- Уникальный и запоминающийся дизайн в фирменном стиле.
									</li>
									<li>- Привлечение новых партнеров. Наличие баз знаний;</li>
									<li>
										- Наличие сервиса поддержки клиентов (Онлайн помощь от
										представителя или горячая линия). Аутентификация. Общий
										доступ к сервисам;
									</li>
									<li>
										- Публикация новых линеек товаров или новостей бренда или
										компании.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Крупным или небольшим компаниям, которые хотят привлечь
										новых партнеров для бизнеса.
									</li>
									<li>
										- Компаниям, повышающим интерес к бренду или продукции
										посредством сети Интернет. Для компаний, желающих повысить
										свою популярность и предоставить больше информации о своей
										организации.
									</li>
									<li>
										- Брендам или компаниям, ведущим свою работу с сотрудниками
										удаленно через интранет.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.lan },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Landing page</b> - продающий сайт, состоящий из одной или
									двух страниц только из одной страницы. Обычно сайт такого вида
									используют в рекламных целях, где кратко представлена
									информация об услуге, товаре или мероприятии.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Интеграция красивой анимации. Landing page состоит
										исключительно из одной страницы;
									</li>
									<li>
										- Кнопки и текст, призывающий к действию. Ограниченный
										функционал;
									</li>
									<li>
										- Вся необходимая информация о товаре/услуге или мероприятии
										в месте, которое посетитель увидит в первые секунды. Крупные
										изображения.
									</li>
									<li>
										- Интересная навигация, основанная на якорной системе.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Для людей творческих профессий, если они хотят уникальным
										образом представить информацию о себе и своих услугах. Для
										компаний или частных лиц, рекламирующих товар или услугу;
									</li>
									<li>
										- Для компаний или общественных организаций, проводящих или
										организовывающих мероприятия. Для организаторов мероприятий.
									</li>
									<li>- Для магазинов, продвигающих новый товар.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.blog },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Блог</b> - веб-ресурс, содержащий записи с текстом или
									мультимедиа. Отличительной особенностью блога от других сайтов
									является то, что записи или статьи (статьи-обзоры) обычно
									добавляются публикуются регулярно.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Возможность обратной связи и отклика на информацию.
										Содержат подробную информацию;
									</li>
									<li>
										- Шире возможности нежели, в социальных сетях. Может
										содержать личные данные;
									</li>
									<li>
										- Информация представлена на сайте понятным «человеческим»
										языком. Регулярное добавление данных в виде постов.
									</li>
									<li>
										- У блогов всегда больше постоянных посетителей, чем у
										простого сайта.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Авторам, в различных отраслях жизни, которые делятся с
										людьми опытом своей жизни и работы. Для компаний и частных
										лиц, которые желают повысить свой рейтинг и популярность;
									</li>
									<li>
										- Людям, являющимся специалистами в определенном деле, и
										которые хотят рассказать о своей деятельности. Для
										организаций и частных лиц, которые делают обзор на товары,
										услуги, мероприятия.
									</li>
									<li>- Обзорщикам различных товаров.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.port },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Веб-портал</b> - сайт, который предоставляет пользователю
									различные интерактивные интернет-сервисы, которые работают в
									рамках этого сайта. Веб-портал может состоять из нескольких
									сайтов. Также порталы функционируют как точки доступа к
									информации в интернете или сайты, которые помогают
									пользователям в поиске нужной информации. Такие порталы
									представляют информацию из различных источников в
									единообразном виде. Иногда их называют навигационными сайтами.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- Предназначены для самой широкой аудитории. Наличие
										описаний, изображений, мультимедиа в больших количествах;
									</li>
									<li>
										- Могут быть общедоступными или корпоративными.
										Предусматривает Ссылки на другие сервисы;
									</li>
									<li>
										- Очень полезны для корпоративной сферы благодаря, своей
										функциональности.
									</li>
									<li>
										- Интеграция различных приложений или клиентов для бизнеса
										Business-to-employees. Простой дизайн
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- Предназначены для сотрудников, клиентов и партнеров одного
										предприятия. Для частных лиц, компаний, распространяющие
										сервисы определенной тематики.
									</li>
									<li>
										- Для специфических видов рынка и обслуживаемого аудиторию,
										пользующуюся услугами этого рынка или работающую на нем
										Business-to-consumer
									</li>
									<li>- Для крупных предприятий и информационных агенств.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/img/ti1.png' alt='' />
								</a>
								<a href='#'>
									<img src='/img/ti2.png' alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{check && (
				<section className='clickbait_container'>
					<img
						src='/img/close_form.png'
						alt=''
						id='clickbait_close'
						onClick={() => setCheck(false)}
					/>
					<button id='next_slide'></button>
					<button id='prev_slide' className='disable'></button>
					<div id='number_of_slide'></div>

					<div className='slider_wrapper'>
						<h3 id='slider_title'>
							Ответьте на несколько вопросов и получите информацию о заказе
						</h3>

						<div id='slider_body'>
							<div className='clickbait_slide'>
								<div className='question_container'>
									<h4>1. Какого типа должен быть Ваш сайт?</h4>
									<div className='answers'>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c1'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list1: list.list1.concat("Промо-сайт"),
														  })
														: setList((prev) => ({
																...prev,
																list1: prev.list1.filter(
																	(item) => item !== "Промо-сайт",
																),
														  }))
												}}
											/>
											<label htmlFor='c1' className='checkbox_label'>
												<span></span>Промо-сайт
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c2'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list1: list.list1.concat("Сайт-визитка"),
														  })
														: setList((prev) => ({
																...prev,
																list1: prev.list1.filter(
																	(item) => item !== "Сайт-визитка",
																),
														  }))
												}}
											/>
											<label htmlFor='c2' className='checkbox_label'>
												<span></span>Сайт-визитка
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c3'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list1: list.list1.concat("Корпоративный сайт"),
														  })
														: setList((prev) => ({
																...prev,
																list1: prev.list1.filter(
																	(item) => item !== "Корпоративный сайт",
																),
														  }))
												}}
											/>
											<label htmlFor='c3' className='checkbox_label'>
												<span></span>Корпоративный сайт
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c4'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list1: list.list1.concat("Интернет магазин"),
														  })
														: setList((prev) => ({
																...prev,
																list1: prev.list1.filter(
																	(item) => item !== "Интернет магазин",
																),
														  }))
												}}
											/>
											<label htmlFor='c4' className='checkbox_label'>
												<span></span>Интернет магазин
											</label>
										</div>
										<div className='my_answer'>
											<p>Свой вариант</p>
											<textarea
												name='my_answer'
												cols='30'
												rows='10'
												value={list.list1Text}
												onChange={(e) => {
													setList({
														...list,
														list1Text: e.target.value,
													})
												}}
											></textarea>
										</div>
									</div>
								</div>
							</div>

							<div className='clickbait_slide'>
								<div className='question_container'>
									<h4>2. Дополнительные языковые версии?</h4>
									<div className='answers'>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='cl1'
												name='cc1'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList(prev => ({
																...prev,
																list2: prev.list2.concat("Английский"),
														  }))
														: setList((prev) => ({
																...prev,
																list2: prev.list2.filter(
																	(item) => item !== "Английский",
																),
														  }))
												}}
											/>
											<label htmlFor='cl1' className='checkbox_label'>
												<span></span>Английский
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='cl2'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list2: list.list2.concat("Немецкий"),
														  })
														: setList((prev) => ({
																...prev,
																list2: prev.list2.filter(
																	(item) => item !== "Немецкий",
																),
														  }))
												}}
											/>
											<label htmlFor='cl2' className='checkbox_label'>
												<span></span>Немецкий
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='cl3'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list2: list.list2.concat("Французский"),
														  })
														: setList((prev) => ({
																...prev,
																list2: prev.list2.filter(
																	(item) => item !== "Французский",
																),
														  }))
												}}
											/>
											<label htmlFor='cl3' className='checkbox_label'>
												<span></span>Французский
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='cl4'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list2: list.list2.concat("Китайский"),
														  })
														: setList((prev) => ({
																...prev,
																list2: prev.list2.filter(
																	(item) => item !== "Китайский",
																),
														  }))
												}}
											/>
											<label htmlFor='cl4' className='checkbox_label'>
												<span></span>Китайский
											</label>
										</div>
										<div className='my_answer'>
											<p>Свой вариант</p>
											<textarea name='my_answer' cols='30' rows='10'
												value={list.list2Text}
												onChange={(e) => {
													setList({
														...list,
														list2Text: e.target.value,
													})
												}}
											></textarea>
										</div>
									</div>
								</div>
							</div>

							<div className='clickbait_slide'>
								<div className='question_container'>
									<h4>3. Желаемые сроки сдачи проекта:</h4>
									<div className='answers'>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c31'
												name='cc'
												className='general'
												onChange={(e) => {
													e.target.checked
														? setList({
																...list,
																list3: list.list3.concat("- до 1 месяца"),
														  })
														: setList((prev) => ({
																...prev,
																list3: prev.list3.filter(
																	(item) => item !== "- до 1 месяца",
																),
														  }))
												}}
											/>
											<label htmlFor='c31' className='checkbox_label'>
												<span></span>- до 1 месяца
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c32'
												name='cc'
												className='general'
												onChange={e => {
													e.target.checked
														? obj.list3.concat('- до 3х месяцев')
														: obj.list3.filter(item => item !== "- до 3х месяцев")
												}}
											/>
											<label htmlFor='c32' className='checkbox_label'>
												<span></span>- до 3х месяцев
											</label>
										</div>
										<div className='checkbox'>
											<input
												type='checkbox'
												id='c33'
												name='cc'
												className='general'
											/>
											<label htmlFor='c33' className='checkbox_label'>
												<span></span>- до 6 месяцев
											</label>
										</div>
										{/* <div className='checkbox'>
											<input
												type='checkbox'
												id='c34'
												name='cc'
												className='general'
											/>
											<label htmlFor='c34' className='checkbox_label'>
												<span></span>Lorem smod tempor incididunt
											</label>
										</div> */}
										<div className='my_answer'>
											<p>Свой вариант</p>
											<textarea name='my_answer' cols='30' rows='10'></textarea>
										</div>
									</div>
								</div>
							</div>

							<div className='clickbait_slide'>
								<div className='question_container'>
									<h4>4. Наличие логотипа и фирменного стиля:</h4>
									<div className='answers'>
										<div className='radiobutton'>
											<input
												type='radio'
												id='c41'
												name='cc'
												className='general'
											/>
											<label htmlFor='c41' className='checkbox_label'>
												<span></span>- Есть логотип, нет фирменного стиля
											</label>
										</div>
										<div className='radiobutton'>
											<input
												type='radio'
												id='c42'
												name='cc'
												className='general'
											/>
											<label htmlFor='c42' className='checkbox_label'>
												<span></span>- Нет логотипа, есть фирменный стиль
											</label>
										</div>
										<div className='radiobutton'>
											<input
												type='radio'
												id='c43'
												name='cc'
												className='general'
											/>
											<label htmlFor='c43' className='checkbox_label'>
												<span></span>- Нет логотипа и нет фирменного стиля
											</label>
										</div>
										<div className='radiobutton'>
											<input
												type='radio'
												id='c44'
												name='cc'
												className='general'
											/>
											<label htmlFor='c44' className='checkbox_label'>
												<span></span>- Есть логотип и фирменный стиль
											</label>
										</div>
									</div>
								</div>
							</div>

							<div className='clickbait_slide'>
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
											className='index_contacts_input'
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
										className='textarea'
										name=''
										id=''
										cols='30'
										rows='10'
										placeholder='Ваше сообщение'
										required
									></textarea>
									<div className='error_htmlForm_msg'></div>
									<button type='submit'>Отправить</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			)}
			<Footer />
		</>
	)
}

export default TypeSite
