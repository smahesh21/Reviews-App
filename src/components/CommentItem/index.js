import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, onClickDeleteButton, onClickLikeButton} = props
  const {name, comment, isLiked, date, initialBgColor, id} = eachComment
  const initial = name[0]

  const onClickLike = () => {
    onClickLikeButton(id)
  }
  const onClickDelete = () => {
    onClickDeleteButton(id)
  }

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextStyling = isLiked ? 'liked-button' : 'button'

  const postedTime = formatDistanceToNow(date)
  return (
    <li className="list-container">
      <div className="comment-section">
        <p className={initialBgColor}>{initial}</p>
        <div className="name-container">
          <div className="container">
            <h1 className="name">{name} </h1>
            <p className="time-difference">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={imageUrl} className="imagestyle" alt="like" />
          <button
            type="button"
            className={likeTextStyling}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={onClickDelete}
            className="delete-button"
            testId="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="delete"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="hr" />
    </li>
  )
}
export default CommentItem
