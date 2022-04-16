import { Component } from "react";

//2nd optimize
/*class App4 extends Component {
  state = {
    agree: true,
  };
  render() {
    return (
      <div>
        <h1>Welcome to Application</h1>
        <button
          onClick={() => {
            this.setState({ agree: !this.state.agree });
          }}
        >
          Show/hide
        </button>
        {this.state.agree ? (
          <fieldset>
            <legend>terms and Condition</legend>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, voluptatem deserunt, commodi et voluptas quibusdam
              dolor rerum, omnis enim ullam numquam eum voluptatum repellat!
              Vitae ut illum officia nostrum itaque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates at natus minima ipsa
              obcaecati, exercitationem itaque. Libero aliquam illum magnam
              soluta, eos, est veniam ex et similique atque a animi.
            </p>
          </fieldset>
        ) : (
          <h2>Welcome Guest</h2>
        )}
      </div>
    );
  }
}*/

//3rd Optimize
/*
class App4 extends Component {
  state = {
    agree: true,
  };
  render() {
    if (this.state.agree) {
      return (
        <div>
          <h1>Welcome to Application</h1>
          <button
            onClick={() => {
              this.setState({ agree: !this.state.agree });
            }}
          >
            Show/hide
          </button>
          <fieldset>
            <legend>terms and Condition</legend>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, voluptatem deserunt, commodi et voluptas quibusdam
              dolor rerum, omnis enim ullam numquam eum voluptatum repellat!
              Vitae ut illum officia nostrum itaque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates at natus minima ipsa
              obcaecati, exercitationem itaque. Libero aliquam illum magnam
              soluta, eos, est veniam ex et similique atque a animi.
            </p>
          </fieldset>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to Application</h1>
          <button
            onClick={() => {
              this.setState({ agree: !this.state.agree });
            }}
          >
            Show/hide
          </button>
          <h2>Welcome Guest</h2>
        </div>
      );
    }
  }
}*/

//most optimize
class App4 extends Component {
  state = {
    power: 0,
    agree: false,
  };
  render() {
    return (
      <div>
        <h1>Welcome to My Application</h1>
        <button onClick={() => this.setState({ agree: !this.state.agree })}>
          Show / Hide | present value is {this.state.agree + ""}
        </button>
        <br />
        <br />
        {this.state.agree && (
          <fieldset>
            <legend>Terms and Conditions</legend>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              odit aperiam ratione iste natus. Ab sequi nulla qui, nam eaque
              distinctio unde. Repellat quasi veniam, aliquid quidem quo quae
              error! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus modi eveniet quidem sunt praesentium mollitia aliquam,
              numquam beatae cumque consequatur voluptate quo pariatur. Alias
              illum ex, officia aliquid impedit rem? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim magni ipsa voluptatum sint
              tempore! Quas hic et ea expedita inventore, praesentium reiciendis
              commodi tempore dolores, quisquam perferendis ad! Et, architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque aspernatur omnis? Nobis perferendis dolorem saepe tenetur
              quam pariatur, placeat quae obcaecati velit assumenda non, iure
              inventore, totam neque porro!
            </p>
          </fieldset>
        )}
      </div>
    );
  }
}

export default App4;
