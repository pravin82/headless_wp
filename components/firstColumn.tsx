import React,{ useState } from 'react'
import Navlist from './navlist'

export default function FirstColumn(): React.ReactElement {
    const [ menuState,setMenu ] = useState<boolean>(false);
    return (
        <>
            <div className="firstColumn-container h-full w-1/4 ">
                <button name="navbutton" className="navbutton" onClick={() => setMenu(!menuState)}><div /><div /><div /></button>
                <Navlist menuState={menuState} />
                <h2 className="font-bold text-6xl block firstColumn-title lg:ml-8 ">KHOJ SOFTWARE</h2>
            </div>
            <style jsx>{`
                .navbutton{
                    width:40px;
                    height: 30px;
                    opacity:0;
                    text-align:center;
                }
                .navbutton > div{
                    width:25px;
                    height:4px;
                    background: gray;
                    margin: 0 auto;
                    margin-bottom: 3px;
                }
                .firstColumn-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    
                }

                .firstColumn-title {
                    color: white;
                    margin-top: 70%;
                    background: -webkit-linear-gradient(65deg, #1ceb83, #4287f5);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                @media (max-width: 1024px){
                    .firstColumn-title{
                        margin-top: 0;
                        text-align: center;
                        z-index:10;
                        font-size: 4rem;
                    }
                    .firstColumn-container{
                        width: 100%;
                        height: auto;
                    }
                    .navbutton{
                        opacity:1;
                        position: absolute;
                        right: 5px;
                        top: 5px
                    }
                    
                }
                @media (max-width: 639px){
                    .firstColumn-title{
                        font-size: 4vh;
                    }
                    
                }
            `}</style>
        </>
    )
}
