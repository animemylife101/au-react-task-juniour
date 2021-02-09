import headerReducer, { setHeaderStatus } from "../redux/reducers/header-reducer";

const initializationState = {
    status: 'Прежде чем действовать, надо понять'
}

it(`status schould be equal = 'T_E_S[T]' `, () => {
    let action = setHeaderStatus(`T_E_S[T]`);
    let newStatus = headerReducer(initializationState, action);
    expect(newStatus.status == 'T_E_S[T]');
})

it(`status length schould be 3`, () => {
    let action = setHeaderStatus(`666`);
    let newStatus = headerReducer(initializationState, action);
    expect(newStatus.status.length == 3);
})