import React from 'react'; 
import { connect } from 'react-redux';
import { startSavePost } from '../actions/posts';
import RichTextEditor from 'react-rte';


class  CreatePost extends React.Component {
  
    state = {
        title: this.props.post ? this.props.post.title : '',
        value: this.props.post ? RichTextEditor.createValueFromString(this.props.post.htmlString, 'html') : RichTextEditor.createEmptyValue(),
        author: this.props.post ? this.props.post.author : ''
    }

    onChange = (value) => {
        this.setState({value});
    };

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onAuthorChange = (event) => {
        this.setState({author: event.target.value});
    }

    handleSubmit = (event) => {
        const value = this.state.value;
        const HTMLvalue = value.toString('html');
        const htmlString = JSON.stringify(HTMLvalue);

        const postData = {
            author: this.state.author,
            title: this.state.title,
            htmlString: htmlString,
            createdAt: Date.now()
        }

        this.props.startSavePost(postData);
        this.props.history.push('/');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="content-container">
                    <form onSubmit={this.handleSubmit} className="form">
                        <input className="form__input" value={this.state.title} onChange={this.onTitleChange} type="text" name="titlt" placeholder="Title" />
                        <RichTextEditor
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                        <input className="form__input"  value={this.state.author} onChange={this.onAuthorChange} type="text" name="author" placeholder="Author" />
                        <button type="submit" className="button">Create Post</button>
                    </form>                  
                </div>
            </div>
        );
    }   
}

const mapDispatchToProps = (dispatch) => ({
    startSavePost: (postData) => dispatch(startSavePost(postData))
});

export default connect(undefined, mapDispatchToProps)(CreatePost);

