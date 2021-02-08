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
let clickOnDiv = (id,foodName) => {
    document.getElementById('infoDiv').style.display = 'block';
    window.scrollTo(0, 150);
    document.getElementById('ul').innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(response => response.json())
        .then(data => {
            recipeData = data.meals[0];
            for (let i = 1; i < 15; i++) {
                let ingredients = recipeData['strIngredient' + i];
                if(!(ingredients==null || ingredients =='')){
                const li = document.createElement('li');
                li.innerText = ingredients;
                document.getElementById('ul').appendChild(li);
                }
            }
            document.getElementById('headTitle').innerText = data.meals[id].strMeal;
            document.getElementById('recipe').innerText = data.meals[id].strInstructions;
        })
    }
    document.getElementById('hideDetails').addEventListener('click', () =>{
        document.getElementById('infoDiv').style.display = 'none';
        window.scrollTo(0, 0);
    })
    //display ingredients, instruction and meal title on click on meal div
// let addIngrid = (data, id) => {


//     // document.getElementById('li1').innerText = data.meals[id].item;
//     // document.getElementById('li2').innerText = data.meals[id].strIngredient2;
//     // document.getElementById('li3').innerText = data.meals[id].strIngredient3;
//     // document.getElementById('li4').innerText = data.meals[id].strIngredient4;
//     // document.getElementById('li5').innerText = data.meals[id].strIngredient5;
//     // document.getElementById('li6').innerText = data.meals[id].strIngredient6;
//     // document.getElementById('li7').innerText = data.meals[id].strIngredient7;
//     // document.getElementById('li8').innerText = data.meals[id].strIngredient8;
//     // document.getElementById('li9').innerText = data.meals[id].strIngredient9;
//     // document.getElementById('li10').innerText = data.meals[id].strIngredient10;
//     // document.getElementById('headTitle').innerText = data.meals[id].strMeal;
//     // document.getElementById('recipe').innerText = data.meals[id].strInstructions;

// }
// let addInfo = (data, id, title, mealThumb) => {
//         const mealTitle = data.meals[id].strMeal;
//         document.getElementById(title).innerText = mealTitle;
//         const mealThumbSrc = data.meals[id].strMealThumb
//         document.getElementById(mealThumb).setAttribute('src', mealThumbSrc);
//     }
    // let ingrid = (id) => {
    //     document.getElementsByClassName('col').addEventListener('click', () => {
    //         let li = document.createElement('li');
    //         li.innerText = data.meals[id].strIngredient1;
    //         document.getElementById('ingredients').appendChild(li);
    //         li = document.createElement('li');
    //         li.innerText = data.meals[id].strIngredient2;
    //         document.getElementById('ingredients').appendChild(li);
    //     })
    // }
    // fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    //     .then(response => response.json())
    //     .then(data => {
    //         // callMeal('mealTitle1','mealThumb1');
    //         const mealTitle = data.meals[0].strMeal;
    //         document.getElementById('mealTitle1').innerText = mealTitle;
    //         document.getElementById('headTitle').innerText = mealTitle;
    //         const mealThumbSrc = data.meals[0].strMealThumb
    //         document.getElementById('mealThumb1').setAttribute('src', mealThumbSrc);
    //         let li = document.createElement('li');
    //         li.innerText = data.meals[0].strIngredient1;
    //         document.getElementById('ingredients').appendChild(li);
    //         //2
    //         let li2 = document.createElement('li');
    //         li2.innerText = data.meals[0].strIngredient2;
    //         document.getElementById('ingredients').appendChild(li2);
    //         //3
    //         let li3 = document.createElement('li');
    //         li3.innerText = data.meals[0].strIngredient1;
    //         document.getElementById('ingredients').appendChild(li3);
    //         //4
    //         let li4 = document.createElement('li');
    //         li4.innerText = data.meals[0].strIngredient4;
    //         document.getElementById('ingredients').appendChild(li4);
    //         //set instruction
    //         const instruction = data.meals[0].strInstructions;
    //         document.getElementById('recipe').innerText = instruction;

//         // details on click
//         document.getElementById('meal1').addEventListener('click', () => {

//             document.getElementById('info').style.display = 'block';
//         })

//     })

// addList => {
//     const ingredients = data.meals[0].strIngredient1;
//     const li = document.createElement('li');
//     li.innerText = ingredients;
//     document.getElementById('ingredients').appendChild(li);
// }
// function callMeal(mealTitle,mealThumb){
//     const mealTitleSrc = data.meals[0].strMeal;
//     document.getElementById(mealTitle).innerText = mealTitleSrc;
//     const mealThumbSrc = data.meals[0].strMealThumb
//     document.getElementById(mealThumb).setAttribute('src',mealThumbSrc);
// }   document.getElementById(mealThumb).setAttribute('src',mealThumbSrc);
// }