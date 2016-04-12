import { RESIZE_SCREEN } from '../constants/ActionTypes'

function getDimensions() {
  let height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  let width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  return ({ height, width })
}

export default function(state = getDimensions(), action) {
  switch (action.type) {
    case RESIZE_SCREEN:
      return getDimensions()
    default:
      return state
  }
}

