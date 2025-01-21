import React from "react";
import {BsGithub} from 'react-icons/bs'
import GoogleSheet from '../../assets/google-sheet.png'
import ReactCalculator from '../../assets/react-calculator.png'
import WeatherApi from '../../assets/weather-api.png'
import AlarmWebApp from '../../assets/alarm-web-app.png'
import RecipeCataloge from '../../assets/recipe-cataloge.png'
import YoutubeClone from '../../assets/Youtube-clone.png'
import "./portfolio.css";
import podcastpng from "../../assets/podcast.png"

const projectData = [
  {
    id: 8,
    title: "Podcast Platform",
    image: podcastpng,
    github: "https://github.com/VaibhavMali001/podcasts-react-app",
    demo: "https://podcast-react-vaibhav.netlify.app/",
  },
  {
    id: 2,
    title: "React Calculator",
    image: ReactCalculator,
    github: "https://github.com/VaibhavMali001/calculator-react",
    demo: "https://react-calculator-vaibhav.netlify.app/",
  },
  {
    id: 7,
    title: "Youtube Clone",
    image: YoutubeClone,
    github: "https://github.com/VaibhavMali001/youtube-clone-f3",
    demo: "https://vaibhav-youtube-clone.netlify.app/",
  },
  {
    id: 1,
    title: "Google sheet clone",
    image: GoogleSheet,
    github: "https://github.com/VaibhavMali001/google-shhet-clone",
    demo: "https://vaibhavmali-excelbook.netlify.app/",
  },
 
  {
    id: 3,
    title: "Weather API",
    image: WeatherApi,
    github: "https://github.com/VaibhavMali001/weather-api",
    demo: "https://vaibhavmali-weatherr-api.netlify.app/",
  },
  {
    id: 4,
    title: "Alarm Web App",
    image: AlarmWebApp,
    github: "https://github.com/VaibhavMali001/alarm-web-app-f3c1",
    demo: "https://vaibhav-alarm-web-app.netlify.app/",
  },
  {
    id: 5,
    title: "Recipe Cataloge",
    image: RecipeCataloge,
    github: "https://github.com/VaibhavMali001/module-2-contest-recipe-catalogue",
    demo: "https://vaibhav-recipe-cataloge.netlify.app/",
  },
 

];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-page">
      <h5>//My Recent Work</h5>
      <h2>&lt;Portfolio <code>/&gt;</code></h2>

      <div className="container portfolio__container">
        {projectData.map(({id, title, image, github, demo}) =>{
                return (
                  <article key={id} className="portfolio__item">
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3 className="portfolio-title">{title}</h3>
                  <div className="portfolio_item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                    >
                     <BsGithub size={25}/>
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
                )
        })}
      </div>
    </section>
  );
}

export default Portfolio;
