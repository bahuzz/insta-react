import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post 
                    src="https://www.culinaryhill.com/wp-content/uploads/2015/01/Caribbean-Passion-Smoothie-Jamba-Juice-Copycat-Culinary-Hill-square.jpg"
                    alt="girl in red"
                />
                <Post 
                    src="https://nighthelper.com/wp-content/uploads/2016/03/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg"
                    alt="girl in red"
                />
                <Post 
                    src="https://hips.hearstapps.com/delish/assets/18/08/1519321899-hard-boiled-eggs-horizontal.jpg"
                    alt="girl in red"
                />
            </div>
        )
    }
}