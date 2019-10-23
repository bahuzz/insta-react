import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className="right">
            <User 
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt="user alt"
                name="johnny depp"
                min
            />

            <User 
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt=""
                name=""
                min
            />

            <User 
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt=""
                name=""
                min
            />
        </div>
    )
}