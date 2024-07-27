import { FC, ReactNode, useState } from "react"
import { CoverImage } from "../styled"


const Hub: FC = (/*props*/) : ReactNode => {

    const [modelSrc,] = useState("/models/png/luna.png")

    return (
        <div className="flex flex-col w-full h-full justify-start items-center">
            <UserHeader />
            <div className="flex flex-row px-4 w-full gap-4">
                <UserBalance />
                <UserModel />
            </div>
            <div className="w-full h-full">
                <div className="relative w-full h-[90%]">
                    <CoverImage $background={modelSrc} />
                    <div className="absolute right-8 bottom-8">
                        <button className="boost-btn">Boost</button>
                    </div>
                </div>
                <div className="w-full h-[10%] flex flex-row p-2 pr-8 justify-between">
                    <img className="h-12 w-[56%]" src="/mockup/png/energy-slider.png" alt="user avatar" />
                    <button className="energy-btn">3451<span>/5000</span></button>
                </div>
            </div>  
        </div>
    )
}
export default Hub

const UserHeader: FC = (/*props*/) : ReactNode => {
    const [fullName,] = useState("Andew Anderson")
    const [greeting,] = useState("Hello")

    return (
        <div className="flex items-start justify-start w-full flex-row p-4">
            <div className="flex items-center justify-center h-[64px] w-[64px] pr-4">
                <div className="user-avatar">
                    <img src="/icons/png/brand.png" alt="user avatar" />
                </div>
            </div>
            <div className="user-header">
                <h3>{greeting}</h3>
                <h2>{fullName}</h2>
            </div>
        </div>
    )
}

const UserBalance: FC = (/*props*/) : ReactNode => {
    const [balance,] = useState(8430.12)

    return (
        <div className="stats flex flex-col items-start justify-center h-[64px] w-full p-3">
          <label>Balance</label>
          <div className="stats-value flex flex-row gap-2">
                <div className="stats-currency">
                    <img src="/icons/png/brand.png" alt="user avatar" />
                </div>
            {balance}
          </div>
        </div>
    )
}

const UserModel: FC = (/*props*/) : ReactNode => {
    //const [modelId,] = useState(1)
    const [modelName,] = useState("Luna")

    return (
        <div className="stats flex flex-col items-start justify-center h-[64px] w-full p-3">
          <label>Model</label>
          <div className="stats-value model-value">{modelName}</div>
        </div>
    )
}

