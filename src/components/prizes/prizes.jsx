import "./prizes.css";

const Prizes = () => {
  return (
    <section id="prizes" className="prizesContainer">
      <div className="convener-title">
        <img src="/images/rrr.webp" alt="" className="convener-logo" />
        <h1 className="convener-title-name">Prize Pool</h1>
      </div>

      <div className="firstContainer">
        <div className="gradient"></div>

        <h1 className="title">15K</h1>
        <h5 className="subtitle">1st Prize - Gold</h5>
      </div>
      <div className="secondaryContainer">
        <div className="secondContainer">
          <div className="gradient-silver"></div>
          <h1 className="title">10K</h1>
          <h5 className="subtitle">2nd Prize - Silver</h5>
        </div>
        <div className="thirdContainer">
          <div className="gradient-silver"></div>
          <h1 className="title">8K</h1>
          <h5 className="subtitle">3rd Prize - Bronze</h5>
        </div>
      </div>
    </section>
  );
};

export default Prizes;