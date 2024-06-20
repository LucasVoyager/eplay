import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

const Category = () => {
  const [gameAction, setGameAction] = useState<Game[]>([])
  const [gameSports, setGameSports] = useState<Game[]>([])
  const [gameSimulation, setGameSimulation] = useState<Game[]>([])
  const [gameFight, setGameFight] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameSports(res))
  }, [])

  return (
    <>
      <ProductsList games={gameAction} background="black" title="Ação" />
      <ProductsList games={gameFight} background="grey" title="Luta" />
      <ProductsList games={gameSports} background="black" title="Esportes" />
      <ProductsList games={gameRpg} background="grey" title="Rpg" />
      <ProductsList
        games={gameSimulation}
        background="black"
        title="Simulação"
      />
    </>
  )
}

export default Category
