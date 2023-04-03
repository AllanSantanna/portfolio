import Avatar from '../img/allan.jpg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Allan Paulo" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar