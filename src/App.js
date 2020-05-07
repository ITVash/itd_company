import React from "react"
import { Switch, Route } from 'react-router-dom'

import { Home, About, TypeSite, Services, SubService } from './Page'

const App = () => {
	return (
		<div className='App'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/type-site" component={TypeSite} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:id" component={SubService} />
      </Switch>
		</div>
	)
}

export default App
