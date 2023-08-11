import "../styles/Home.css";
import Header from "../assets/Header";
import ParticleBackground from "../ParticleBackground";
import Button from "../assets/Button";

const Home = () => {
  return (
    <body>
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

        <Button id="startBtn" text="Play" link="/game"></Button>
      </div>
    </body>
  );
};

export default Home;
