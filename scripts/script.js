// Form Elements
const addIngredientsBtn = document.querySelector('.add-ingredients__btn');
const addToMealsBtn = document.querySelector('.add-to-meals__btn');
var formFields = document.querySelector('.form-data__container');

// Event Listeners
addIngredientsBtn.addEventListener('click', addIngredients);
addToMealsBtn.addEventListener('click', addToMeals);

function addIngredients(e) {
    e.preventDefault();
    const addIngredientRow = `<span></span>
    <div>
        <input type="text" required>
        <label for="quantity">Qty</label>
        <select type="select" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>`;

    formFields.innerHTML += addIngredientRow;
}

function addToMeals() {
    
}
