import Intro from "./components/Intro";

function App() {
  let title = "Welcome to my website"
  return (
    <>
      <h1>{title}</h1>
      <Intro name="Piyush Gupta" age="19" pro="Programmer" />
    </>
  );
}

export default App;
