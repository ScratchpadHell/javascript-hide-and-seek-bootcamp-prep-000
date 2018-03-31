function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(element) {
 return document.querySelector(element.target('id'))
}