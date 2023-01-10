import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoPathContainer, CountdownHeader } from './no-path.styles';
import HomeHero from '../../components/home-hero/home-hero.component';
import Theme from '../../Theme';
const NoPath = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) return;
    const countdownClock = setInterval(() => {
      console.log(countdown);
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(countdownClock);
  }, [countdown]);

  return (
    <Theme>
      <NoPathContainer>
        <HomeHero
          title={'Sorry, nothing on this page'}
          subtitle={`You're going to be redirected to the homepage.`}>
          <CountdownHeader>{countdown}</CountdownHeader>
        </HomeHero>
      </NoPathContainer>
    </Theme>
  );
};

export default NoPath;
