document.addEventListener("DOMContentLoaded", () => {
  const cocktailList = document.getElementById("cocktailList");
  const addCocktailForm = document.getElementById("addCocktailForm");

  const fetchCocktails = async () => {
    try {
      const response = await fetch("https://project-backend-navy.vercel.app/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const cocktails = await response.json();
      displayCocktails(cocktails);
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    }
  };

  const displayCocktails = (cocktails) => {
    cocktailList.innerHTML = cocktails
      .map(
        (cocktail) => `
          <div class="cocktail">
            <h2>${cocktail.name}</h2>
            <img src="${cocktail.image}" alt="${cocktail.name}" class="cocktail-image">
            <p><strong>Ingredients:</strong> ${cocktail.ingredients}</p>
            <p><strong>Instructions:</strong> ${cocktail.instructions}</p>
          </div>
        `
      )
      .join("");
  };

  addCocktailForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(addCocktailForm);
    const newCocktail = {
      name: formData.get("cocktailName"),
      ingredients: formData.get("cocktailIngredients"),
      instructions: formData.get("cocktailInstructions"),
      image: formData.get("cocktailImage"), 
    };

    try {
      const response = await fetch("https://project-backend-navy.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCocktail),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchCocktails(); 
      addCocktailForm.reset(); 
    } catch (error) {
      console.error("Error adding cocktail:", error);
    }
  });

  fetchCocktails(); 
});
