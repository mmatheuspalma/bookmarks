import { ImmortalDB } from 'immortal-db';

import { IBookmark } from 'interfaces/Bookmark';

const listBookmark = () => {
   let list: any = ImmortalDB.get('bookmarks');

   return list;
};

const addBookmark = (bookmark: IBookmark) => {
   return listBookmark().then((response: any) => {
      let bookmarks = JSON.parse(response) || [];

      bookmarks.push({
         id: Math.random().toString(36).substr(2, 9),
         ...bookmark,
      });

      return ImmortalDB.set('bookmarks', JSON.stringify(bookmarks));
   });
};

const editBookmark = (id: number|string, bookmark: IBookmark) => {
   return listBookmark().then((response: any) => {
      let bookmarks = JSON.parse(response).filter((item: IBookmark) => item.id !== id);

      return ImmortalDB.set('bookmarks', JSON.stringify(bookmarks.push(bookmark)));
   });
};

const deleteBookmark = (id: number|string) => {
   return listBookmark().then((response: any) => {
      let bookmarks = JSON.stringify(JSON.parse(response).filter((item: IBookmark) => item.id !== id));

      return ImmortalDB.set('bookmarks', bookmarks);
   });
};

export default {
   listBookmark,
   addBookmark,
   editBookmark,
   deleteBookmark,
};