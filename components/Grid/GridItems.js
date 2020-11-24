import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from './Grid.module.css';

const StyledGridItem = styled.div `{    
    min-height:75px;
    width:23%;
    cursor: pointer;;
    margin-top:1.25rem;
    transition: all .2s ease-in-out;
    :hover { transform: scale(1.05)}; 
        @media (max-width: 600px) {
              width:48%;
              :hover { transform:none; }
          }

}`;

const StyledItemText =styled.div `{
    display:flex;
    flex-direction:column;
}`;
const StyledText =styled.p `{
    color:grey;
    font-size: .8rem;
}`;
const StyledTextButton =styled.p `{
    background:none;
    border:none;
    margin:1.5rem auto;
    padding:0;
    cursor: pointer;
    font-size:1.3rem;
    :hover{
        text-decoration: underline;
    }
}`;



const GridItem= ({item, amountToView}) => {
    const maxItems= item.products.length;
    const [itemsToView, setItemsToView]= useState(amountToView);

    const handleViewMore=()=>{
        setItemsToView(itemsToView+8);
    };
    if (item.products.length ===0){
        return (
            <StyledText>No Items are currently available at this time.</StyledText>
        );
    }
    return(
        <>       
            {item.products.slice(0,itemsToView).map((item)=>{
                return (
                    <StyledGridItem key = {item.id}>
                        <Image
                            className={styles.itemPicture}
                            src={item.assets[0].url}
                            alt={item.title}
                            width={500}
                            height={500}
                        />
                        <StyledItemText>
                            <span>
                                {item.title}
                            </span>
                            <StyledText>
                            ${item.unitPrice}.00
                            </StyledText>

                        </StyledItemText>
                    </StyledGridItem>);})}
            {itemsToView <= maxItems ? <StyledTextButton onClick={()=>handleViewMore()}>View More Products</StyledTextButton>:null}
        </>);
    
};
export default GridItem;