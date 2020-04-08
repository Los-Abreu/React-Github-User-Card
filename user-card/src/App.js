import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
    .get("https://api.github.com/users/Los-Abreu")
    .then(response => {
      console.log("my data", response.data)
      this.setState({
        user: response.data
      });
    })

  axios
  .get("https://api.github.com/users/Los-Abreu/followers")
  .then(response2 => {
    console.log("followers", response2.data)
  this.setState({
    followers: response2.data
    });
  });
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>GitHub Usercard</h1>
  //       <div className="user">
  //         <img src={this.state.user.avatar_url} />
  //         <h3>Hello, my name is {this.state.user.name}.<br/>
  //         Location: {this.state.user.location}<br/></h3> 
  //         <p>Followers: {this.state.user.followers}<br/>
  //         Following: {this.state.user.following}</p>
  //       </div>
  //       <div className="followers">
  //         {this.state.followers.avatar_url}
  //       </div>

  //     </div>
  //   );
  // }
  render(){
    return (
      <div>
        <h1>Github Usercard</h1>
        <Card
          userPic={this.state.user.avatar_url}
          name={this.state.user.name}
          location={this.state.user.location}
          followers={this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
        />
        <h1>My Followers</h1>
        {this.state.followers.map(users=>{
          return <Card
          userPic={users.avatar_url}
          name={users.login}
          location={users.url}
          followers={users.followers_url}
          following={users.following_url}
          bio={users.bio}
          />
        })}
      </div>
    )
  }
}



export default App;
