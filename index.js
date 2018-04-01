function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankFind = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = rankFind.length; i < l; i++) {
   let children = rankFind[i].children
   
  for(j = 0, k = children.length; if j < k; j++)
  children[j].innerHTML = (children[j].innerHTML) + n
  }
}