import React from 'react'
import Cards from './Cards'
import '../../../styles/HomePage.css'
export default function HomePage() {
    return (
        <>
        <div className="container text-center  mt-2 curved background">
            <h1 className="text-white fs-2 p-1">Welcome to my TO-DO list app</h1>
        </div>
        <Cards></Cards>
        </>
    )
}
