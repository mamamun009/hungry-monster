let foodName = " ";
//search btn
document.getElementById('search').addEventListener('click', () => {
    document.getElementById('infoDiv').style.display = 'none';
    document.getElementById('mainDiv').innerHTML = "";
    foodName = document.getElementById('foodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals === null || data.meals == ""){
                document.getElementById('error').style.display = 'block';
            }
            else {
                for (let i = 0; i < data.meals.length; i++) {
                    const eachData = data.meals[i];
                    const mainDiv = document.getElementById('mainDiv');
                    const subDiv = document.createElement('div');
                    const divElements = `<div onclick="clickOnDiv(${i},'${foodName}')" class="grid-item">
                                        <img src="${eachData.strMealThumb}">
                                        <h5>${eachData.strMeal}</h5></div>`
                    subDiv.innerHTML = divElements;
                    mainDiv.appendChild(subDiv);
                }
            }


        }).catch(() => {
            document.getElementById('serverError').style.display = 'block';
        });
})
let clickOnDiv = (id, foodName) => {
    document.getElementById('infoDiv').style.display = 'block';
    window.scrollTo(0, 60);
    document.getElementById('ul').innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(response => response.json())
        .then(data => {
            recipeData = data.meals[0];
            for (let i = 1; i < 15; i++) {
                let ingredients = recipeData['strIngredient' + i];
                if (!(ingredients == null || ingredients == '')) {
                    const li = document.createElement('li');
                    li.innerText = ingredients;
                    document.getElementById('ul').appendChild(li);
                }
            }
            document.getElementById('headTitle').innerText = data.meals[id].strMeal;
            document.getElementById('recipe').innerText = data.meals[id].strInstructions;
        }).catch(() => {
            document.getElementById('serverError').style.display = 'block';
            document.getElementById('infoDiv').style.display = 'none';
            document.getElementById('mainDiv').style.display = 'none';
        });
}
document.getElementById('hideDetails').addEventListener('click', () => {
    document.getElementById('infoDiv').style.display = 'none';
    window.scrollTo(0, 0);
})