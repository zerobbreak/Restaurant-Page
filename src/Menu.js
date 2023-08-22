const createMenuItem = (imageSrc, altText, title, description) => {
    // Create the main container div for a menu item
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "Menu-card";
  
    // Create the image element
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = altText;
  
    // Create the heading element
    const titleHeading = document.createElement("h2");
    titleHeading.className = "menu-heading";
    titleHeading.textContent = title;
  
    // Create the paragraph element for description
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className = "menu-text";
    descriptionParagraph.textContent = description;
  
    // Append elements to the menu item container
    menuItemDiv.appendChild(image);
    menuItemDiv.appendChild(titleHeading);
    menuItemDiv.appendChild(descriptionParagraph);
  
    return menuItemDiv;
  };
  
  const createMenu = () => {
    const menuContainerDiv = document.createElement("div");
    menuContainerDiv.className = "Menu-container";
  
    // Define menu item data
    const menuItems = [
      {
        imageSrc: "../dist/Assets/pexels-horizon-content-3763847.jpg",
        altText: "Salmon",
        title: "Salmon",
        description: "Delicious sea food that is salty but sweet on the tongue",
      },
      {
        imageSrc: "../dist/Assets/pexels-kleine-beyers-2181151.jpg",
        altText: "Stir Fry",
        title: "Stir Fry",
        description: "Mixture of vegetables and meat combined with other foods is the stir fry of the century",
      },
      {
        imageSrc: "../dist/Assets/pexels-nataliya-vaitkevich-5792329.jpg",
        altText: "Pizza",
        title: "Pizza",
        description: "The margherita pizza is to die for as its taste and flavor is out of this world",
      },
      {
        imageSrc: "../dist/Assets/pexels-shawkat-galib-12362922.jpg",
        altText: "Burger",
        title: "Burger",
        description: "The Burger is one of the most savory meals a restaurant can have on its menu",
      },
    ];
  
    // Create and append menu items
    menuItems.forEach((item) => {
      const menuItem = createMenuItem(item.imageSrc, item.altText, item.title, item.description);
      menuContainerDiv.appendChild(menuItem);
    });
  
    return menuContainerDiv;
  };
  
  const clearContent = (element) => {
    element.textContent = "";
  };
  
  const Menu = () => {
    const main = document.getElementById("main");
    clearContent(main);
    main.appendChild(createMenu());
  };
  
  export default Menu;
  