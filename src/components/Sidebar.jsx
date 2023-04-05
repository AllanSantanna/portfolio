import Avatar from '../img/allan.jpg';
import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  const cvUrl = `../assets/allancurriculo.pdf`;

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'allancurriculo.pdf');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Allan Paulo" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <button className="btn" onClick={downloadCV}>
        Download currículo
      </button>
      <style>
        {`
          button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </aside>
  );
};

export default Sidebar;