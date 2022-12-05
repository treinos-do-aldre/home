import type { NextPage } from 'next'
import Head from 'next/head'
import StyledSection from './style'
import { models } from 'pages/api/models'
import TesteService from '@services/testes'
import { useState } from 'react'


const Home: NextPage = () => {
    const testeService = TesteService()
    const [response, setResponse] = useState<any>({})

    const handleAPI = async (data: any) => {
        data.preventDefault();

        const res = await testeService.customRequest(
            data.target[0].value,
            data.target[1].value,
            data.target[2].value,
            {}
        )
        setResponse(res)
    }
    return (
        <div>
            <Head>
                <title>Dev Options</title>
                <meta name="description" content="Site desenvolvido para treino" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StyledSection>
                <div className="api_test">
                    <h4>API TEST</h4>
                    <form action="" onSubmit={handleAPI}>
                        <div className="input_group">
                            <div className="custom_input">
                                <label htmlFor="model">Model</label>
                                <input type="text" name='model' id='model' />
                                {/* <select name="model" id="model" onChange={(e) => console.log(e)}>
                                    {models.map((model: string) => (
                                        <option key={model} value={model}>{model.toUpperCase()}</option>
                                    ))}
                                </select> */}
                            </div>

                            <div className="custom_input">
                                <label htmlFor="method">Método</label>
                                <input type="text" name='method' id='method' />
                            </div>

                        </div>
                        <div className="input_group">
                            <div className="custom_input">
                                <label htmlFor="query">Query</label>
                                <input type="text" name="query" id="query" />
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <p>Response</p>
                    <div className="response">
                        <p>Status: {response.status}</p>
                        <p>StatusText: {response.statusText}</p>
                        <p>Data: {JSON.stringify(response.data)}</p>
                    </div>
                </div>
            </StyledSection>
        </div>
    )
}

export default Home
