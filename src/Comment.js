import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
class Comment extends Component {
 constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 author: '',
 image: '',
 rating: '',
 text: ''
 };
 //binding all our functions to this class
 this.deleteComment = this.deleteComment.bind(this);
 this.updateComment = this.updateComment.bind(this);
 this.handleAuthorChange = this.handleAuthorChange.bind(this);
 this.handleImageChange = this.handleImageChange.bind(this);
 this.handleRatingChange = this.handleRatingChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
 }
 updateComment(e) {
 e.preventDefault();
 //brings up the update field when we click on the update link.
 this.setState({ toBeUpdated: !this.state.toBeUpdated });
 }
 handleCommentUpdate(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 //if author or text changed, set it. if not, leave null and our PUT 
 //request will ignore it.
 let author = (this.state.author) ? this.state.author : null;
 let image = (this.state.image) ? this.state.image : null;
 let rating = (this.state.rating) ? this.state.rating : null;
 let text = (this.state.text) ? this.state.text : null;
 let comment = { author: author, image: image, rating: rating, text: text};
 this.props.onCommentUpdate(id, comment);
 this.setState({
 toBeUpdated: !this.state.toBeUpdated,
 author: '',
 image: '',
 rating: '',
 text: ''
 })
 }
 deleteComment(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 this.props.onCommentDelete(id);
 console.log('oops deleted');
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 handleRatingChange(e) {
 this.setState({ rating: e.target.value });
 }
 handleImageChange(e) {
 this.setState({ image: e.target.value });
 }
 handleAuthorChange(e) {
 this.setState({ author: e.target.value });
 }
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
 return (
 <div style={ style.comment }>
 <h3>{this.props.author}</h3>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <a style={ style.updateLink } href='#' onClick={ this.updateComment }>update</a>
 <a style={ style.deleteLink } href='#' onClick={ this.deleteComment }>delete</a>
 { (this.state.toBeUpdated)
 ? (<form onSubmit={ this.handleCommentUpdate }>
 <input
 type='text'
 placeholder='Update name…'
 style={ style.commentFormAuthor }
 value={ this.state.author }
 onChange= { this.handleAuthorChange } />
 <input
 type='text'
 placeholder='Update your image'
 style= { style.commentFormText }
 value={ this.state.image }
 onChange={ this.handleImageChange } />
 <input
 type='text'
 placeholder='Update your rating'
 style= { style.commentFormText }
 value={ this.state.rating }
 onChange={ this.handleRatingChange } />
 <input
 type='text'
 placeholder='Update your comment...'
 style= { style.commentFormText }
 value={ this.state.text }
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.commentFormPost }
 value='Update' />
 </form>)
 : null}
 </div>
 )
 }
}
export default Comment;