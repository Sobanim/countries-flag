import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radii);
`

const CardImage = styled.img``

const CardBody = styled.div``

const CardTitle = styled.h3``

const CardList = styled.ul``

const CardListItem = styled.li``
const Card = ({img, name, info = [], onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>
          {name}
        </CardTitle>
        <CardList>
          {info.map(el => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card