'use strict'
const centerRule= ({total, activePage})=> {
  if(activePage -1 <= 0){
    return 1;
  }
  return activePage - 1;
}

const pagination({total, activePage}) =>{
  if(total <= 5){
    return Array.from({length:total},(_,i)=> i+1);
  }
  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({length:visiblePages},(_,i) =>centerRule({total, activePage})),
    total
  ]
  pages =  pages.filter((page, index, array) => array.indexOf(page) === index)
  const lastPage = pages[pages.length - 1]
  const penultimaPage = pages[pages.length - 2]
  if(penultimaPage === (lastPage  -2)){
    pages= [
      ...page.slice(0,1),
      lastpage - 1,
      lastpage
    ]
  }
  lastPage = pages[pages.length - 1]
  penultimaPage = pages[pages.length - 2]
  if(penultimaPage <= (lastPage  -2)){
    pages= [
      ...page.slice(0,1),
      '...',
      lastpage
    ]
  }
  return pages;
}
export default pagination;
