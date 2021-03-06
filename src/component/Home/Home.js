import React from 'react';

// style
import { Button, HomeContainer, Intro, Name } from './style';

function Home() {
  const onClick = (e) => {
    e.preventDefault();

    document.getElementById('first').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeContainer id="home">
      <div>
        <Intro>
          Hello, I'm <Name>Yun Jehyeok</Name>.
          <br />
          I'm a Front-End web developer.
        </Intro>
        <Button>
          <div onClick={onClick}>View my work</div>
        </Button>
      </div>
    </HomeContainer>
  );
}

export default Home;
