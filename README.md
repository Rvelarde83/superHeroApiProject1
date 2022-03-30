

Superhero API

User:

Opens website, finds a search box
Types name of Superhero, clicks search, once clicking, search box erases itself
Gets options of names (different characters that have similar names)
clicks on whichever seems right
gets info on that specific character and an image
goes back to the search box, and when you search for another item, by clicking on the search box it cleans the screen so you can get a fresh look and display the results of the new search



Input box, greeting, instruction etc
I need a function that calls the API and creates the field for search results that are going to be displayed once first search has been init
I need another function that works with whatever name the user clicked on, function should know what name is that, grab that, put it in another API call (maybe the same one?)
and retrieve info on the character and the picture...
then the steps to clean the screen
then the css and styling


going into sequentail ajax calls, how to handle them

No need for sequential $.ajax calls, the first call to the api, using the name of the character offers an object that has withing it all the info that you would eventually get if you performed the call using the character id, so no need to do that. Once the first call has been done, all the info necessary can be extracted from there.

Thinking about adding a key hit, so after typing on the input box you just hit "enter" and you get the results anyway.
Also adding the alt quality to the pictures////
another thing would be to click on the picture and opening it on a separate window on its own**


https://rvelarde83.github.io/superHeroApiProject1/