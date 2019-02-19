const listBookmarkRequest = () => {
   return { type: 'LIST_BOOKMARK_REQUEST' };
};

const listBookmarkError = () => {
   return { type: 'LIST_BOOKMARK_ERROR' };
};

const listBookmarkSuccess = (response: any) => {
    return { type: 'LIST_BOOKMARK_SUCCESS', response };
};

const addBookmarkRequest = () => {
   return { type: 'ADD_BOOKMARK_REQUEST' };
};

const addBookmarkError = () => {
   return { type: 'ADD_BOOKMARK_ERROR' };
};

const addBookmarkSuccess = (response: any) => {
    return { type: 'ADD_BOOKMARK_SUCCESS', response };
};

const editBookmarkRequest = () => {
   return { type: 'EDIT_BOOKMARK_REQUEST' };
};

const editBookmarkError = () => {
   return { type: 'EDIT_BOOKMARK_ERROR' };
};

const editBookmarkSuccess = (response: any) => {
   return { type: 'EDIT_BOOKMARK_SUCCESS', response };
};

const deleteBookmarkRequest = () => {
   return { type: 'DELETE_BOOKMARK_REQUEST' };
};

const deleteBookmarkError = () => {
   return { type: 'DELETE_BOOKMARK_ERROR' };
};

const deleteBookmarkSuccess = (response: any) => {
   return { type: 'DELETE_BOOKMARK_SUCCESS', response };
};

export default {
   list: {
      request: listBookmarkRequest,
      success: listBookmarkSuccess,
      error: listBookmarkError,
   },
   add: {
      request: addBookmarkRequest,
      success: addBookmarkSuccess,
      error: addBookmarkError,
   },
   edit: {
      request: editBookmarkRequest,
      success: editBookmarkSuccess,
      error: editBookmarkError,
   },
   delete: {
      request: deleteBookmarkRequest,
      success: deleteBookmarkSuccess,
      error: deleteBookmarkError,
   },
};