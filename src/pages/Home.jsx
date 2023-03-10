import "../styles/Home.css";
import profile from "../images/profile.png";

function Home() {
  const hour = new Date().getHours();

  const getMessageFromCurrentHour = (hour) => {
    if (hour < 12) {
      return "morning";
    } else if (hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  return (
    <div className="home">
      <div className="about">
        <h2> Good {getMessageFromCurrentHour(hour)}, My Name is Hoàng </h2>
        <img src={profile} alt="my profile" className="profile-image" />
        <div className="prompt">
          <p>
            A software and web developer with a huge eagerness to learn and
            create
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Typescript, C, C++, Java, Python</span>
          </li>
          <li className="item">
            <h2>Front-end</h2>
            <span>
              HTML5, CSS3, SCSS, Bootstrap, ReactJS (Redux, Redux-thunk,
              Redux-saga,...)
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Other</h2>
            <span>Git, Firebase, Linux</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
