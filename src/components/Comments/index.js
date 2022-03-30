import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const bgColorClassName = `initial ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialBgColor: bgColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onClickDeleteButton = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="main-comments-container">
        <h1 className="main-heading">Comments</h1>
        <div className="top-section-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
          <form
            className="comments-inputs-container"
            onSubmit={this.onClickAddButton}
          >
            <p className="question">Say something about 4.0 Technologies</p>
            <input
              value={name}
              type="text"
              className="input-element"
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <br />

            <textarea
              cols="44"
              rows="10"
              value={comment}
              className="textarea-element"
              placeholder="Your Comment"
              onChange={this.onChangeComment}
            >
              {comment}
            </textarea>
            <br />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="hr" />
        <div>
          <p className="comments">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="comments-list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                onClickLikeButton={this.onClickLikeButton}
                eachComment={eachComment}
                onClickDeleteButton={this.onClickDeleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
