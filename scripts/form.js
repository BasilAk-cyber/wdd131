const currentYear = new Date().getFullYear()
document.getElementById("currentyear").textContent = currentYear

  // Set last modified date in footer
const lastModified = document.lastModified
document.getElementById("lastmodified").textContent = lastModified

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


// Populate select element
const selectElement = document.getElementById("product-select");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
    // Populate select element in index.html

    // Handle review.html logic
    const reviewDetails = document.getElementById("review-details");
    const reviewCountElement = document.getElementById("review-count");
    if (reviewDetails && reviewCountElement) {
        const params = new URLSearchParams(window.location.search);
        const productName = params.get("product");
        const rating = params.get("rating");
        const installDate = params.get("installDate");

        if (productName && rating && installDate) {
            // Increment review counter
            let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
            reviewCount += 1;
            localStorage.setItem("reviewCount", reviewCount);

/*             // Display review details
            const product = products.find(p => p.name === productName);
            reviewDetails.innerHTML = `
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Rating:</strong> ${"★".repeat(rating)}</p>
                <p><strong>Install Date:</strong> ${installDate}</p>
                <p><strong>Features:</strong> ${params.getAll("features").join(", ") || "None"}</p>
                <p><strong>Review:</strong> ${params.get("review") || "None"}</p>
                <p><strong>Name:</strong> ${params.get("userName") || "Anonymous"}</p>
                ${product ? `<p><strong>Average Rating:</strong> ${product.averagerating}</p>` : ""}
            `; */

            // Display review count
            reviewCountElement.textContent = `Number of Reviews Submitted: ${reviewCount}`;
        } else {
            // Display error for invalid submission
            reviewDetails.innerHTML = "<p>Error: Invalid review submission.</p>";
            reviewCountElement.textContent = `Number of Reviews Submitted: ${localStorage.getItem("reviewCount") || 0}`;
        }
    }
});