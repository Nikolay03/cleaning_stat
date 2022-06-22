import { AnimationOnScroll } from 'react-animation-on-scroll'
import React from 'react'
import styled from 'styled-components'

import Container from 'components/ui/Container'
import ServiceBottomWave from 'icons/ServiceBottomWave'
import ServiceTopWave from 'icons/ServiceTopWave'
import ServiceItem from 'view/Home/ServicesSection/ServiceItem'
import { mediaQueries } from 'constants/mediaQueries'
import Title from 'components/elements/Title'
import * as ROUTES from 'constants/routes'
import ServicesBg from 'assets/services_bg.png'
import Carpet from 'assets/services/carpet.jpg'
import Floor from 'assets/services/floor.jpg'
import Glass from 'assets/services/glass.jpg'
import Express from 'assets/services/express.jpg'
import Man from 'assets/services/man.jpg'
import Car from 'assets/services/car.jpg'

const Wrapper = styled.section`
  position: relative;
  background-image: url(${ServicesBg});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 220px 0px 220px 0px;
  @media ${mediaQueries.tabletL} {
    padding: 120px 0px 120px 0px;
  };
`

const BgMask = styled.div`
  background-color: transparent;
  background-image: linear-gradient(0deg, #13191B 0%, #13191B 100%);
  opacity: 0.94;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`

const Wave = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
  & svg {
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    & path {
      fill: #fff;
      transform-origin: center;
      transform: rotateY(0deg);
    }
  }
  @media ${mediaQueries.tabletL} {
    & svg {
      height: 40px;
    }
  }
`
const TopWave = styled(Wave)`
  top: -1px;
  transform: rotate(180deg);
`
const BottomWave = styled(Wave)`
  bottom: -1px;
`

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  position: relative;
  @media ${mediaQueries.laptopM} {
    grid-gap: 40px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${mediaQueries.tabletL} {
    grid-gap: 40px 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const arr = [
  {
    image: Carpet,
    price: '0',
    name: 'Химчистка ковров',
    text: 'Чистка на месте, а также вывоз из дома, стирка ковров новейшей технологией. Используем исключительно качественные средства, чтобы вернуть прежний новый вид и сохранить целостность ваших ковров.'
  },
  {
    image: Floor,
    price: '0',
    name: 'После ремонта',
    text: 'Уборка после ремонта офисов, квартир, помещений. Доверьте нам это дело, мы умеем отмывать и отскребывать излишки частей оттуда, где их не должно быть! '
  },
  {
    image: Express,
    price: '0',
    name: 'Экспресс уборка',
    text: 'Вытираем  всю пыль из поверхности мебели, чистим ковры, отмываем все полы и возвращаем свежесть вашему дому, офису или помещению.'
  },
  {
    image: Glass,
    price: '0',
    name: 'Мойка окон',
    text: 'Не мучайте себя этим делом, доверьтесь нам! Мы не только вымоем все стёкла и рамы, но и подарим вам время на чаепитие и наслаждение от красивого вида из окна!'
  },
  {
    image: Man,
    price: '0',
    name: 'Чистка брусчатки',
    text: 'А также мрамора, гранита, кафельной и кирпичной плиты. Особый метод химчистки и полировки вернет изначальный блеск и свежесть '
  },
  {
    image: Car,
    price: '0',
    name: 'Выездная автомойка',
    text: 'Трехфазовая мойка, благодаря которой автомобиль становится как новым! \n' +
      'В услугу входит обработка сухим туманом, мойка двигателя и химчистка салона'
  }
]

const ServicesSection = props => {
  return (
    <Wrapper id={ROUTES.SERVICES}>
      <BgMask />
      <TopWave>
        <ServiceTopWave />
      </TopWave>
      <Container>
        <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce>
          <Title
            as={'h2'} color={'white'} style={{
              marginBottom: '80px',
              position: 'relative',
              textAlign: 'center'
            }}
          >Услуги
          </Title>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce>
          <SimpleGrid>
            {arr.map(i => (
              <ServiceItem key={i} data={i} />
            ))}
          </SimpleGrid>
        </AnimationOnScroll>
      </Container>
      <BottomWave>
        <ServiceBottomWave />
      </BottomWave>
    </Wrapper>
  )
}

export default ServicesSection
