//@flow
export const EPlaceType = {
    "lodging":"lodging",
    "restaurant":"restaurant",
    "food":"food",
    "point_of_interest":"point_of_interest",
    "establishment":"establishment"
};

export type PlaceType = $Keys<typeof EPlaceType>;
