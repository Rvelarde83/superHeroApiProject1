// as soon as it is approved get the  repo on github and commit a lot!//
console.log("js live Ramono-project")

const token = "10166261980010720";
let $div = $("div");
const $ul = $(".search-results")
const sResults = []
let updatedUserSearch = "";
const $input = $("input")
const $button = $("button")


// put a click event on the button
$button.on("click", () => {
    // get the text the user types
    const searchTerm = $input.val()
    // make the api call

    // $div.prepend(`Search Results:`);
    $.ajax({
        url: `https://www.superheroapi.com/api.php/${token}/search/${searchTerm}`,
    }).then((data) => {

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
                console.log(newSearchItem.text() + " primero")
                console.log(idChar)


                $.ajax({
                    url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${token}/${idChar}`,

                }).then((data) => {
                    console.log(data)

                    const $img = $("<img id= image>");
                    $img.attr("src", data.image.url);
                    console.log(data.image.url)
                    $img.appendTo("#image")
                })


            })

        }
    })
})


// function segundCall(updatedUserSearch){

// $ajax({
//     url: `https://www.superheroapi.com/api.php/${token}/search/${updatedUserSearch}`,
// }).then((data)=>{
//     console.log (data.)
// } )
//   }


// $.ajax({
//     url: `https://www.superheroapi.com/api.php/${token}/search/${updatedUserSearch}`,
// }).then((data) => {
//     $div.append(`Search Results:`);
//     // to see the data we get back
//     for (i in data.results){
//         let name="";
//        const finalResult = data.results[i].name;
//         console.log(finalResult + "hola cabrón");
    //    sResults.push(newResult)
    //    const $li = $("<li>")
    //    $li.text(newResult)
    //    $ul.append($li)
//     }
// })








    // document.querySelector(".search-results").addEventListener("click",(event) => {
    //     console.log(event.target)
    // } )
//     let heroId = data.results[0].id
//     $.ajax({
//         url: `https://www.superheroapi.com/api.php/${token}/${heroId}`,
//     }).then((d) => {
//         console.log(d)
//     })
// })


/* FROM HERE YOU SHOULD BE ABLE TO CLICK ON THE NAME AND THEN EITHER DO A REQUEST FOR THE ID OR STRAIGHT OUT FETCH INFO FROM SAME REQUEST, by clicking in one of those names
then it does another request that, by character ID, finds that character and displays
names, alias, first appearance and the image (more?)

if you click on the search field again it should clear the text field and when you click on the search button it should clear all the items
so it doesn’t show more than one series of results*/


