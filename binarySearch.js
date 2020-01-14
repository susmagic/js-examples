// Бинарный поиск
function binarySearch(list, item){
  let low = 0
  let high = list.length - 1

  while(low <= high){ //Пока эта часть не сократится до одного элемента...
    let mid = (low + high) //... Проверяем среднии элемент
    let guess = list[mid]
    if(guess === item){ //значение найдено
      return mid
    }
    if(guess > item){
      high = mid - 1
    }else{
      low = mid + 1
    }
  }
    return NaN //значение не существует
}

let myList = [1,3,5,7,9]
console.log(binarySearch(myList, 3)) //1
console.log(binarySearch(myList, -1)) //Nan
