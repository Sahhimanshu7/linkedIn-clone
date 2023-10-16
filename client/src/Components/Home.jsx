import styled from 'styled-components'
import React from 'react'

export default function Home(props) {
  return (
    <Container>
        <Layout>
            <div>left-side</div>
            <div>Middle</div>
            <div>Right-side</div>
        </Layout>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 100px;
  max-width: 100%;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax()(0, 5fr) minmax(300px, 12fr) minmax()(300px,7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;