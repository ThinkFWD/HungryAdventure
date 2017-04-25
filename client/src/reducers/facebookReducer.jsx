export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_PROFILE_FULFILLED': {
      return { ...state,
        name: action.payload.name,
        email: action.payload.email,
        fbpicture: action.payload.profilePicture,
      };
    }
  }
  return state;
}
