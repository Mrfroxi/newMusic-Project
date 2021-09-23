const defaultState = {
    tracks: [],
}

export const FavouriteMusic = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_ALL_FAVOURITE_TRACK':
            return {
                ...state,
                tracks: [...action.tracks],
            }
        case 'ADD_FAVOURITE_TRACK':
            return {
                ...state,
                tracks: [...state.tracks, action.track],
            }
        case 'DELETE_FAVOURITE_TRACK':
            return {
                ...state,
                tracks: state.tracks.filter(
                    (value) => +value.id !== action.track.id
                ),
            }
        default:
            return state
    }
}
