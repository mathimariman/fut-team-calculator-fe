import styled from "styled-components";
import PlayerCard from "./player-card";
import {Droppable} from "react-beautiful-dnd";

export const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    padding: 8px;
`;

export const PlayerList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;

const PlayerColumn = ({columnId, title, players}) => {

    const filteredPlayers = players.filter(player => player.state === columnId);

    return (
        <Container>
            <Title>{title}</Title>
            <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                    <PlayerList ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}>
                        {filteredPlayers.map((player) => <PlayerCard key={player.id} player={player}/>)}
                        {provided.placeholder}
                    </PlayerList>
                )}
            </Droppable>
        </Container>
    )
}


export default PlayerColumn;