import React from "react";
import { useAppSelector } from "../../app/hooks"

export default function Username() {
  
    const username = useAppSelector((state) => state.user.username)

    if(!username) return null;

    return (
        <div className="text-stone-200 uppercase font-bold">{username}</div>
    )
}