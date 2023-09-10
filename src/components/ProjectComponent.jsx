import "./ProjectComponent.css";
import Card from "react-bootstrap/Card";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectComponent = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A weather app is a great React project for beginners, as it involves fetching and displaying data from an API. You can use a weather API such as OpenWeatherMap to get the weather data for a specific location. Your app should display the current weather, temperature, and weather forecast for the next few days.",
      image: "https://i.ytimg.com/vi/73e6wTyxbSg/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Recipe Search App",
      description:
        "A recipe search app allows users to search for recipes based on ingredients, dish name, or cuisine. You can use a recipe API, such as Spoonacular, to fetch the recipe data. Your app should display a list of recipes with images, titles, and short descriptions, and allow users to click on a recipe to view more details like ingredients and instructions.",
      image:
        "https://i0.wp.com/codingtorque.com/wp-content/uploads/2023/02/1-24.png?fit=1280%2C720&ssl=1",
    },
    {
      id: 3,
      title: "Social Media App",
      description:
        "A weather app is a great React project for beginners, as it involves fetching and displaying data from an API. You can use a weather API such as OpenWeatherMap to get the weather data for a specific location. Your app should display the current weather, temperature, and weather forecast for the next few days.",
      image:
        "https://graphicsfamily.com/wp-content/uploads/edd/2022/12/Free-Social-Media-Web-Banner-Design-Template-scaled.jpg",
    },
    {
      id: 4,
      title: "E-Commerce App",
      description:
        "An e-commerce app is a more complex project that allows users to browse products, add them to a shopping cart, and complete the checkout process. You can create a mock API to fetch product data or use an e-commerce API like Commerce.js to get real product data.",
      image: "https://i.ytimg.com/vi/y66RgYMAgSo/maxresdefault.jpg",
    },
  ];
  return (
    <div className="project-section" id="projectSection">
      <h2 className="project-heading">Featured Projects</h2>
      <div className="row">
        {projects.map((item) => (
          <div className="col-sm-6" key={item.id}>
            <Card
              key={item.id}
              style={{
                height: "520px",
                margin: "11.5px 0px",
                border: "rgb(0, 72, 0)",
                borderRadius: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  borderRadius: "15px",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  {item.description.length > 145
                    ? `${item.description.substring(0, 145)}...`
                    : item.description.substring(0, 145)}
                </Card.Text>
                <Card.Text>
                  <a href="#" className="see-more">
                    See more <HiArrowNarrowRight size={20} />
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
