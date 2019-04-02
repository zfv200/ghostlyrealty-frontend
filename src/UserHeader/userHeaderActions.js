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

export function registerButtonClick(bool){
  return (dispatch) => {
    dispatch(registerButtonAction(bool))
  }
}

const registerButtonAction = (bool) => {
  return {
    type: "CLICK_REGISTER",
    payload: bool
  }
}
