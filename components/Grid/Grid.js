import {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import GridItem from './GridItems';

const StyledGridItems =styled.div `{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-bottom:2rem;
}`;
const StyledGridContent =styled.div `{
    @media (max-width: 800px) {
    margin:auto;
    width:90%;
    }
}`;

const StyledScrollButton = styled.p `{
    background:none;
    border:none;
    margin:1.5rem auto;
    padding:0;
    cursor: pointer;
    font-size:1.3rem;
    text-align: right;
    :hover{
        text-decoration: underline;
    }
}`;

export default function Grid({data}) {
    const amountToView=8;
    const maxItems= data.length;
    const [itemsToView, setItemsToView]= useState(4);
    const handleViewMore=()=>{
        if (maxItems >= itemsToView){
            setItemsToView(itemsToView+4);
        }
    };
    const scrollToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useBottomScrollListener(handleViewMore);
    return (
        <StyledGridContent>
            {data.slice(0,itemsToView).map((item) =>
                <div key={item.id}>
                    <h2 key= {item.id}>
                        {item.name}
                    </h2>
                    <StyledGridItems>
                        <GridItem key={item.id} item={item} amountToView={amountToView}/>
                    </StyledGridItems>
                </div>
            )
            }
            {maxItems <= itemsToView?  <StyledScrollButton onClick={scrollToTop}>
                <FontAwesomeIcon color= {'black'} icon={faArrowUp}></FontAwesomeIcon></StyledScrollButton>:null}
        </StyledGridContent>
    );
}