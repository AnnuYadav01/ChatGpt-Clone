import "./index.css";
import { Link } from "react-router-dom";
import img1 from "../../images/robot.png";
import img2 from "../../images/background.jpg";
const Home = function () {
  return (
    <div className="home">
      <div className="home-page">
        <img
          src={img2}
          className="home-bg"
          style={{ scrollbarWidth: "none" }}
        />
        <img src={img1} className="home-img" />
        <Link to="/message" className="link">
          <h1>Welcome to ChatGPT</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
