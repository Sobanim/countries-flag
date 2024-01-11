import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Controls from './components/Controls'
import Main from './components/Main'
import {ALL_COUNTRIES} from './config'
import List from './components/List'
import Card from './components/Card'

function App () {
  const [countries, setCountries] = useState([])

  console.log('countries', countries)

  useEffect(() => {
    axios.get(ALL_COUNTRIES)
      .then( ({data}) => setCountries(data) )
  }, [])
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {
            countries.map((c) => {
              const countryInfo = {
                img: c.flags.svg,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString()
                  },
                  {
                    title: 'Region',
                    description: c.region
                  },
                  {
                    title: 'Capital',
                    description: c.capital
                  },
                ]
              }
              return <Card key={c.name} {...countryInfo} />
            })
          }
        </List>
      </Main>
    </>

  )
}

export default App
