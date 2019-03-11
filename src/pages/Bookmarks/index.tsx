import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IBookmark } from 'interfaces/Bookmark';
import { listBookmark, addBookmark, editBookmark, deleteBookmark, deleteBookmarkTag } from 'redux/Bookmark/actions';

import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { withStyles } from '@material-ui/core/styles';

import Bookmark from 'components/Bookmark';

import Styles from './styles';

interface IProps {
   classes: any;

   bookmarks: any;

   listBookmark: Function;
   addBookmark: Function;
   editBookmark: Function;
   deleteBookmark: Function;
   deleteBookmarkTag: Function;
}

interface IStates {
   action: string;
   bookmarks: Array<IBookmark>;
   bookmark: any;
}

class Bookmarks extends PureComponent<IProps, IStates> {
   constructor(props: IProps) {
      super(props);

      this.state = {
         action: 'add',
         bookmarks: [],
         bookmark: {},
      };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   public filterBookmarksByTags = (tags: any) => {
      tags = (tags.length) ? tags.split(' ') : [];

      let filtredBookmarks = Array<any>();

      this.props.bookmarks.response.map((bookmark: any) => {
         tags.map((tag: any) => bookmark.tags.map((bookmarkTag: any) => bookmarkTag.toLowerCase()).includes(tag))
         .filter((hasTag: boolean) => hasTag).length === tags.length && filtredBookmarks.push(bookmark);
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
      this.props.addBookmark(bookmark)
         .then(() => {
            this.setState({
               bookmark: {
                  title: '',
                  link: '',
                  tags: '',
               },
            });

            this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response));
         });
   }

   public editBookmark = (id: number|string, bookmark: IBookmark) => {
      this.props.editBookmark(id, bookmark).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public deleteBookmark = (id: number|string) => {
      this.props.deleteBookmark(id).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public deleteBookmarkTag = (id: number|string, tag: string) => {
      this.props.deleteBookmarkTag(id, tag).then(() => this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response)));
   }

   public setAction(action: string) {
      this.setState({
         action,
      });
   }

   public handleSubmit(e: any) {
      e.preventDefault();

      const {
         bookmark,
      } = this.state;

      if (bookmark.title && bookmark.link) {
         this.addBookmark({
            ...bookmark,
            tags: bookmark.tags.split(' '),
         });
      }
   }

   public setBookmarkData(field: string, data: any) {
      this.setState({
         bookmark: {
            ...this.state.bookmark,
            [field]: data,
         },
      });
   }

   public componentDidMount() {
      this.props.listBookmark().then(() => this.setBookmarks(this.props.bookmarks.response));
   }

   public render(): React.ReactNode {
      const {
         action,
         bookmarks,
      } = this.state;

      const {
         classes,
      } = this.props;

      return (
         <div className={classes.app}>
            <img className={classes.appLogo} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCAxNjIgNDIiPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy42MTYgMjIuODYyVjEyLjY5NmgzLjAxMmMxLjIwNiAwIDEuODA5LjU5NyAxLjgwOSAxLjc5NHY2LjU3OGMwIDEuMTE3LS42MDMgMS43MTUtMS44MDkgMS43OTRIMy42MTZ6bTQuODIgNS4zODN2Ny43NzVjMCAxLjE5Ni0uNjAyIDEuNzk0LTEuODA4IDEuNzk0SDMuNjE2VjI2LjQ1MWgzLjAxMmMxLjIwNiAwIDEuODA5LjU5OCAxLjgwOSAxLjc5NHptMy42MTYtOC4zNzN2LTQuMTg2YzAtNC4zODYtMS42MDctNi41NzktNC44Mi02LjU3OUgwdjMyLjI5NWg3LjIzMWMzLjIxNCAwIDQuODItMi4xOTMgNC44Mi02LjU3OXYtNS4zODJjMC0yLjc5LS44MDMtNC4zODYtMi40MS00Ljc4NSAxLjYwNy0uMzk4IDIuNDEtMS45OTMgMi40MS00Ljc4NHptMjkuNTEgMjEuNTN2LTMuNTg4aC02LjAyN1YyNy4wNWg2LjAyNlYyMy40NmgtNi4wMjZWMTIuNzE5aDYuMDI2VjkuMTA3SDMxLjkydjMyLjI5NWg5LjY0MXptMjMuMjQ0LTE4LjU0VjEyLjY5NmgzLjAxM2MxLjIwNSAwIDEuODA4LjU5NyAxLjgwOCAxLjc5NHY2LjU3OGMwIDEuMTE3LS42MDMgMS43MTUtMS44MDggMS43OTRoLTMuMDEzem00LjgyIDUuMzgzdjcuNzc1YzAgMS4xOTYtLjYwMiAxLjc5NC0xLjgwNyAxLjc5NGgtMy4wMTNWMjYuNDUxaDMuMDEzYzEuMjA1IDAgMS44MDguNTk4IDEuODA4IDEuNzk0em0zLjYxNy04LjM3M3YtNC4xODZjMC00LjM4Ni0xLjYwNy02LjU3OS00LjgyMS02LjU3OUg2MS4xOXYzMi4yOTVoNy4yM2MzLjIxNSAwIDQuODIyLTIuMTkzIDQuODIyLTYuNTc5di01LjM4MmMwLTIuNzktLjgwNC00LjM4Ni0yLjQxLTQuNzg1IDEuNjA2LS4zOTggMi40MS0xLjk5MyAyLjQxLTQuNzg0em0yOC43MiAyMS41M3YtMy41ODhoLTQuNzRWOS4xMDdoLTMuNjE2djMyLjI5NWg4LjM1NnptMjYuODc1LTM3LjgxNGgzLjYxNVYwaC0zLjYxNXYzLjU4OHptLTguNDcgMGgzLjYxNVYwaC0zLjYxNlYzLjU5em04LjQ2MSAzMy4wM2MwIDEuMTk2LS42MDIgMS43OTQtMS44MDcgMS43OTRoLTEuMjA2Yy0xLjIwNSAwLTEuODA3LS41OTgtMS44MDctMS43OTVWOS4xMDdoLTMuNjE2djI2LjMxNWMwIDQuMzg1IDEuNjA3IDYuNTc4IDQuODIgNi41NzhoMi40MTFjMy4yMTQgMCA0LjgyMS0yLjE5MyA0LjgyMS02LjU3OFY5LjEwN2gtMy42MTZ2MjcuNTF6TTE2MiA0MS40MDF2LTMuNTg4aC02LjAyNlYyNy4wNUgxNjJWMjMuNDZoLTYuMDI2VjEyLjcxOUgxNjJWOS4xMDdoLTkuNjQxdjMyLjI5NUgxNjJ6Ii8+Cjwvc3ZnPgo='/>
            <div className={classes.appWrapper}>
               <div className={classes.appHeader}>
                  <div className={classes.appControls}>
                     <SearchIcon className={`${classes.appControl} ${(action === 'search') ? classes.appControlActive : ''}`} onClick={() => this.setAction('search')}/>
                     <AddBoxIcon className={`${classes.appControl} ${(action === 'add') ? classes.appControlActive : ''}`} onClick={() => this.setAction('add')}/>
                  </div>
                  <form onSubmit={this.handleSubmit} className={classes.appForm}>
                     {
                        (action === 'add')
                           ? (
                              <Fragment>
                                 <TextField
                                    label="Title"
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.appField}
                                    value={this.state.bookmark.title}
                                    onChange={(e) => this.setBookmarkData('title', e.target.value)}
                                 />
                                 <TextField
                                    label="Link"
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.appField}
                                    value={this.state.bookmark.link}
                                    onChange={(e) => this.setBookmarkData('link', e.target.value)}
                                 />
                                 <TextField
                                    label="Tags"
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.appField}
                                    value={this.state.bookmark.tags}
                                    onChange={(e) => this.setBookmarkData('tags', e.target.value)}
                                 />
                                 <button type='submit' hidden/>
                              </Fragment>
                           ): (
                              <TextField
                                 label="Filter"
                                 margin="normal"
                                 variant="outlined"
                                 className={classes.appField}
                                 onChange={(e) => this.filterBookmarksByTags(e.target.value.toLowerCase())}
                              />
                           )
                     }
                  </form>
               </div>
               <div className={classes.appBody}>
                  {
                     (bookmarks && bookmarks.length)
                        ? bookmarks.map((bookmark: IBookmark, index: number) => (
                           <Bookmark
                              id={bookmark.id}
                              title={bookmark.title}
                              link={bookmark.link}
                              tags={bookmark.tags}

                              removeBookmark={this.deleteBookmark}
                              removeBookmarkTag={this.deleteBookmarkTag}

                              key={index}
                           />
                        )) : (
                           <div className={classes.appNotFound}>
                              <BookmarkIcon/> No bookmarks found
                           </div>
                        )
                  }
               </div>
            </div>
         </div>
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
      deleteBookmarkTag,
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Bookmarks));