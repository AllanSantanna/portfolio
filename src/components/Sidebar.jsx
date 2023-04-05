import Avatar from '../img/allan.jpg'
import '../styles/components/sidebar.sass'
import SocialNeteorks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Curriculum from '../assets/allancurriculo.pdf'

const Sidebar = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = Curriculum
    link.download = 'allancurriculo.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Allan Paulo" />
      <p className="title">Desenvolvedor</p>
      <SocialNeteorks />
      <InformationContainer />
      <a href={Curriculum} download="allancurriculo.pdf" className="btn" onClick={handleDownloadCV}>
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