import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {IoArrowBack} from 'react-icons/io5'
import axios from 'axios'
import {searchByCountry} from '../config'
import {Button} from '../components/Button'
import Info from '../components/Info'


const Details = () => {
  const {name} = useParams()
  const {push, goBack} = useNavigate()

  const [country, setCountry] = useState(null)
  console.log('country', country)

  useEffect(() => {
    axios.get(searchByCountry(name))
      .then(({data}) => setCountry(data[0]))
  }, [name])

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />Back
      </Button>
            Details {name}
      {/*{ country ? <Info {...country} /> : null }*/}
    </div>
  )
}

export default Details