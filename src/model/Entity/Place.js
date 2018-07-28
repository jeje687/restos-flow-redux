//@flow
import type {Geometry} from "./Geometry";
import type {Photo} from "./Photo";
import type {PlaceType} from "./PlaceType";

export type Place = {|
    geometry: Geometry,
    icon: string,
    id: string,
    name: string,
    photos: Array<Photo>,
    place_id: string,
    plus_code: {
        compound_code: string,
        global_code: string
    },
    rating: number,
    reference: string,
    scope: string,
    types: Array<PlaceType>,
    vicinity: string
|}
