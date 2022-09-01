import {Link} from 'react-router-dom'

import './index.css'

const EndCredits = () => (
  <div className="app-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      alt="success"
      className="success-image"
    />
    <p>Submitted Successfully</p>
    <Link to="/">
      <button type="button" className="submit-button">
        Submit Another Response
      </button>
    </Link>
  </div>
)

export default EndCredits
