function FirstComponent(props) {
  return (
    <div
      style={{ width: props.width, height: props.height, background: props.bg }}
    >
      <h1>My First Component</h1>
      <h2>
        {props.city} {props.rent}
      </h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello Students</h1>
      <FirstComponent
        bg={"yellow"}
        width={400}
        height={300}
        city="Gwalior"
        rent="1900"
      />
      <FirstComponent
        bg={"aqua"}
        width={600}
        height={300}
        city="Goa"
        rent="4500"
      />
    </div>
  );
}

export default App;
