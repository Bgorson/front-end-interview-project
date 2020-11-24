import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Grid from '../components/Grid/Grid';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loader/Loading';
import Error from '../components/Error/Error';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const StyledLoadingContainer= styled.div `{
    position: fixed;
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    top: 0;
}`;
const StyledContent= styled.div `{
    width:60%;
    margin:auto;
    @media (max-width: 800px) {
          width:100%;
      }
}`;

const Index = () => {
    const [data, setData]= useState(null);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        axios.get('https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6')
            .then(res => {
                setData(res.data.aisle);
            })  .catch(error=> {
                setHasError(error);
                console.log(error);
            })
            .then(function () {
                setLoading(false);
            });
    }, []);

    if (isLoading){
        return <StyledLoadingContainer>
            <Loading/>
        </StyledLoadingContainer>;
    }
    if (hasError){
        return <Error errorMessage={hasError}/>;
    }

    return (
        <>
            <Head>
                <title>Foxtrot</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
            </Head>
            <Navbar/>
            <main>
                <StyledContent>
                    <Jumbotron aisleTitle={data.title}/>
                    <Grid data= {data.groups}/>
                </StyledContent>
                <Footer/>
            </main>
        </>
    );
};

export default Index;
