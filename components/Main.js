import { useEffect, useState } from "react";
import ApiFetch from "../hooks/ApiFetch";
import Navbar from "../components/Navbar"
import Image from "next/image";
import expand_down from '../public/expand_down.png'
import ExampleChart from '../components/ExampleChart'
import { Icon } from "@iconify/react";
import Link from "next/link";
import ExplanationPanel from "./ExplanationPanel";
import AnimatedCountup from "./AnimatedCountup";
import { BitcoinChart } from "./BitcoinChart";

const Main = ({ data }) => {
    // State with API Data
    const [fetched, setFetched] = useState({});

    // On load fetch the Api and save it in the State
    useEffect(() => {
        ApiFetch().then(value => {
            setFetched(value);
        });
    }, [])

    // Just a Debug | When the data of fetched changes, you'll se it in the log
    useEffect(() => {
        console.log(fetched);
    }, [fetched]);


    return (
        <>
            <Navbar/>
            <div className="heading h-screen w-full "> 
            
                    <img src="/waves.svg" width="3050" height="1050" className="absolute right-0 bottom-0"></img>
              
                <div className="flex justify-content flex-col">
                    <div className="ml-40 mt-[15%]">
                            <h1 className="font-bold text-7xl">BTC-Tracker</h1>
                            <div className="bg-black p-[5px] max-w-[445px]"></div>
                            <div className="font-semibold text-lg mt-6 text-[45px] font-normal">
                            <h2>made by Konrad & Giiipfel</h2>
                        </div>
                    </div>
                </div>

                
                {/*
                <Link href="/bitcoin" passHref>
                    <a className=" p-6 mb-40 mx-auto bg-slate-400 drop-shadow-lg rounded-xl">Bitcoin</a>
                </Link>

                <a id="scroll" className="mx-auto mb-24 bg-slate-400 drop-shadow-lg rounded-full pl-2 pr-2 pt-2" href="#scroll">
                    <Image src={expand_down} width="45" height="45"></Image>
                </a>

                */}
                
               

            </div>


            <div id="explanation" className="w-full">
                <ExplanationPanel id="react">
                    <div>
                        <h1 className="font-bold text-3xl">React</h1>
                        <p>React is a library for building composable user interfaces. It encourages the creation of reusable UI components that represent data that changes over time. React takes the DOM away from you, offering a simpler programming model and better performance. React can also be rendered on the server with Node and run native applications with React Native. React implements a one-way reactive data flow that reduces boilerplate and is easier to justify than traditional data binding.</p>
                    </div>

                    <div className="mx-auto my-auto drop-shadow-md">
                        <Icon icon="logos:react" width="200" />
                    </div>
                </ExplanationPanel>

                <ExplanationPanel id="next">
                    <div>
                        <h1 className="font-bold text-3xl">Next.js</h1>
                        <p>Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "Building a server-rendered website with Node.js".</p>
                    </div>

                    <div className="mx-auto my-auto">
                        <Icon icon="logos:nextjs" width="350" />
                    </div>
                </ExplanationPanel>

                <ExplanationPanel id="tailwindcss">
                    <div>
                        <h1 className="font-bold text-3xl">tailwindcss</h1>
                        <p className="">Tailwind CSS is self-described as a utility first CSS framework. Rather than focusing on the functionality of the item being styled, Tailwind is centered around how it should be displayed. This makes it easier for the developer to test out new styles and change the layout. </p>
                    </div>

                    <div className="mx-auto my-auto">
                        <Icon icon="logos:tailwindcss" width="350" />
                    </div>
                </ExplanationPanel>

                <ExplanationPanel id="chartjs">
                    <div>
                        <h1 className="font-bold text-3xl">Chart.js</h1>
                        <p>Simple yet flexible JavaScript charting for designers & developers</p>
                    </div>

                    <div className="mx-auto my-auto drop-shadow-lg">
                        <Image src="/chartjs-logo.svg" width="150" height="150"/>
                    </div>
                </ExplanationPanel>
            </div>
        </>
    )

    


    
}

export default Main