//@flow
import { apiPlace, PLACE_KEY } from "./Api";
import type { Location } from "@model/Entity/Location";
import type {ApiSearchResponse} from "@model/Entity/ApiSearchResponse";

export default class PlaceService {

    static getImageUri(photoRef: string, maxHeight: number, maxWidth: number){
        return `https://maps.googleapis.com/maps/api/place/photo?key=${PLACE_KEY}&photoreference=${photoRef}&maxheight=${maxHeight}&maxwidth=${maxWidth}`
    }
    static async getPlaces(
        location: Location,
        radius: number,
        language: string,
        pageToken: ?string
    ) : Promise<ApiSearchResponse> {
        try {
            let parameters = {
                    types: "restaurant|food",
                    radius: radius,
                    language: language,
                    keyword: "restaurant",
                    location: `${location.lat},${location.lng}`
            };
            if(pageToken){
                parameters = {...parameters,...{pagetoken: pageToken}};
            }
            let response = await apiPlace.get("/nearbysearch/json", {
                params: parameters
            });
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
