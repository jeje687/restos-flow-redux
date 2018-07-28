// @flow
import type { Action } from "../actions";
import type { Place } from "@model/Entity/Place";

export type PlaceState = {
    nextPageToken: ?string,
    places: ?{ [key: string]: Place }
};

let initialState : PlaceState = {
    nextPageToken: null,
    places: null
};

let placeReducers = (state: PlaceState, action: Action): PlaceState => {
    switch (action.type) {
        case "SET_PLACES":
            return {
                ...state,
                ...{
                    places: {
                        ...state.places,
                        ...action.places
                    }
                }
            };
        case "SET_NEXT_PAGE_TOKEN":
            return {
                ...state,
                ...{
                    nextPageToken: action.token
                }
            };
        default:
            return state != null ? state : initialState;
    }
};

export default placeReducers;
