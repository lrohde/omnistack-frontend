import React from 'react';

import Projects from '~/components/Projects';
import TeamSwitcher from '~/components/TeamSwitcher';
import { Container } from './styles';

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Projects />
  </Container>
);

export default Main;
