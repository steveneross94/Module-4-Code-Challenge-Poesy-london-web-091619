import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        content: this.state.content
      })
    })
    .then(this.props.fetchPoems())
  }

  render() {
    console.log(this.state);
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name='title' value={this.state.value} onChange={this.handleChange}/>
        <input placeholder="Author" name='author' value={this.state.value} onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name='content' value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
