import React,{ useState, useEffect } from "react";

export function Influencer(props){
    const {profilePicture, name, followers, username} = props.influencer
    const [follow, setFollow] = useState(false)
    const [buttonText , setButtonText] = useState('Follow')
    const [displayAddIcon , setDisplayAddIcon] = useState('block')
    useEffect(()=>{
        if(follow != false){
            setButtonText('Following')
            setDisplayAddIcon('none')
        }else{
            setButtonText('Follow')
            setDisplayAddIcon('block')
        }
    },[follow])
    const handleFollow = ()=>{
        console.log('button clicked')
        if(follow === false){
            setFollow(true)
        }else{
            setFollow(false)
        }
    }
    return(
        <div className="flex mx-auto  p-8">
            <div className="flex-none h-14">
                <img className="rounded-full w-16 h-16" src={"/"+profilePicture } alt="profile pc" />
            </div>
                <div className="flex-auto w-64 text-left ml-12">
                    <p className="text-[16px]">{username}</p>
                    <p className="text-[14px] text-slate-500">{name}</p>
                </div>
            <div className="flex-auto w-32">
                    <button className="flex flex-row bg-blue-500 w-38 px-10 py-2 rounded text-white" onClick={handleFollow}><img style={{display:displayAddIcon}} src='/assets/icon-follow.svg'></img>  <p className="px-3">{buttonText}</p></button>
            </div>
        </div>
    )
}