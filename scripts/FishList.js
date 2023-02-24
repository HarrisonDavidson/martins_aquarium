// Import the function that returns a copy of the fish array
import {} from ''

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = invokeTheRightFunctionHere()

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${singleFish.image}" /></div>
            <div class="fish__name">${singleFish.name}</div>
            <div class="fish__species">${singleFish.species}</div>
            <div class="fish__length">${singleFish.length}</div>
            <div class="fish__location">${singleFish.location}</div>
            <div class="fish__diet">${singleFish.food}</div>
        </section>
`
    }

    return htmlString
}


// Import the FishList function from the correct module
import {} from ''

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("insert selector here")


parentHTMLElement.innerHTML = FishList()