import Avatar from '../img/allan.jpg'
import '../styles/components/sidebar.sass'
import SocialNeteorks from './SocialNetworks'
import InformationContainer from './InformatonContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Allan Paulo" />
      <p className="title">Desenvolvedor</p>
      <SocialNeteorks />
      <InformationContainer />
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar