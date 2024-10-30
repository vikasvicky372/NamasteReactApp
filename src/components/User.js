import { useState } from "react";

const User = ({name}) => {
const [count] = useState(0);
const [count2] = useState(1);

    return (
        <div className="user-card">
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <h1>Name: {name}</h1>
            <h3>Email: vikasvicky372@gmail.com </h3>
            <h3>Contact: 7989927081</h3>
        </div>
    )
}

export default User;