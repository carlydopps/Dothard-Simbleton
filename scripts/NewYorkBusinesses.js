import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

// Define a function to filter through each business and generate a list of businesses that have an addressStateCode property equal to "NY"
const findingNewYork = (business) => {
    if (business.addressStateCode === "NY") {
        return true
    }
    return false
}

// Define and export a function to generate an HTML string for all New York businesses
    // Declare a variable whose value is equal to the array produced from the filter method iterating through the businesses array and storing only business objects that return true when passed into the findingManufacturing function
    // Declare a variable to store the html string of the businesses
    // Iterate the array of businesses produced using the forEach() method
        // For each business, add to the following to the html string
        // section tag with class of "NY__business"
            // h3 tag with class of "NY__business__name" and company name property
            // div tag with class of "NY__business__address"
        // Closing section tag
    // Return the HTML string

export const NewYorkBusinesses = () => {
    const filteredNYBusinesses = businesses.filter(findingNewYork)
    let newYorkHTML = ""

    // For each business in filteredNYBusinesses
    filteredNYBusinesses.forEach(
        (business) => {
            newYorkHTML += `
            <section class="NY__business">
                <h3 class="NY__business__name">${business.companyName}</h3>
                <div class="NY__business__address">
                    ${business.addressFullStreet}
                    ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                </div>
            </section>
            `
        }
    )
    return newYorkHTML
}