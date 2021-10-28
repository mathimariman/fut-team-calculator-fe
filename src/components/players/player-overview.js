import PlayerColumn from "./player-column";
import {DragDropContext} from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;


const PlayerOverview = ({players, setPlayers}) => {

    const onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
            return;
        }

        const newPlayers = [...players];
        const player = newPlayers.find(player => player.id === draggableId);
        player.state = destination.droppableId;
        setPlayers(newPlayers);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <PlayerColumn columnId='PLAYERPOOL' title='Player pool' players={players}/>
                <PlayerColumn columnId='BUYING' title='Buying' players={players}/>
                <PlayerColumn columnId='SELLING' title='Selling' players={players}/>
            </Container>
        </DragDropContext>

    );
};
export default PlayerOverview;
