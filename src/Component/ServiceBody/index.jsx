import React from "react"
import { Link } from 'react-router-dom'

const ServiceBody = props => {
  const { title, img, rec, items } = props
	return (
		<div className='services_slider'>
      <h3 className='title'>{title}</h3>
			<img className='background_img' src={img} alt={title} />
			<nav>
        <div className='rectangle'>{rec}</div>
				<ul className='web_design'>
					{items && items.map((item, id) => (
						<Link key={id} to={item.link}><li><span className="number">{id+1}</span><span className="subitem">{item.item}</span></li></Link>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default ServiceBody
