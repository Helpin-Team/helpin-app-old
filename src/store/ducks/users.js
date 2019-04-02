export const Types = {
  ADD_REQUEST: 'posts/ADD_REQUEST',
  ADD_SUCCESS: 'posts/ADD_REQUEST',
  ADD_FAILURE: 'posts/ADD_REQUEST',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.users],
        error: false,
        loading: false,
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: userType => ({
    type: Types.ADD_SUCCESS,
    payload: {
      userType,
    },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: {
      user,
    },
  }),

  addUserError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
