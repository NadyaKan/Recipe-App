import * as actionTypes from "../actions/actionTypes";

const initialState = {
  bookmarks: [],
  gettingBookmarks: false
};

const addBookmark = (state, action) => {
  return { ...state, bookmarks: state.bookmarks.concat(action.payload) };
};

const delBookmark = (state, action) => {
  return {
    ...state,
    bookmarks: state.bookmarks.filter(bookmark => {
      return bookmark.id !== action.payload;
    })
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOKMARK:
      return addBookmark(state, action);
    case actionTypes.DEL_BOOKMARK:
      return delBookmark(state, action);
    default:
      return state;
  }
};

export default reducer;
export { initialState };
export const getBookmarks = state => state.bookmarks.bookmarks;
