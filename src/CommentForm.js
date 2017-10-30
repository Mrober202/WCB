import React, { Component } from 'react';
import style from './style';
class CommentForm extends Component {
 constructor(props) {
 super(props);
 this.state = { author: '', image: '', rating: '', text: '' };
 this.handleAuthorChange = this.handleAuthorChange.bind(this);
 this.handleImageChange = this.handleImageChange.bind(this);
 this.handleRatingChange = this.handleRatingChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleAuthorChange(e) {
 this.setState({ author: e.target.value });
 }
 handleImageChange(e) {
 this.setState({ image: e.target.value });
 }
 handleRatingChange(e) {
 this.setState({ rating: e.target.value });
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 let author = this.state.author.trim();
 let image = this.state.image.trim();
 let rating = this.state.rating.trim();
 let text = this.state.text.trim();
 if (!text || !author) {
 return;
 }
 this.props.onCommentSubmit({ author: author, image: image, rating: rating, text: text });
 this.setState({ author: '', image: '', rating: '', text: '' });
 }
 render() {
 return (
 <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
 <input
 type='text'
 placeholder='Your name…'
 style={ style.commentFormAuthor}
 value={ this.state.author }
 onChange={ this.handleAuthorChange } />
 <input
 type='text'
 placeholder='imageUrl'
 style={ style.commentFormText}
 value={ this.state.image }
 onChange={ this.handleImageChange } />
 <input
 type='text'
 placeholder='Rating out of 5'
 style={ style.commentFormText}
 value={ this.state.rating }
 onChange={ this.handleRatingChange } />
 <input
 type='text'
 placeholder='Say something about your cake!'
 style={ style.commentFormText}
 value={ this.state.text }
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.commentFormPost }
 value='Post'/>
 </form>
 )
 }
}
export default CommentForm;