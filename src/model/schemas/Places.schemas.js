//@flow
import { normalize, schema } from "normalizr";

// Define your geo schema
const geoSchema = new schema.Entity("geometry");

// Define a photos schema
const photosSchema = new schema.Entity("photos");

// Define your article
export const placeSchema = new schema.Entity("places", {
    photos: [photosSchema],
    geos: [geoSchema]
});
