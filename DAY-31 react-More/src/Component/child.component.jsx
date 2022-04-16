import { useContext } from "react";
import { FamilyContext } from "../Context/family.context";

let Child = () => {
  let value = useContext(FamilyContext);
  return (
    <div
      style={{ border: "2px solid red", padding: "10px" }}
      className="childComponent"
    >
      <h2>Child Component</h2>
      {/* <FamilyContext.Consumer>
        {(val) => <h4>Power is : {val}</h4>}
      </FamilyContext.Consumer> */}
      <h3>{value}</h3>
    </div>
  );
};

export default Child;
