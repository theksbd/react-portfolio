import { SKILLS } from '../data/Skills';
import profile from '../images/profile.png';
import '../styles/Home.css';

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
          {SKILLS.map(skill => (
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
