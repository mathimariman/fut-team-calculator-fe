import styled from "styled-components";
import {calculate} from "../../util/PriceUtil";

export const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content:space-between;
`;

export const BudgetContainer = styled.div`
   color: ${props => (props.isPositive ? 'green' : 'red')};
   font-size: 30px;
`;

const PriceOverview = ({players, bank, setBank}) => {

    const handleChange = event => {
        let eventValue = event.target.value;
        setBank(eventValue);
    }

    const calculation = calculate(bank, players);

    return (
        <Container>
            <form>
                <label>
                    Current amount:
                    <input type="number" value={bank} onChange={handleChange}/>
                </label>
            </form>

            <BudgetContainer isPositive={calculation >= 0}>
                {calculation}
            </BudgetContainer>

        </Container>
    );


};
export default PriceOverview;
