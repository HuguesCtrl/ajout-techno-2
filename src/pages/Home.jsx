import LogoReact from "../assets/react.svg";

function Home() {
  return (
    <div className="content home">
      <h2>Bienvenue sur le site...</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere laborum
        explicabo, repellat ducimus rem voluptate animi, quisquam voluptatibus
        nesciunt dignissimos, illo voluptatem minus debitis voluptatum ipsum.
        Vel vitae odio voluptatem dignissimos ut praesentium deleniti, minima
        incidunt, eos debitis corporis quo.
      </p>
      <img src={LogoReact} alt="React" width={150} />
    </div>
  );
}
export default Home;
