import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IBookmark } from 'interfaces/Bookmark';
import { listBookmark, addBookmark, editBookmark, deleteBookmark } from 'redux/Bookmark/actions';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

interface IProps {
   bookmarks: any;

   listBookmark: Function;
   addBookmark: Function;
   editBookmark: Function;
   deleteBookmark: Function;
}

interface IStates {
   bookmarks: any;
}

class Bookmarks extends PureComponent<IProps, IStates> {
   constructor(props: IProps) {
      super(props);

      this.state = {
         bookmarks: [],
      };
   }

   public filterBookmarksByTags = (tags: any) => {
      tags = (tags.length) ? tags.split(' ') : [];

      let filtredBookmarks = Array<any>();

      this.props.bookmarks.response.map((bookmark: any) => {
         tags.map((tag: any) => bookmark.tags.includes(tag)).filter((hasTag: boolean) => hasTag).length === tags.length && filtredBookmarks.push(bookmark);
      });

      this.setState({
         bookmarks: (tags.length) ? filtredBookmarks : this.props.bookmarks.response,
      });
   }

   public setBookmarks = (bookmarks: Array<IBookmark>) => {
      this.setState({
         bookmarks,
      });
   }

   public addBookmark = (bookmark: IBookmark) => {
      this.props.addBookmark(bookmark).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public editBookmark = (id: number|string, bookmark: IBookmark) => {
      this.props.editBookmark(id, bookmark).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public deleteBookmark = (id: number|string) => {
      this.props.deleteBookmark(id).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public componentDidMount() {
      this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response));
   }

   public render(): React.ReactNode {
      return (
         <Fragment>
            <TextField
               label="Search"
               onChange={(e) => this.filterBookmarksByTags(e.target.value)}
               margin="normal"
            />
            {
               (this.state.bookmarks)
                  ? this.state.bookmarks.map((bookmark: IBookmark) => (
                     <div>
                        {bookmark.title} {bookmark.link}
                        <span onClick={() => this.deleteBookmark(bookmark.id)}> remove </span>
                        {
                           bookmark.tags.map((tag: string, index: number) => (
                              <Chip
                                 key={index}
                                 label={tag}
                                 onDelete={() => {}}
                              />
                           ))
                        }
                     </div>
                  )) : 'Loading'
            }
         </Fragment>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      bookmarks: state.bookmark.Bookmark.list,
   };
};

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators({
      listBookmark,
      addBookmark,
      editBookmark,
      deleteBookmark,
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Bookmarks));