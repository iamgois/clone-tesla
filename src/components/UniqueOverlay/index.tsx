import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burguer, Footer } from './styles';


const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla © 2022</a>
          </li>

          <li>
            <a href="#">Privacy and Legal</a>
          </li>

          <li>
            <a href="#">Vehicle Recalls</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay