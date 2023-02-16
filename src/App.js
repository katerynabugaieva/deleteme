import './App.css';

function App() {
  const arr = []

  for (let i = 1; i < 9; i++) {
    arr.push("./img" + i + ".png")
  }

  return (
    <div className="App">
      <div className="card">
        {arr.map((item, key) => <img src={item} id={key} alt={"дичь" + item} width="100%" />)}
      </div>

    </div>
  );
}

export default App;

