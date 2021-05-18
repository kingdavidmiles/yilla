import { createGlobalState } from "react-hooks-global-state";
import { BlogTypes } from "../type";

type StateParams = {
    blogs: Array<BlogTypes>
}
const initialState = {
    blogs: [],

};

export const { useGlobalState } = createGlobalState<StateParams>(initialState);
