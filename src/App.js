import Header, { Header2, Header3 } from "./components/Header";

function App() {

  let name = "Piyush"
  return (
    <>
      <h1>{name}</h1>
      <Header />
      <Header2 />
      <Header3 />
    </>
  );
}

export default App;
