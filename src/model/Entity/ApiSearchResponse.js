//@flow
import type { Place } from "./Place";
export type ApiSearchResponse = {
    html_attributions: Array<String>,
    next_page_token: string,
    results: Array<Place>,
    status: string
};
