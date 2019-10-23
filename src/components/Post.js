import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div key="id" className="post">
                <User 
                    src={this.props.photo}
                    alt={this.props.altname}
                    name={this.props.name}
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    {this.props.name}
                </div>
                <div className="post__descr">
                    {this.props.descr}
                </div>
            </div>
        )
    }
}