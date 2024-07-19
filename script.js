document.addEventListener("DOMContentLoaded", () => {
  const cocktailList = document.getElementById("cocktailList");
  const addCocktailForm = document.getElementById("addCocktailForm");

  const fetchCocktails = async () => {
    try {
      const response = await fetch("https://project-backend-navy.vercel.app/cocktails");
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
            <p><strong>Ingredients:</strong></p>
            <ul>
              ${formatListItems(cocktail.ingredients)}
            </ul>
            <p><strong>Instructions:</strong></p>
            <ul>
              ${formatListItems(cocktail.instructions)}
            </ul>
          </div>
        `
      )
      .join("");
  };

  const formatListItems = (itemsString) => {
    const itemsArray = itemsString.split(",").map(item => `<li>${item.trim()}</li>`);
    return itemsArray.join("");
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
      const response = await fetch("https://project-backend-navy.vercel.app/cocktails", {
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
