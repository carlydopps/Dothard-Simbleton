import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

export const BusinessList = () => {
    const businesses = getBusinesses()
    let businessListHTML = "<h1>Active Businesses</h1>"

    // Iterating through each business (parameter) within the businessArray
        // For each business, add the following to the HTML string
            // Section tag with class of "business"
                // h3 tag with class of "business_name" and business name property
                // div tag with class "business_address" and business address properties
            // Close section tag

    businesses.forEach(
        (business) => {
            businessListHTML += `
            <section class="business">
                <h3 class="business__name">${business.companyName}</h3>
                <div class="business__address">
                    ${business.addressFullStreet}
                    ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                </div>
            </section>
            `
        }
    )
    return businessListHTML
}

// Add this event listener to the element in the document with id of "content"
// Event type is "keypress"
// Parameter is keyPressEvent
    // Declare a variable whose value is equal to the element in the document with class of "foundBusinesses"
    // If the charCode property of the keyPressEvent object is 13 (In other words, "if you pressed enter" because the enter key has a charCode of 13)
        // Use the find method to find the business with a companyName property equal to or partially equal to the user input
document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")
                
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

                // Declare a variable whose value is equal to the first business found via applying the find() method to the businesses array that makes the condition true - the condition is that the companyName property of the current business object of the .find() interation must include the string produced by the clickEvent (the string of user input)
                    const foundBusiness = businesses.find(
                        (business) => business.companyName.includes(keyPressEvent.target.value)
                    )

                // If foundBusiness does not equal undefined (using this as a double-check so that it doesn't break if the user input is not capitalized)
                // Or could try doing an if else and using a try again message if it is undefined
                    // Add this html string to the companySearchResultArticle (the element with class of "foundBusinesses") on the index.html page for the business that was found above
                        // HTML should includd
                            // h3 tag with company name
                            // div tag for company address
                    if (foundBusiness !== undefined) {
                        companySearchResultArticle.innerHTML = `
                        <h3>${foundBusiness.companyName}</h3>
                        <div>
                            ${foundBusiness.addressFullStreet}
                            ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                        </div>
                        `
                    } else {
                        companySearchResultArticle.innerHTML = `
                        No matching results. Please try entering the compnay name again. Search results are case-sensitive.`
                    }
                }
        });