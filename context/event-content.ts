import { createGlobalState } from "react-hooks-global-state";
import { BlogTypes } from "../type";

type StateParams = {
    event
}
const initialState = {
    event: [],

};

export const { useGlobalState } = createGlobalState<StateParams>(initialState);
