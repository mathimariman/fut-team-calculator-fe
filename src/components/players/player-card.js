import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

export const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
    display: flex;
    justify-content: space-between;
`;

export const ContentItem = styled.h3`
`;

export const Image = styled.img`
   width: 70px;
   height: 70px;
`;


const PlayerCard = ({player, index}) => {
    return (
        <Draggable draggableId={player.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    <Image src={player.image}></Image>
                    <ContentItem>{player.name}</ContentItem>
                    <ContentItem>{player.price.toLocaleString()} </ContentItem>
                </Container>
            )}
        </Draggable>
    )
}

export default PlayerCard;
