import hero from "./hero.png";

const Hero = () => {
  return (
    <section
      style={{
        marginTop: "10px",
        height: "500px",
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero"
    >
      <div
        className="hero-content"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1>COLLUSION</h1>
        <p>An exclusive selection of this season's trends.</p>
        <div className="buttons">
          <a href="https://example.com">Discover</a>
          <br />
          <a href="https://example.com/shop">Shop Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
