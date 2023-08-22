const Home = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
};

function createHome(){
    const div = document.createElement('div');
    div.className = 'container'

    div.appendChild(images());
    div.appendChild(heading());
    div.appendChild(text());
    return div;
}

const images = () => {
  const image = document.createElement("img");
  image.src = "../dist/Assets/pexels-ash-376464.jpg";
  image.alt = "food";
  return image;
};

const heading = () => {
  const header = document.createElement("h1");
  header.className = "home-header";
  header.textContent = "Explore Culinary Excellence";
  return header;
};

const text = () => {
  const paragraph = document.createElement("p");
  paragraph.className = "home-paragraph";
  paragraph.innerText =
    "Indulge your senses in a gastronomic journey like no other at Flavors Delight. Nestled in the heart of the city, our restaurant offers an exquisite fusion of flavors, an inviting ambiance, and top-notch service that promises an unforgettable dining experience.";
  return paragraph;
};

export default Home;
