import PlayerColumn from "./player-column";
import {DragDropContext} from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;


const PlayerOverview = ({state, setState}) => {

    const onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
            return;
        }

        const startColumn = state.columns[source.droppableId];
        const finishColumn = state.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            const newPlayerIds = Array.from(startColumn.playerIds);
            newPlayerIds.splice(source.index, 1);
            newPlayerIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...startColumn,
                playerIds: newPlayerIds
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn
                }
            }
            setState(newState);
        } else {
            const startPlayerIds = Array.from(startColumn.playerIds);
            startPlayerIds.splice(source.index, 1);
            const newStartColumn = {
                ...startColumn,
                playerIds: startPlayerIds
            }

            const finishPlayerIds = Array.from(finishColumn.playerIds);
            finishPlayerIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finishColumn,
                playerIds: finishPlayerIds
            };
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinish.id]: newFinish
                }
            }
            setState(newState);
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {state.columnOrder.map((columnId) => {
                    const column = state.columns[columnId];
                    const players = column.playerIds.map((playerId) => state.players[playerId]);
                    return <PlayerColumn key={column.id} column={column} players={players}/>;
                })}
            </Container>
        </DragDropContext>
    );
};
export default PlayerOverview;
