export function signInButtonClick(bool){
  return (dispatch) => {
    dispatch(signInButtonAction(bool))
  }
}

const signInButtonAction = (bool) => {
  return {
    type: "CLICK_SIGN_IN",
    payload: bool
  }
}
