import React from "react"
import { Switch, Route } from 'react-router-dom'

import { Home, About, TypeSite, Services, SubService, Portfolio } from './Page'

const App = () => {
	return (
		<div className='App'>      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/type-site" component={TypeSite} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:id" component={SubService} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/:id" render={() => <Portfolio view />} />
      </Switch>
		</div>
	)
}

export default App
