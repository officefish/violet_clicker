import './App.css'
import { FC, ReactNode, useState } from "react"
import Hub from './pages/hub'
import MainMenu from './ui/menu'
import { PagesState } from './types/pages'
import Task from './pages/task'
import Models from './pages/models'
import Viewers from './pages/viewers'
//import { InitData, retrieveLaunchParams, useInitData, useMiniApp, User, useViewport } from '@tma.js/sdk-react';


function App() {

  //const miniApp = useMiniApp(true);
	//const initData = useInitData(true);
	//const viewport = useViewport(true);

  
  const [pageState, setPageState] = useState<PagesState>(PagesState.HUB);


  return (
    <main className="w-screen h-screen z-20 overflow-hidden">
      <div className="w-full h-[85%]">
        <Content page={pageState} />
      </div>
      <MainMenu 
      activeMenuItem={pageState} 
      setActiveMenuItem={setPageState} />
    </main>  
  )
}

export default App


interface IContent {
  page: PagesState
}

const Content: FC<IContent> = (props) : ReactNode => {
  const { page } = props
  switch (page) {
    case PagesState.HUB:
      return <Hub />;
    case PagesState.TASK:
      return <Task />;
    case PagesState.MODELS:
      return <Models />;
    case PagesState.VIEWERS:
      return <Viewers />;
    default:
      return <Hub />;
}
}
