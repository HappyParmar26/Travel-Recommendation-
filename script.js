function searchPlace() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    if(input === "beach") {
        results.innerHTML = `
        <h2>Beach Recommendations</h2>
        <div class="content">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width="300">
            <p><strong>Maldives Beach</strong> - Crystal clear water and luxury resorts.</p>

            <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" width="300">
            <p><strong>Goa Beach</strong> - Famous for nightlife and water sports.</p>
        </div>`;
    }
    else if(input === "temple") {
        results.innerHTML = `
        <h2>Temple Recommendations</h2>
        <div class="content">
            <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220" width="300">
            <p><strong>Kedarnath Temple</strong> - Spiritual Himalayan destination.</p>

            <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41" width="300">
            <p><strong>Somnath Temple</strong> - Historic temple in Gujarat.</p>
        </div>`;
    }
    else if(input === "country") {
        results.innerHTML = `
        <h2>Country Recommendations</h2>
        <div class="content">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" width="300">
            <p><strong>Switzerland</strong> - Beautiful mountains and lakes.</p>

            <img src="https://images.unsplash.com/photo-1526481280691-3c469f55c16b" width="300">
            <p><strong>Japan</strong> - Technology and traditional culture.</p>
        </div>`;
    }
    else {
        results.innerHTML = "<h3>No results found. Try beach, temple, or country.</h3>";
    }
}