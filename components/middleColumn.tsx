import React from 'react'
import Article from './Article'

export default function MiddleColumn({edges}): React.ReactElement {
    console.log("edgesinmid++++", edges[0])
    return (
        <>
            <div className="p-8 bg-white rounded shadow max-w-2xl container mx-auto">
                <h2 className="text-6xl font-bold card-title">The Stories.....</h2>
                <div className="mt-4 w-full">
                    {edges.map(({ node }) => (
                        <Article article = {node}/>
                         ))}     
                </div>
            </div>
            <style jsx>
                {`
                    h2 {
                        background: -webkit-linear-gradient(65deg, #1ceb83, #4287f5);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    @media (max-width: 639px){
                        .card-title{
                            font-size: 4vh;
                        }
                    }
                `}
            </style>
        </>
    )
}


  