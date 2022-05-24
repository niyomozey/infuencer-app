import React from "react";
import influencers from "../data/follower-suggestions";
import { Influencer } from "./Influencer";
export function Influencers(){
    return(
        <div>
            <div className="container mx-auto w-1/3 shadow-2xl">
                {influencers.map((element, index)=>(
                    <Influencer key={ Math.random().toString(36).substr(2, 9) } influencer={element}/>
                ))}
            </div>
        </div>
    )
}