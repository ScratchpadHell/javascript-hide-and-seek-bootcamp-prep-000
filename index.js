function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankFind
  for (let i = 0; i < rankFind.length; i++) {
    rankFind[i].innerHTML = (i + 1).toString()
  }
}