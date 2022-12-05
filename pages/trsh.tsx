import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '@components/layout/menu'
import { MenuItemProps } from '@components/layout/menu/interface'
import ThemeHandler from '@components/layout/themeHandler'
import { GiDatabase, GiPokerHand } from "react-icons/gi";
import { FaSpotify, FaImages } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { RiCharacterRecognitionFill } from "react-icons/ri"
import Header from '@components/layout/header'
import Version from '@components/layout/version'

const Itens: NextPage = () => {
  const menuData: MenuItemProps[] = [
    {
      label: "Crud",
      icon: <GiDatabase/>,
      route: "crud"
    },
    {
      label: "Cassino",
      route: "home1",
      icon: <GiPokerHand/>,
      wp: true
    },
    {
      label: "Upload de Imagens",
      route: "home2",
      icon: <FaImages/>,
      wp: true
    },
    {
      label: "Player Spotify",
      route: "home3",
      icon: <FaSpotify/>,
      wp: true
    },
    {
      label: "Pokedex",
      route: "home4",
      icon: <TbPokeball/>,
      wp: true
    },
    {
      label: "Termo",
      route: "home5",
      icon: <RiCharacterRecognitionFill/>,
      wp: true
    },
    // {
    //   label: "Opção 7",
    //   route: "home6",
    // },
    // {
    //   label: "Opção 8",
    //   route: "home7",
    // },
    // {
    //   label: "Opção 9",
    //   route: "home8",
    // },
  ]

  return (
    <div>
      <Head>
        <title>Itens</title>
        <meta name="description" content="Menu de features de treinamento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Menu data={menuData} />
      <ThemeHandler/>
      <Version/>
    </div>
  )
}

export default Itens
