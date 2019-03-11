import React, { PureComponent } from 'react';

import Chip from '@material-ui/core/Chip';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { withStyles } from '@material-ui/core';

import { IBookmark } from 'interfaces/Bookmark';

import Styles from './styles';

interface IProps extends IBookmark {
   classes: any;

   removeBookmark: Function;
   removeBookmarkTag: Function;
}

class Bookmark extends PureComponent<IProps, {}> {
   public render(): React.ReactNode {
      const {
         classes,

         id,
         title,
         link,
         tags,

         removeBookmark,
         removeBookmarkTag,
      } = this.props;

      return (
         <div className={classes.bookmark}>
            <div className={classes.bookmarkBody}>
               <div className={classes.bookmarkTitle}>
                  {title}
               </div>
               <a href={link} target='_blank' className={classes.bookmarkLink}> {link} </a>
               {
                  (tags)
                  && (
                     <div className={classes.bookmarkTags}>
                        {
                           tags.map((tag: string, index: number) => (
                              <Chip
                                 label={tag}
                                 onDelete={() => removeBookmarkTag(id, tag)}
                                 className={classes.bookmarkTag}

                                 key={index}
                              />
                           ))
                        }
                     </div>
                  )
               }
            </div>
            <div className={classes.bookmarkActions}>
               <div className={classes.bookmarkAction} onClick={() => removeBookmark(id)}>
                  <DeleteOutlinedIcon className={classes.bookmarkActionIcon}/>
                  <span className={classes.bookmarActionName}> Delete </span>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(Styles)(Bookmark);