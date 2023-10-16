import styled from 'styled-components'
import React from 'react'
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';

export default function Home(props) {
  return (
    <Container>
        <Layout>
            <LeftSide />
            <Main />
            <RightSide />
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