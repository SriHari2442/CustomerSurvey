import {Link} from 'react-router-dom'

import './index.css'

const CustomerSurvey = () => (
  <>
    <div className="app-container">
      <h1 className="heading">Customer Survey</h1>

      <Link to="/started">
        <button type="button" className="submit-button">
          Start
        </button>
      </Link>
    </div>
  </>
)

export default CustomerSurvey
