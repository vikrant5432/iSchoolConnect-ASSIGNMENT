import React, { Component } from "react";
import { extStyle } from "./mystyleconfig";
import "./myStyle.css";
import ischool from "./clientStyle.module.css";

class App5 extends Component {
  myStyle = {
    backgroundColor: "yellow",
    width: "400px",
    padding: "10px",
    margin: "10px",
    fontFamily: "Arial",
    color: "green",
    textAlign: "justify",
  };
  render() {
    return (
      <section>
        <h1>Welcome to My Application</h1>
        <article style={extStyle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          accusantium, cupiditate necessitatibus suscipit, enim perferendis
          quibusdam sed molestias cum fugiat odio consectetur obcaecati?
          Laboriosam asperiores iusto odio nisi soluta nam.
        </article>
        <article style={this.myStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          cupiditate impedit fugiat, ipsam deleniti tempora debitis ratione
          numquam reiciendis mollitia suscipit deserunt delectus tempore
          pariatur quaerat unde nam quae incidunt!
        </article>
        <article
          style={{
            backgroundColor: "red",
            width: "400px",
            padding: "10px",
            margin: "10px",
            fontFamily: "Arial",
            color: "papayawhip",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit
          autem quae minima odio, nemo, quisquam cum aspernatur aliquid iure
          assumenda illum repudiandae sit non. Eum doloribus officiis earum
          consequatur?
        </article>
        <hr />
        <article className="box">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          accusantium, cupiditate necessitatibus suscipit, enim perferendis
          quibusdam sed molestias cum fugiat odio consectetur obcaecati?
          Laboriosam asperiores iusto odio nisi soluta nam.
        </article>
        {/* Module can be use as needed */}
        <article className={ischool.box}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          cupiditate impedit fugiat, ipsam deleniti tempora debitis ratione
          numquam reiciendis mollitia suscipit deserunt delectus tempore
          pariatur quaerat unde nam quae incidunt!
        </article>
        <article className={ischool.box}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit
          autem quae minima odio, nemo, quisquam cum aspernatur aliquid iure
          assumenda illum repudiandae sit non. Eum doloribus officiis earum
          consequatur?
        </article>
      </section>
    );
  }
}

export default App5;
