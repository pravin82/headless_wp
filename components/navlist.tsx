import React from 'react'

export default function Navlist(props: any): React.ReactElement {
    return (
        <>
            <ul className={ props.menuState ? "Navlist active": "Navlist inactive"}>
                <li className="Navlist-items">Home</li>
                <li className="Navlist-items">Contact</li>
                <li className="Navlist-items">About</li>
            </ul>
            <style jsx>{`
               
                .Navlist{
                    display: block;
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                    font-size: 1.5rem;
                    transition: 1s all;
                }
                .Navlist-items{
                    width:100%;
                    
                }
                
                .Navlist-items:hover{
                    border-bottom: 2px solid #03befc;
                    color: #03befc;
                }
                @media (max-width: 1024px){
                    .active{
                        transform: scale(1.3);
                    }
                    .inactive{
                        transform: scale(0);
                    }
                    .Navlist{
                        width:30%;
                        display:block;
                        position: absolute;
                        top:350%;
                        left:35%;
                        background: white;
                        
                        z-index:0;
                        border:1px solid black;
                    }
                    .Navlist-items{
                        text-align:center;
                    }
                }
            `}</style>
        </>
    )
}
