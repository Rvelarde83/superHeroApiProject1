// as soon as it is approved get the  repo on github and commit a lot!//
console.log("js live Ramono-project")

const token = "10166261980010720";
let $div = $("div");
const $ul = $(".search-results")
const sResults = []
let updatedUserSearch = "";
const $input = $("input")
const $button = $("button")
let $span = $("span")


// put a click event on the button
$button.on("click", () => {

    // get the text the user types
    const searchTerm = $input.val()
    // make the api call

    // $div.prepend(`Click on the desired Search Results to see info:`); not
    $.ajax({
        url: `https://www.superheroapi.com/api.php/${token}/search/${searchTerm}`,
    }).then((data) => {
        if (data.response == "error") {
            $span.append(data.error)

        } else {



            // to see the data we get back
            for (i in data.results) {
                let name = "";
                const newResult = [data.results[i].name, data.results[i].id];


                let nameChar = newResult[0]
                let idChar = newResult[1]


                const $li = $("<li>")
                $li.text(nameChar)
                $ul.append($li)

                $li.on("click", (event) => {
                    console.log(event.target)
                    const newSearchItem = $(event.target)
                    console.log(newSearchItem.text() + " primero console log")
                    console.log(idChar)
                    for (i in data.results) {
                        if (data.results[i].id === idChar) {
                            console.log(data.results[i].powerstats.durability) // to see if I'm getting the info from the correct character
                        }
                    }


                    // $.ajax({
                    //     url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${token}/${idChar}`,

                    // }).then((data) => {
                    //     console.log(data)

                    //     const $img = $("<img id= image>");
                    //     $img.attr("src", data.image.url);
                    //     console.log(data.image.url)
                    //     $img.appendTo("#image")
                    // })


                })

            }
        }
    
    })
    $input.val("");
    $span.text("");
    $(".search-results").empty();
})




