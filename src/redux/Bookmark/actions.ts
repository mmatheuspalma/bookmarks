import Services from './services';
import actionTypes from './actionsType';

import { IBookmark } from 'interfaces/Bookmark';

export const listBookmark = () => {
   return async (dispatch: any) => {
      dispatch(actionTypes.list.request());

      return Services.listBookmark().then((response: any) => {
         (response)
            ? dispatch(actionTypes.list.success(JSON.parse(response)))
            : dispatch(actionTypes.list.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const addBookmark = (bookmark: IBookmark) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.add.request());

      return Services.addBookmark(bookmark).then((response: any) => {
         (response)
            ? dispatch(actionTypes.add.success(JSON.parse(response)))
            : dispatch(actionTypes.add.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const editBookmark = (id: number, bookmark: IBookmark) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.edit.request());

      return Services.editBookmark(id, bookmark).then((response: any) => {
         (response)
            ? dispatch(actionTypes.edit.success(JSON.parse(response)))
            : dispatch(actionTypes.edit.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const deleteBookmark = (id: number) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.delete.request());

      return Services.deleteBookmark(id).then((response: any) => {
         (response)
            ? dispatch(actionTypes.delete.success(JSON.parse(response)))
            : dispatch(actionTypes.delete.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const deleteBookmarkTag = (id: number, tag: string) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.deleteTag.request());

      return Services.deleteBookmarkTag(id, tag).then((response: any) => {
         (response)
            ? dispatch(actionTypes.deleteTag.success(JSON.parse(response)))
            : dispatch(actionTypes.deleteTag.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};
