import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import SocialNeteorks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Curriculum from '../assets/raissacurriculo.png'

const Sidebar = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = Curriculum
    link.download = 'raissacurriculo.'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Raissa Marques" />
      <p className="title">Desenvolvedor</p>
      <SocialNeteorks />
      <InformationContainer />
      <a href={Curriculum} download="raissacurriculo.png" className="btn" onClick={handleDownloadCV}>
        Download currículo
      </a>
      <style>
        {`
          .btn:hover {
            cursor: pointer;
          }
        `}
      </style>
    </aside>
  )
}

export default Sidebar