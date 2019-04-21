export const Types = {
  ADD_REQUEST: 'posts/ADD_REQUEST',
  ADD_SUCCESS: 'posts/ADD_REQUEST',
  ADD_FAILURE: 'posts/ADD_REQUEST',
};

const INITIAL_STATE = {
  data: [
    {
      title: 'Problema para configurar react',
      date: '27 jan 20:00',
      status: true,
      course: {
        name: 'Análise e desenvolvimento de sistemas',
        color: '#9aec94',
      },
    },
  ],
  loading: false,
  error: false,
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.posts],
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
  addPostsRequest: postType => ({
    type: Types.ADD_REQUEST,
    payload: {
      postType,
    },
  }),

  addPostsSuccess: posts => ({
    type: Types.ADD_SUCCESS,
    payload: {
      posts,
    },
  }),

  addPostsError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
