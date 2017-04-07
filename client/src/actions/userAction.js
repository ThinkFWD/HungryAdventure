export function fetchUser() {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Mike',
      age: 35,
    },
  };
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: {name,
    },
  };
}
