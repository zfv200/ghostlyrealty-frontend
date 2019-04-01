export default {
  bannerType: {
    backgroundColor: '#202020',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  logOutButton: {
    marginRight: "130px",
    marginTop: "15px",
  },

  hLeft: {
    marginRight: '80px',
    marginLeft: '130px',
    color: 'white'
  },

  hRight: {
    marginLeft: 'auto',
    marginRight: '60px'
  },

  recentSearchesContainer:{
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    position: 'absolute',
    width: '500px'
  },

  recentSearch: {
    display: 'flex',
    backgroundColor: 'black'
  },

  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center"
  },

  SignInForm: {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    zIndex: 999
  },

  content: {
    position: "relative",
    background: "rgb(255, 255, 255)",
    margin: "auto",
    border: "1px solid rgb(187, 187, 187)",
    padding: "5px",
    display: "flex",
    width: "30%",
    height: "50%"
  }
}
