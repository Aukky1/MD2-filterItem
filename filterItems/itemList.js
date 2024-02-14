import { products } from './data/products.js'

function itemList(userItems) {
const items = userItems

  const initialPage = () => {
    const inputElement = document.querySelector("input")
    inputElement.addEventListener('input' , ( filterItemsHandler))
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    // console.log(event.target)
    // console.log(event.target.value)
    const userKeyword = event.target.value.toLowerCase()
    items.filter((item) => {
      item.keywords.toLowerCase().includes(userKeyword)
    })
    showItems(filterItems)

  }

  const showItems = (items) => {
    const ulElement = document.getElementById('items')
    ulElement.textContent = ''
    items.forEach(item => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}KEYWORDS:${item.keywords}`
      ulElement.appendChild(liElement)
    });
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

export { itemList }
const { initialPage } = itemList(products)
initialPage()
