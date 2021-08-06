export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remooooove after finishied developing....
  token:
    'BQB9XIF6YnvRGigXq6p5y4lJ1xClTUcECHAqXU8sd-3CUUZn6OWVkb7fiamUiM9XFSroNsxKWJB6OfVwTDAIlEmSwIjECQ2q6gpW3CXPYzsypkHWHBTigygE2VpyDIHAgtJUdVPPqBzmWTr7eCbqQL2PL9hLMF9SUg',
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
