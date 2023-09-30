import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import commerce from "../images/commerce.png";
import web from "../images/web.png";
import avatar from "../images/avatar.png";
import projectOne from "../images/portfolios/acme-project.jpg";
import projectTwo from "../images/portfolios/stripe-clone.png";
import projectThree from "../images/portfolios/slider-reviews.png";
import projectFour from "../images/portfolios/grocery-bud.png";

export const socials = [
  {
    id: 1,
    link: "mailto:hazimzahba@gmail.com",
    icon: <FaEnvelope />,
  },

  {
    id: 2,
    link: "https://www.linkedin.com/in/izzul-zahba",
    icon: <FaLinkedin />,
  },

  {
    id: 3,
    link: "https://github.com/izie-dushara",
    icon: <FaGithub />,
  },
];

export const projects = [
  {
    id: 1,
    image: projectOne,
    title: "Acme Rocket Simple Website",
    github: "https://github.com/izie-dushara/acme_rockets",
    demo: "https://acme-rockets-mal.onrender.com/",
  },
  {
    id: 2,
    image: projectTwo,
    title: "Stripe Landing Page Clone",
    github: "https://github.com/izie-dushara/stripe-landin-clone",
    demo: "https://stripe-clone.onrender.com",
  },
  {
    id: 3,
    image: projectThree,
    title: "Reviews | Auto Slider",
    github: "https://github.com/izie-dushara/slider-project",
    demo: "https://reviews-slider.onrender.com/",
  },
  {
    id: 4,
    image: projectFour,
    title: "CRUD Grocery List",
    github: "https://github.com/izie-dushara/grocery-bud/tree/main",
    demo: "https://grocery-bud-n4ir.onrender.com/",
  },
];

export const services = [
  {
    id: 1,
    image: commerce,
    title: "E-Commerce Website",
  },

  {
    id: 2,
    image: web,
    title: "Web Development",
  },
];

export const testimonials = [
  {
    id: 1,
    image: avatar,
    client: "Arwin Kumar",
    comment:
      "He is a diligent and hardworking person. It's a matter of time before he will become good at this.",
  },

  {
    id: 2,
    image: avatar,
    client: "Hameem",
    comment:
      "That's the spirit, Izie. Aim higher in learning the full-stack and I will be there if you have any questions to ask.",
  },

  {
    id: 3,
    image: avatar,
    client: "Edy Bashar",
    comment:
      "Your knowledge is still low, but with time you will grow your knowledge. It's improvement over perfection after all.",
  },
];