import { getBusinesses } from "./database.js";
const businesses = getBusinesses()


// Define and export a function that returns the html string of all purchasing agents for the businesses
    // Declare a variable that will store the following in a new array
        // For each business (object) in the businessess property (array) of the database object -- Note: the businesses property array is stored in the variable 'businesses', which is the return value of the getBusinesses function
            // The map method will return an html string for the purchasingAgent of that business (current business in the map method iteration) andd will add the html string to the array declared at the beginning
            // HTML string for each purchasing agent will include:
                // section tag with class of "agent"
                    // h3 tag with class of "agent__name" and agent name properties
                    // div tag with class of "agent__phone"
                // Closing section tag
    // Declare a variable whose value is equal to applying the the join() method to the array of agent HTML strings (the join method joins array items into a single string with a specified character between each item - an empty string in this case)
// Return the HTML string

export const AgentList = () => {
    const agents = businesses.map(
        (business) => {
            return `
            <section class="agent">
                <h3 class="agent__name">${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
                <div class="agent__company">
                    ${business.companyName}
                </div>
                <div class="agent__phone">
                    ${business.phoneWork}
            `
        }
    )
    const agentHTML = agents.join("")
    return agentHTML
}



        // --- Original Line 8: The map method will return a copy of the purchasingAgent property (object) of that business (current business in the map method iteration)