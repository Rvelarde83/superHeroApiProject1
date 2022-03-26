const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#todo-display")

const todos = []

// submit.addEventListener("click", () => {})
$submit.on("click", (event) => {
    // prevents default form behavior
    event.preventDefault()
    // get the value from the input
    // textInput.value
    const newTodo = $textInput.val()
    // add to list of todos
    todos.push(newTodo)
    // add an li with the new todo
    const $li = $("<li>")
    $li.text(newTodo)
    $ul.append($li)
    // add removal event listener
    const remove = (event) => {
        // turn the event target to a jQ object
        const $target = $(event.target)
        // remove it
        $target.remove()
    }
    $li.on("click", remove)
    // clear the input
    $textInput.val("")
})

console.log("js live")
const APIKEY = "AE881WeqnfWAfm0GGEpAQt4zjff8oZB0eqsdNRed";
// const $imageContainer= $(".image-container");
// const $imageData= $(".image-data")

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}` // &date=2020-03-22` after apikey to get dates... etc
}).then((data) => {
    console.log(data);
    const $img = $("<img id= apod>");
    $img.attr("src", data.url);
    $img.attr("alt", data.title);
    $img.appendTo(".image-container");
    const $title = $("<h2 id=title>");
    $title.text(`${data.title}`);
    const $content = $(`<p id=exp>${data.explanation}</p>` + `<p id=credit> ${data.copyright}</p>` + `<p id=date>${data.date}</p>`);
    $title.appendTo(".image-data")
    $content.appendTo(".image-data")
}).catch((error) => {
    console.log("bad request", error)

    console.log("js working or what")

    const $input = $("input")
    const $button = $("button")
    const $aside = $("aside")
    const $span = $("span")

})


$button.on("click", () => {





    const searchTerm = $input.val()
    console.log(searchTerm)
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=7456cdf4da799e2c3fa5f68bae90c8ca&units=imperial`)

        .then((data) => {

            console.log(data.main.temp)

            $(".location").append(` ${data.name}`)
            $(".temp").append(` ${data.main.temp}`)
            $(".feels_like").append(` ${data.main.feels_like}`)
            $(".conditions").append(` ${data.weather[0].main}`)

            console.log($("span").contents())
        }).catch((error) => {
            console.log("bad request", error)
        })


    $input.val("");
    $("span").contents().filter(function () {
        return this.nodeType === Node.TEXT_NODE;
    }).remove();









})





/*function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
  }*/

