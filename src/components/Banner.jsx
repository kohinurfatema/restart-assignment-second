import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';

const Banner = ({ inProgress, resolved }) => {
  return (
    <section className="banner">
      <div className="banner-card banner-card-purple">
        <img src={vector1} alt="" className="banner-vector" />
        <div className="banner-content">
          <p className="banner-label">In-Progress</p>
          <h2 className="banner-count">{inProgress}</h2>
        </div>
      </div>
      <div className="banner-card banner-card-green">
        <img src={vector2} alt="" className="banner-vector" />
        <div className="banner-content">
          <p className="banner-label">Resolved</p>
          <h2 className="banner-count">{resolved}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
