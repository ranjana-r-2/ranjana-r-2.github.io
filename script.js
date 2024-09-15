document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = button.getAttribute('data-recipe');
            const recipeDetails = document.getElementById(recipeId);
            
            // Toggle visibility of the recipe details
            if (recipeDetails) {
                recipeDetails.classList.toggle('active');
            }
        });
    });
});
