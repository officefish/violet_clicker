import { FC, ReactNode } from "react"
import { PagesState } from "../types/pages";

interface IMainMenu {
    activeMenuItem: PagesState, 
    setActiveMenuItem: (state:PagesState) => void
}

const MainMenu: FC<IMainMenu> = (props) : ReactNode => {

    const { activeMenuItem, setActiveMenuItem } = props

    const handleMenuItemClick = (menuItem: PagesState) => {
        setActiveMenuItem(menuItem);
    };


    return (
        <div className="w-full h-[15%] main-menu flex flex-row justify-evenly items-center">
              <MenuItem 
                label="hub" 
                active={activeMenuItem === PagesState.HUB} 
                activeSrc="/icons/png/hub_fill.png"
                inactiveSrc="/icons/png/hub.png"
                onClick={() => handleMenuItemClick(PagesState.HUB)} 
            />
            <MenuItem 
                label="task" 
                active={activeMenuItem === PagesState.TASK}
                activeSrc="/icons/png/task_fill.png"
                inactiveSrc="/icons/png/task.png" 
                onClick={() => handleMenuItemClick(PagesState.TASK)} 
            />
            <MenuItem 
                label="models" 
                active={activeMenuItem === PagesState.MODELS}
                activeSrc="/icons/png/models_fill.png"
                inactiveSrc="/icons/png/models.png" 
                onClick={() => handleMenuItemClick(PagesState.MODELS)} 
            />
            <MenuItem 
                label="viewers" 
                activeSrc="/icons/png/viewers_fill.png"
                inactiveSrc="/icons/png/viewers.png"
                active={activeMenuItem === PagesState.VIEWERS} 
                onClick={() => handleMenuItemClick(PagesState.VIEWERS)} 
            />
        </div>
    )
}

interface IMenuItem {
    label: string
    active: boolean
    inactiveSrc: string
    activeSrc: string
    onClick?: () => void
}

const MenuItem: FC<IMenuItem> = (props) : ReactNode => {
    const { label, active, onClick, activeSrc, inactiveSrc } = props
    // ${active ? 'bg-blue-500' : 'bg-slate-300'}
    return (
        <div 
            className={`
                cursor-pointer
                menu-item 
                flex flex-col 
                gap-1 
                items-center 
                justify-center 
            `} 
            onClick={onClick}
        >
            <img src={active ? activeSrc : inactiveSrc} alt={label} />
            {active && <label>{label}</label>}
        </div>
    );
}

export default MainMenu