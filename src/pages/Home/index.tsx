import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/game'

import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/starwars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'sports',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 150,00', '-50%'],
    system: 'Windows',
    title: 'fifa 23'
  },
  {
    id: 2,
    category: 'rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['R$ 250,00', '-50%'],
    system: 'Windows',
    title: 'diablo'
  },
  {
    id: 3,
    category: 'aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starwars,
    infos: ['R$ 350,00', '-50%'],
    system: 'Windows',
    title: 'star wars jedi survivor'
  },
  {
    id: 4,
    category: 'aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starwars,
    infos: ['R$ 350,00', '-50%'],
    system: 'Windows',
    title: 'star wars jedi survivor'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'sports',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['Em Breve'],
    system: 'Windows',
    title: 'fifa 23 - dlc 1'
  },
  {
    id: 6,
    category: 'sports',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['Em Breve'],
    system: 'Windows',
    title: 'fifa 23 - pack 4'
  },
  {
    id: 7,
    category: 'sports',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['Em Breve'],
    system: 'Windows',
    title: 'fifa 23 - dlc 3'
  },
  {
    id: 8,
    category: 'sports',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['Em Breve'],
    system: 'Windows',
    title: 'fifa 23 - pack 5'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} background="grey" title="Promoções" />
      <ProductsList games={emBreve} background="black" title="Em Breve" />
    </>
  )
}

export default Home
