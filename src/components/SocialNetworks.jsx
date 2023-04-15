import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin", icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/raissa-marques-921201177/"
  },
  {
    name: "github", icon: <FaGithub />,
    url: "https://github.com/Raissatkm/"
  },
  {
    name: "instagram", icon: <FaInstagram />,
    url: "https://www.instagram.com/raissa_tkm/"
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;