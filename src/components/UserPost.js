import React from 'react';
import moment from 'moment';
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
                <h3 className="post-title">{this.props.title}</h3>
                <span id={this.props.id}></span>
                <h5>{moment(this.props.createdAt).format('MMMM Do, YYYY')}</h5>
            </div>
        );
    }
}