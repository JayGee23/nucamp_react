import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(campsite => {
        return campsite.id === parseInt(id);
    })
};

export const selectFeaturedCampsite = () =>  {
    return CAMPSITES.find((campsite) => campsite.featured)
}