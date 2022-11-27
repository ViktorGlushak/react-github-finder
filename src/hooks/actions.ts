import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {gitgubActions} from "../store/github/github.slice";

const actions = {
  ...gitgubActions
}

export const useActions = () => {
  const dispath = useDispatch()
  return bindActionCreators(actions, dispath)
}
