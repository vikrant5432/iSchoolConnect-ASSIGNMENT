import Child from "./child.component";

let Parent = () => {
  return (
    <div
      style={{ border: "2px solid red", padding: "10px" }}
      className="parentComponent"
    >
      <h2>Parent Component</h2>
      <Child></Child>
    </div>
  );
};

export default Parent;
