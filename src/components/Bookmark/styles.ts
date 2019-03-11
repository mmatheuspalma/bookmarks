import { createStyles } from '@material-ui/core/styles';

export default createStyles({
   bookmark: {
      width: '100%',
      height: 'auto',
      padding: '24px 0px',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '&:not(:last-child)': {
         borderBottom: '1px solid #f0f0f0',
      },
   },
   bookmarkBody: {
   },
   bookmarkTitle: {
      fontFamily: 'Ubuntu',
      fontSize: '18px',
      fontWeight: 400,
   },
   bookmarkLink: {
      display: 'block',
      color: '#008cff',
      '&:hover, &:visited, &:focus': {
         color: '#008cff',
      },
      marginTop: '24px',
   },
   bookmarkTags: {
      marginTop: '16px',
   },
   bookmarkTag: {
      marginRight: '8px',
      borderRadius: '5px',
   },
   bookmarkActions: {},
   bookmarkAction: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
         color: '#008cff',
         cursor: 'pointer',
      },
   },
   bookmarkActionIcon: {
   },
   bookmarActionName: {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
      textTransform: 'uppercase',
      marginLeft: '16px',
   }
});