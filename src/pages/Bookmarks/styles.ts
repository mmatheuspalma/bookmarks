import { createStyles } from '@material-ui/core/styles';

export default createStyles({
   app: {
      width: '1000px',
      height: 'auto',
   },
   appLogo: {
      marginBottom: '16px',
   },
   appWrapper: {
      width: '100%',
      borderRadius: '5px',
      backgroundColor: '#fff',
   },
   appHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 16px',
   },
   appForm: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
   },
   appField: {
      width: '100%',
      '&:not(:first-child)': {
         marginLeft: '16px',
      },
   },
   appControls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '24px',
   },
   appControl: {
      fontSize: '40px',
      '&:hover': {
         color: '#008cff',
         cursor: 'pointer',
      },
      '&:not(:last-child)': {
         marginRight: '16px',
      },
   },
   appControlActive: {
      color: '#008cff',
   },
   appBody: {
      minHeight: '630px',
      maxHeight: '640px',
      overflowY: 'auto',
      padding: '0px 16px',
   },
   appNotFound: {
      width: '100%',
      height: '630px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
});