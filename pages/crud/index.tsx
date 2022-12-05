import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'

import { CrudProvider, CrudContext } from 'context/CrudContext';
import { GlobalContext } from "context/GlobalContext";

import SideBar from '@components/layout/sidebar';
import CrudController from './crudController';

import { StyledPage } from './style'

const Home: NextPage = () => {
    const { theme } = useContext(GlobalContext);
    const { selectMenu, selectedMenu } = useContext(CrudContext);

    return (
        <CrudProvider>
            <div>
                <Head>
                    <title>CRUD</title>
                    <meta name="description" content="Site desenvolvido para treino" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <StyledPage theme={theme}>
                    <SideBar />
                    <CrudController/>
                </StyledPage>
            </div>
        </CrudProvider>
    )
}

export default Home
