import createDataContext from "./createCtx";
const initialState = { loading: true, myText: "", count: 0 };
const SET_LOADING = "SET_LOADING",
  SET_TEXT = "SET_TEXT",
  SET_COUNT = "SET_COUNT",
  REHYDRATE = "REHYDRATE";
//=============================

const MyReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      state = { ...state, loading: payload };
      break;
    case SET_TEXT:
      state = { ...state, myText: payload };
      break;
    case SET_COUNT:
      localStorage.setItem("count", state.count + 1);
      state = { ...state, count: state.count + 1 };
      break;
    case REHYDRATE:
      state = { ...state, ...payload };
      break;
    default:
      return state;
  }

  return state;
};
//------------------------------[ACTIONS]------------
const setText = (dispatch) => (text) => {
  console.log("CLicking", "yo What the hell");
  dispatch({ type: SET_TEXT, payload: text });
};

const setLoading = (dispatch) => (prevLOADING) => {
  dispatch({ type: SET_LOADING, payload: !prevLOADING });
};
const setCount = (dispatch) => () => {
  dispatch({ type: SET_COUNT });
};

export const { Context, Provider } = createDataContext(
  MyReducer,
  { setCount, setLoading, setText },
  initialState
);
