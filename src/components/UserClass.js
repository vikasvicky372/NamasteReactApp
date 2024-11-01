import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "India",
        avatar_url: "http:/dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vikasvicky372");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div className="content-container">
          <h1>Name: {name}</h1>
          <h3>Location: {location}</h3>
          <h3>Contact: 7989927081</h3>
        </div>
        <div className="img-container">
          <img className="img-profile"src={avatar_url}></img>
        </div>
      </div>
    );
  }
}

export default UserClass;
