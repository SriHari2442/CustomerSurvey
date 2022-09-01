import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

const reviewsList = [
  {
    description: 'How satisfied are you with our products?.',
    Numbers: [
      {
        id: 0,
        display: 1,
      },
      {
        id: 1,
        display: 2,
      },
      {
        id: 2,
        display: 3,
      },
      {
        id: 3,
        display: 4,
      },
      {
        id: 4,
        display: 5,
      },
    ],
  },
  {
    description: 'How fair are the prices compared to similar retailers?.',
    Numbers: [
      {
        id: 0,
        display: 1,
      },
      {
        id: 1,
        display: 2,
      },
      {
        id: 2,
        display: 3,
      },
      {
        id: 3,
        display: 4,
      },
      {
        id: 4,
        display: 5,
      },
    ],
  },
  {
    description:
      'How satisfied are you with the value for money of your purchase?.',
    Numbers: [
      {
        id: 0,
        display: 1,
      },
      {
        id: 1,
        display: 2,
      },
      {
        id: 2,
        display: 3,
      },
      {
        id: 3,
        display: 4,
      },
      {
        id: 4,
        display: 5,
      },
    ],
  },
  {
    description:
      'On a scale of 1 - 10 how would you recommend us to your friends and family?.',
    Numbers: [
      {
        id: 0,
        display: 1,
      },
      {
        id: 1,
        display: 2,
      },
      {
        id: 2,
        display: 3,
      },
      {
        id: 3,
        display: 4,
      },
      {
        id: 4,
        display: 5,
      },
    ],
  },
  {
    description: 'What could we do to improve our service?.',
    Numbers: [
      {
        id: 0,
        display: 1,
      },
      {
        id: 1,
        display: 2,
      },
      {
        id: 2,
        display: 3,
      },
      {
        id: 3,
        display: 4,
      },
      {
        id: 4,
        display: 5,
      },
    ],
  },
]

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
    isActive: false,
    isColor: false,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      if (activeReviewIndex === reviewsList.length - 2) {
        this.setState({isActive: true})
      }
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
        isColor: false,
      }))
    }
  }

  onClickReview = () => {
    this.setState(prevState => ({isColor: !prevState.isColor}))
  }

  renderActiveReview = review => {
    const {description, Numbers} = review
    const {activeReviewIndex, isColor} = this.state

    return (
      <div className="review-container">
        <div className="para-Numbers">
          <p className="description"> {activeReviewIndex + 1}. </p>
          <p className="description">{description}</p>
        </div>
        <ul className="emojis-list">
          {Numbers.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="button-shape"
                onClick={this.onClickReview}
              >
                {each.display}
              </button>
            </li>
          ))}
        </ul>
        {isColor && <p className="Review-count"> Rating Done </p>}
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
        isColor: false,
      }))
    }
  }

  render() {
    const {activeReviewIndex, isActive} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Customer Survey</h1>
        <p className="para-count">
          {activeReviewIndex + 1} / {reviewsList.length}
        </p>
        <div>{this.renderActiveReview(currentReviewDetails)}</div>
        <div className="carousel-container">
          <div>
            <button
              type="button"
              onClick={this.onClickLeftArrow}
              testid="leftArrow"
              className="prev-arrow-button"
            >
              Prev
            </button>
          </div>
          {isActive && (
            <Link to="/closed">
              <button
                type="button"
                testid="rightArrow"
                className="next-arrow-button"
              >
                Submit
              </button>
            </Link>
          )}
          <div>
            <button
              type="button"
              onClick={this.onClickRightArrow}
              testid="rightArrow"
              className="next-arrow-button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
