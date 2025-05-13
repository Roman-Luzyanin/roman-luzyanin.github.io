const menu = document.createElement('div');
menu.classList.add('menu');

const ingredients = ['Fresh meat', '2 tbsp olive oil', '3 garlic cloves (minced)', '¼ cup sun-dried tomatoes (chopped)', '1 cup heavy cream', 'Fresh basil', 'Salt & Pepper'];

const title1 = "Hearty Steak and Eggs Breakfast";
const title2 = "Za'atar Garlic Salmon Recipe";
const title3 = "Beef and Vegetable Kabobs with Lemon Herb Marinade";
const title4 = "Delicious Sausage Meals Recipes";

function dishDescriotion(dish, title) {
    const text = document.createElement('div');
    text.classList.add('text');
    dish.appendChild(text);

        const h3 = document.createElement('h3');
        h3.textContent = title;
        text.appendChild(h3);

        const ulTitle = document.createElement('p');
        ulTitle.textContent = 'Ingredients:';
        const ul = document.createElement('ul');
        for (let i = 0; i < ingredients.length; i++) {
            const li = document.createElement('li');
            li.textContent = ingredients[i];
            ul.appendChild(li);
        }
        text.appendChild(ulTitle);
        text.appendChild(ul);
            
        const titlePara = document.createElement('p');
        titlePara.textContent = 'Method:';
        const para = document.createElement('p');
        para.textContent = "Heat olive oil in a skillet and sear meat on both sides. Set aside. Sauté garlic until fragrant. Add heavy cream, Parmesan, and sun-dried tomatoes. Stir until creamy. Simmer for 10-15 minutes. Garnish with fresh basil.";
        text.appendChild(titlePara);
        text.appendChild(para);
}

    const dish1 = document.createElement('div');
    dish1.classList.add('dish');
        import image from "./images/menu/pork.png";
        const menuImage = document.createElement('img');
        menuImage.src = image;
        dish1.appendChild(menuImage);
        dishDescriotion(dish1, title1)
 
    const dish2 = document.createElement('div');
    dish2.classList.add('dish');            
        dishDescriotion(dish2, title2);
        import image2 from "./images/menu/fish.png";
        const menuImage2 = document.createElement('img');
        menuImage2.src = image2;
        dish2.appendChild(menuImage2);

    const dish3 = document.createElement('div');
    dish3.classList.add('dish');            
        import image3 from "./images/menu/beef.png";
        const menuImage3 = document.createElement('img');
        menuImage3.src = image3;
        dish3.appendChild(menuImage3);
        dishDescriotion(dish3, title3);

    const dish4 = document.createElement('div');
    dish4.classList.add('dish');
    dishDescriotion(dish4, title4);
    import image4 from "./images/menu/sausages.png";
    const menuImage4 = document.createElement('img');
    menuImage4.src = image4;
    dish4.appendChild(menuImage4);

menu.appendChild(dish1);
menu.appendChild(dish2);
menu.appendChild(dish3);
menu.appendChild(dish4);

export { menu };
