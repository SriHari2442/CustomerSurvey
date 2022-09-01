import {Route, Switch} from 'react-router-dom'

import ReviewsCarousel from './components/ReviewsCarousel'
import CustomerSurvey from './components/CustomerSurvey'
import EndCredits from './components/EndCredits'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={CustomerSurvey} />
    <Route exact path="/started" component={ReviewsCarousel} />
    <Route exact path="/closed" component={EndCredits} />
  </Switch>
)

export default App
