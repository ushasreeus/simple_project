// Sample data for articles (normally fetched from a database)
const articles = [
    { title: "Tech Innovations", category: "Technology", content: "The latest in tech..." },
    { title: "Health Tips", category: "Health", content: "Important health advice..." },
    { title: "Travel Guide", category: "Travel", content: "Explore the world..." },
    { title: "AI in Healthcare", category: "Technology", content: "AI is revolutionizing healthcare..." }
];

// Function to filter and display results
function filterResults() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filterCategory = document.getElementById("filterCategory").value;

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchInput) || article.content.toLowerCase().includes(searchInput);
        const matchesCategory = filterCategory === "All" || article.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    displayResults(filteredArticles);
}

// Function to display the filtered results
function displayResults(filteredArticles) {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredArticles.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        filteredArticles.forEach(article => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result");

            const title = document.createElement("h3");
            title.textContent = article.title;

            const content = document.createElement("p");
            content.textContent = article.content;

            resultDiv.appendChild(title);
            resultDiv.appendChild(content);

            resultsContainer.appendChild(resultDiv);
        });
    }
}
