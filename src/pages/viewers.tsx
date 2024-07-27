import { FC, ReactNode, useState } from "react"

interface User {
    name: string
    avatar: string
    numTaps: number
    active: boolean
    percents: number
    bonus: number
}

type Users = User[];

const mockUsers = [
    {
        name: "Kye",
        avatar: "/models/png/a1.png",
        numTaps: 751,
        active: false,
        percents: 5,
        bonus: 250
    },
    {
        name: "Josh",
        avatar: "/models/png/a2.png",
        numTaps: 751,
        active: true,
        percents: 5,
        bonus: 500
    },
    {
        name: "Ajit",
        avatar: "/models/png/a3.png",
        numTaps: 211,
        active: false,
        percents: 5,
        bonus: 1000
    },
    {
        name: "DeShawn",
        avatar: "/models/png/a4.png",
        numTaps: 211,
        active: true,
        percents: 5,
        bonus: 1000
    },

] as Users

const Viewers: FC = (/*props*/) : ReactNode => {

    const [referal,] = useState("link/ref=userandranders03Hf72nf5Nfa941412") 
    const [numFriends,] = useState(231) 

    const [numLine,] = useState(1) 

    const [friends,] = useState(mockUsers)

    return (
        <div className="page pt-4 flex flex-col w-full h-full justify-start items-center">
            <h2>Friends</h2>
            <div className="mt-2 stats px-2 pb-2 w-[90%]">
                <h5 className="pt-2 !text-center">Your referal link</h5>
                <div className="flex flex-row gap-2 px-4 py-2 items-center justify-center">
                    <div>
                      <input className="stats-input" type="text" value={referal}></input>
                    </div>
                    <div className="sm-square-btn flex items-center justify-center">
                        <img className="w-[26px] h-[26px]" src="/icons/png/tabler_copy.png" alt="copy referal" />
                    </div>
                    <div className="sm-square-btn flex items-center justify-center">
                         <img className="w-[26px] h-[26px]" src="/icons/png/tabler_share.png" alt="share referal" />
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="mt-4 stats px-4 w-[90%] flex flex-row justify-between items-center">
                <div className="sm-square-btn-transparent flex items-center">
                    <img className="w-[26px] h-[26px]" src="/icons/png/arrows_left_fill.png" alt="left arrows" />
                </div>
                <div className="flex flex-col pt-2">
                  <div className="stats-friends">Friends: {numFriends}</div>
                  <div className="stats-line">Line {numLine}</div>
                </div>
                <div className="sm-square-btn-transparent flex items-center">
                   <img className="w-[26px] h-[26px]" src="/icons/png/arrows_right_fill.png" alt="right arrows" />
                </div>
            </div>
            <div className="mt-4 w-[90%] flex flex-col gap-4">
                {friends.map((friend, i) => <UserItem key={i} user={friend} />)}
            </div>
        </div>
    )
}
export default Viewers


interface UserItemProps {
    user: User
}


const UserItem: FC<UserItemProps> = (props) : ReactNode => {
    const { user } = props
    
    return <div className="w-full flex flex-row justify-between h-[52px]">
        <div className="flex flex-row gap-2 items-center">
            <img src={user.avatar} alt={user.name} />
            <div className="flex flex-col">
                <div className="sm-user-name">{user.name}</div>
                <div className="stats-percents">{user.percents}%</div>
            </div>
        </div>
        <div>+{user.bonus}</div>
    </div>
}