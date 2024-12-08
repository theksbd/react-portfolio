import profile from '../images/profile.png';
import '../styles/Home.css';
import { Skills } from '../helpers/Skills';

function Home() {
  const hour = new Date().getHours();

  const getMessageFromCurrentHour = hour => {
    if (hour < 12) {
      return 'morning';
    } else if (hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  return (
    <div className='home'>
      <div className='about'>
        <h2> Good {getMessageFromCurrentHour(hour)}, My Name is Hoàng </h2>
        <img src={profile} alt='my profile' className='profile-image' />
        <div className='prompt'>
          <p>
            A software and web developer with a huge eagerness to learn and
            create
          </p>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          {/* <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Typescript, Java</span>
          </li>
          <li className='item'>
            <h2>Frontend</h2>
            <span>
              HTML5, CSS3, SCSS, Bootstrap, ReactJS (Redux, React Query,...)
            </span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>
              NodeJS, ExpressJS, SQL (MySQL, PostgreSQL), NoSQL (MongoDB)
            </span>
          </li>
          <li className='item'>
            <h2>Miscellaneous</h2>
            <span>
              OOP, Data Structures and Algorithms, Git, Firebase, Linux, Prisma,
              Firebase, Auth0, Unit Testing
            </span>
          </li>
          <li className='item'>
            <h2>Soft Skills</h2>
            <span>
              710 TOEIC (Listening & Reading), Clean Code, Time Management,
              Problem‑solving, Teamwork, Presentation.
            </span>
          </li> */}
          {Skills.map(skill => (
            <li className='item' key={skill.id}>
              <h2>{skill.title}</h2>
              <span>{skill.skills.join(', ')}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Home;
