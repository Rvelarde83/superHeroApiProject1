// as soon as it is approved get the  repo on github and commit a lot!//
console.log("js live Ramono-project")

const token = "10166261980010720";
let $div = $("div");
const $ul = $(".search-results")
const $ulInfo = $("#info")
const sResults = []
let updatedUserSearch = "";
const $input = $("input")
const $button = $("button")
let $span = $("span")


// put a click event on the button
$button.on("click", () => {
    $("#image").empty();
    $("#info").empty();

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
                    $("#image").empty();
                    $("#info").empty();
                    console.log(event.target)
                    const newSearchItem = $(event.target)
                    console.log(newSearchItem.text() + " primero console log")
                    console.log(idChar)
                    for (i in data.results) {
                        if (data.results[i].id === idChar) {
                            console.log(data.results[i].powerstats.durability) // to see if I'm getting the info from the correct character
                            const $img = $("<img id= image>");
                            $img.attr("src", data.results[i].image.url);
                            console.log(data.results[i].image.url)
                            $img.appendTo("#image")
                            const $bio = $("#info-character")
                            const $h2 = $("<h2>")
                            $h2.text(`Info of ${data.results[i].name}: `)
                            $h2.appendTo("#image")
                            for (const key in data.results[i].biography) {

                                const $li2 = $("<li>")
                                $li2.text(`${key} : ${data.results[i].biography[key]}`)
                                $ulInfo.append($li2)
                                console.log($li2.text())
                            }
                            for (const key in data.results[i].appearance) {

                                const $li3 = $("<li>")
                                $li3.text(`${key} : ${data.results[i].appearance[key]}`)
                                $ulInfo.append($li3)
                                console.log($li3.text())
                            }
                            for (const key in data.results[i].work) {

                                const $li4 = $("<li>")
                                $li4.text(`${key} : ${data.results[i].work[key]}`)
                                $ulInfo.append($li4)
                            }
                            for (const key in data.results[i].connections) {

                                const $li5 = $("<li>")
                                $li5.text(`${key} : ${data.results[i].connections[key]}`)
                                $ulInfo.append($li5)
                                console.log($li5.text())
                            }



                        }

                    }




                })

            }

        }

    })
    $input.val("");
    $span.text("");
    $(".search-results").empty();
    // $("#image").empty();
})




