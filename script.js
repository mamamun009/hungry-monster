//search btn
document.getElementById('search').addEventListener('click', () => {
    document.getElementById('infoDiv').style.display = 'none';
    document.getElementById('mainDiv').innerHTML = "";
    // document.getElementById('recommend').style.display = 'none';
    // document.getElementById('searchDiv').style.display = 'block';
    const foodName = document.getElementById('foodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                const eachData = data.meals[i];
                const mainDiv = document.getElementById('mainDiv');
                const subDiv = document.createElement('div');
                const divElements = `<div onclick="clickOnDiv(${i},'${foodName}')" class="grid-item">
                                    <img src="${eachData.strMealThumb}">
                                    <h5>${eachData.strMeal}</h5></div>`
                subDiv.innerHTML = divElements;
                mainDiv.appendChild(subDiv);
                // console.log(subDiv);
            }

        })
})
let clickOnDiv = (id, foodName) => {
    document.getElementById('infoDiv').style.display = 'block';
    window.scrollTo(0, 150);
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
        })
}
document.getElementById('hideDetails').addEventListener('click', () => {
    document.getElementById('infoDiv').style.display = 'none';
    window.scrollTo(0, 0);
})