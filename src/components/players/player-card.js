import React from "react";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

export const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;


const PlayerCard = ({player}) => {

    return (
        <Draggable draggableId={player.id}>
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}>
                    {player.label}
                </Container>
            )}
        </Draggable>
    )

}

export default PlayerCard;
