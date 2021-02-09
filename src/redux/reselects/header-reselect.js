import { createSelector } from "reselect";

export const getStatusSelector = (state) => {
    return state.header.status
};

export const getStatus = createSelector(getStatusSelector, (status) => {
    return status;
});