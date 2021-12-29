import "./styles.css";
import "./index.css";

function App() {
  return (
    <>
      <Sample
        heading={"Mobile Operating System"}
        list={["Android", "Blackberry", "Iphone", "Windows Phone"]}
      />

      <Sample
        heading={"Mobile Manufacturers"}
        list={["Samsung", "HTC", "MicroMax", "Apple"]}
      />
    </>
  );
}

function Sample(props) {
  return (
    <>
      <h1> {props.heading}</h1>
      {props.list.map((e) => {
        return (
          <ul>
            <li>{e}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
