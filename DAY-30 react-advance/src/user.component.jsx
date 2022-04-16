import { Component } from "react";
import axios from "axios";
class UserComp extends Component {
  state = {
    user: [],
  };
  // componentDidMount() {
  //   axios.get("https://reqres.in/api/users").then((res) => {
  //     this.setState({
  //       user: res.data.data,
  //     });
  //   });
  // }

  getList = () => {
    axios.get("https://reqres.in/api/users").then((res) => {
      this.setState({
        user: res.data.data,
      });
    });
  };
  render() {
    return (
      <div>
        <h1>User List</h1>
        <button onClick={this.getList}>Click for list</button>
        <ul>
          {this.state.user.map((user) => {
            return (
              <article key={user.id}>
                <img src={user.avatar} alt="" />
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                {user.first_name} {user.last_name}
              </article>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserComp;
