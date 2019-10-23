import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                    alt="john doe"
                    name="john doe"
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    The href attribute requires a valid value to be accessible. 
                </div>
            </div>
        )
    }
}