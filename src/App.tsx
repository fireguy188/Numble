import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground></ParticleBackground>
      <Header></Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div className="dramatic">
          <p>Numble is not for the faint of heart</p>
          <p>Are you ready to play?</p>
        </div>
      </div>
    </>
  );
}

export default App;
