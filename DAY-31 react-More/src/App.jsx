import { Component } from "react";

class App extends Component {
  state = {
    username: "",
    usermail: "",
    usercity: "",
    nameerror: "",
    mailerror: "",
    cityerror: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    if (
      this.state.username === "" &&
      this.state.usermail === "" &&
      this.state.usercity === ""
    ) {
      this.setState({
        nameerror: "Enter your name",
        mailerror: "Enter your mail",
        cityerror: "Enter your City",
      });
    } else {
      this.setState({
        nameerror: "",
        mailerror: "",
        cityerror: "",
      });
      event.target.submit();
    }
    /* if(this.state.username === ''){
            this.setState({
                nameerror : "you must provide your name"
            })
        }else if(this.state.userage === 0){
            this.setState({
                ageerror : "you must provide your age"
            })
        }else if(this.state.usercity === ''){
            this.setState({
                cityerror : "you must provide your city"
            })
        }else{
            this.setState({
                nameerror : "",
                ageerror : "",
                cityerror : "",
            });
            evt.target.submit();
        } */
  };

  //   nameChange = (event) => {
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   };
  //   mailChange = (event) => {
  //     this.setState({
  //       usermail: event.target.value,
  //     });
  //   };
  //   cityChange = (event) => {
  //     this.setState({
  //       usercity: event.target.value,
  //     });
  //   };
  changeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  //2 way data binding (reading and writing)
  render() {
    return (
      <div>
        <h1>Registration form</h1>
        <hr />
        <div className="container">
          <form method="get" onSubmit={this.submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                onChange={this.changeHandler}
                value={this.state.username}
                name="username"
                className="form-control"
                id="username"
              />
              {this.state.nameerror !== "" && (
                <div className="form-text">{this.state.nameerror}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="usermail" className="form-label">
                User Email
              </label>
              <input
                onChange={this.changeHandler}
                value={this.state.usermail}
                name="usermail"
                type="mail"
                className="form-control"
                id="usermail"
              />
              {this.state.mailerror !== "" && (
                <div className="form-text">{this.state.mailerror}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="usercity">
                User City
              </label>
              <input
                onChange={this.changeHandler}
                value={this.state.usercity}
                name="usercity"
                type="text"
                className="form-control"
                id="usercity"
              />
              {this.state.cityerror !== "" && (
                <div className="form-text">{this.state.cityerror}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
