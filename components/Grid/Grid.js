import {useState} from 'react';
import styled from 'styled-components';
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

export default function Grid({data}) {
    const amountToView=8;
    const maxItems= data.length;
    const [itemsToView, setItemsToView]= useState(4);
    const handleViewMore=()=>{
        if (maxItems >= itemsToView){
            setItemsToView(itemsToView+4);
        }
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
        </StyledGridContent>
    );
}