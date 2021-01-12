console.log("Hey! I'm gonna get some data about cats really quick...")

let ul = document.querySelector('#book-list')

let cats = []

fetch('https://www.googleapis.com/books/v1/volumes?q=cats')
  .then(jsonify)
  .then(putOnDom)

function jsonify(whateverYouWant){
    console.log(whateverYouWant)
    return whateverYouWant.json()
  }

function putOnDom(justAnArgument){
  console.log(justAnArgument)
  justAnArgument.items.forEach(function(item){
    ul.innerHTML += `<li>${item.volumeInfo.title}</li>`
    cats.push(item.volumeInfo.title)
  })
}

//Fetch requests always return a promise
//Because we're working with promises, we have to follow a specific pattern to get the information from the database
//You can never (unless you use async/await syntax) save the response of a promise and expect it to be anything else besides a promise
//.then is a method that will run once the promise it is called on has been resolved
//It always receives the previous's promises and its body as an argument

//Whenever you  need information that you've retrieved from a fetch request, you can only save/use the values inside of the .then chain (again, unless you're async/await)

console.log("We know that this will actually run before the fetch request's Promise is resolved")
