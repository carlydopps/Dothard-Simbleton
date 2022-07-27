import { getBusinesses } from "./database.js";
const businesses = getBusinesses()

// Define a function to filter through each business and generate a list of businesses that have a companyIndustry property equal to "Manufacturing"
const findingManufacturing = (business) => {
    if (business.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}

// Define and export a function to generate an HTML string for all manufacturing businesses
    // Declare a variable whose value is equal to the array produced from the filter method iterating through the businesses array and storing only business objects that return true when passed into the findingManufacturing function
    // Declare a variable to store the html string of the businesses
    // Iterate the array of businesses produced using the forEach() method
        // For each business, add to the following to the html string
        // section tag with class of "manufacturing__business"
            // h3 tag with class of "manufacturing__business__name" and company name property
            // div tag with class of "manufacturing__business__address"
        // Closing section tag
    // Return the HTML string

export const ManufacturingBusinesses = () => {
    const filteredManufacturing = businesses.filter(findingManufacturing)
    let manufacturingHTML = ""

    // For each business in the filteredManufacturing array
    filteredManufacturing.forEach(
        (business) => {
            manufacturingHTML += `
            <section class="manufacturing__business">
                <h3 class="manufacturing__business__name">${business.companyName}</h3>
                <div class="manufacturing__business__address">
                    ${business.addressFullStreet}
                    ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                </div>
            </section>
            `
        }
    )
    return manufacturingHTML
}