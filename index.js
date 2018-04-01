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
   
  for(let j = 0, k = children.length; j < k; j++)
  children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
}

function deepestChild() {
  let node = getElementById('grand-node')
  let nextNode = children[0]
}