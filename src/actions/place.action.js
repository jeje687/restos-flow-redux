// @flow

import type { GetState, Dispatch } from "./../../App";
import PlaceService from "@model/services/PlaceService";
import { batchActions } from "redux-batched-actions";
import { normalize, schema } from "normalizr";
import { placeSchema } from "@model/schemas/Places.schemas.js";
import type { Place } from "@model/Entity/Place";
import type { Geometry } from "@model/Entity/Geometry";
import type { Photo } from "@model/Entity/Photo";
import type { Location } from "@model/Entity/Location";
import type { ApiSearchResponse } from "@model/Entity/ApiSearchResponse";

export type SetPlacesAction = {
    type: "SET_PLACES",
    places: { [key: string]: Place }
};

export type SetPlaceAction = {
    type: "SET_PLACE",
    places: Place
};

export type SetNextPageTokenAction = {
    type: "SET_NEXT_PAGE_TOKEN",
    token: string
};

export function setPlacesAction(places: {
    [key: string]: Place
}): SetPlacesAction {
    return { type: "SET_PLACES", places: places };
}

export function setNextTokenAction(token: string): SetNextPageTokenAction {
    return { type: "SET_NEXT_PAGE_TOKEN", token: token };
}

export function setPlaces(
    location: Location,
    radius: number,
    language: string,
    pageToken: ?string
) {
    return async (dispatch: Dispatch, getState: GetState) => {
        try {
            let resp: ApiSearchResponse = await PlaceService.getPlaces(
                location,
                radius,
                language,
                pageToken
            );
            if (resp.results) {
                const {
                    places
                }: {
                    places: { [key: string]: Place }
                } = normalize(resp, {
                    results: [placeSchema]
                }).entities;
                dispatch(
                    batchActions([
                        setPlacesAction(places),
                        setNextTokenAction(resp.next_page_token)
                    ])
                );
            }
        } catch (err) {
            throw err;
        }
    };
}
