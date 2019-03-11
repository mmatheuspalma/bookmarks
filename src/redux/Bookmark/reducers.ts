import { combineReducers } from 'redux';

const initialState = Array<any>();

const listBookmark = (state = initialState, action: any) => {
   switch (action.type) {
      case 'LIST_BOOKMARK_REQUEST':
         return { ...state, isFetching: true };
      case 'LIST_BOOKMARK_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'LIST_BOOKMARK_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const addBookmark = (state = initialState, action: any) => {
   switch (action.type) {
      case 'ADD_BOOKMARK_REQUEST':
         return { ...state, isFetching: true };
      case 'ADD_BOOKMARK_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'ADD_BOOKMARK_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const editBookmark = (state = initialState, action: any) => {
   switch (action.type) {
      case 'EDIT_BOOKMARK_REQUEST':
         return { ...state, isFetching: true };
      case 'EDIT_BOOKMARK_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'EDIT_BOOKMARK_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const deleteBookmark = (state = initialState, action: any) => {
   switch (action.type) {
      case 'DELETE_BOOKMARK_REQUEST':
         return { ...state, isFetching: true };
      case 'DELETE_BOOKMARK_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'DELETE_BOOKMARK_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const deleteBookmarkTag = (state = initialState, action: any) => {
   switch (action.type) {
      case 'DELETE_TAG_BOOKMARK_REQUEST':
         return { ...state, isFetching: true };
      case 'DELETE_TAG_BOOKMARK_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'DELETE_TAG_BOOKMARK_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

export default combineReducers({
   list: listBookmark,
   add: addBookmark,
   edit: editBookmark,
   delete: deleteBookmark,
   deleteTag: deleteBookmarkTag,
});
