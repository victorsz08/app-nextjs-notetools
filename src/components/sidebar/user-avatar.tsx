"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


type UserAvatarProps = {
    name: string;
    image: string;
}


export function UserAvatar({
    name,
    image
 } : UserAvatarProps) {

    return (
        <div>
            <Avatar className="w-10 h-10">
                <AvatarImage src={image} alt={name}/>
                <AvatarFallback>
                    {name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
            </Avatar>
        </div>
    )
}