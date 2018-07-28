//@flow
import { apiPlace } from "./Api";
import type { Location } from "@model/Entity/Location";
import type {ApiSearchResponse} from "@model/Entity/ApiSearchResponse";

export default class PlaceService {
    static async getPlaces(
        location: Location,
        radius: number,
        language: string,
        pageToken: ?string
    ) : Promise<ApiSearchResponse> {
        try {
            let response = await apiPlace.get("/nearbysearch/json", {
                params: {
                    types: "restaurant|food",
                    radius: radius,
                    language: language,
                    keyword: "restaurant",
                    pagetoken: pageToken,
                    location: `${location.lat},${location.lng}`
                }
            });
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
