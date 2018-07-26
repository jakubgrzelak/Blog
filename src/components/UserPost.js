import React from 'react';
import { Link } from 'react-router-dom';

export default class UserPost extends React.Component {
    convertStringToHtml(htmlString) {
        return JSON.parse(htmlString);
    }
    componentDidMount () {
        const text = this.convertStringToHtml(this.props.htmlString);
        document.getElementById(this.props.id).innerHTML = text;
    }
    render () {
        return (
            <div className="post-entry">
                <Link to={`/edit-post/${this.props.id}`}><h3>{this.props.title}</h3></Link>
                <p id={this.props.id}></p>
            </div>
        );
    }
}