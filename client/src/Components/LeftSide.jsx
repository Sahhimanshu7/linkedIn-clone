import React from 'react'
import styled from 'styled-components'

export default function LeftSide() {
  return (
    <Container>
        <ArtCard>
            Card
        </ArtCard>
    </Container>
  )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;