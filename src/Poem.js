import React from "react";

class Poem extends React.Component {

  state = {
    toggleRead: false
  }

  toggleRead = () => {
    this.setState({ toggleRead: !this.state.toggleRead })
  }

  render() {

    const { title, author, content } = this.props

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
        <strong>- By {author}</strong>
        </p>
        <button onClick={this.toggleRead}>{this.state.toggleRead ? 'Mark as Unread' : 'Mark as read'}</button>
      </div>
    );
  }
}

export default Poem;
