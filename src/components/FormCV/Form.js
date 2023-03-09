import React, { Component }  from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import CVCard from "../CVCard";



export class Form extends Component {
  render() {
    return (
      <>
      
      <div className="wrapper">
        <section className="card">
          <Personal />
          <Experience />
        </section>
        <CVCard />
      </div>
      
      </>
    )
  }
}

export default Form