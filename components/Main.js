import { useEffect, useState } from "react";
import ApiFetch from "../hooks/ApiFetch";
import Navbar from "../components/Navbar"
import Image from "next/image";
import expand_down from '../public/expand_down.png'
import ExampleChart from '../components/ExampleChart'
import { Icon } from "@iconify/react";
import Link from "next/link";

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
            <div className="h-screen w-full flex items-center justify-content flex-col">   
                <div className="mx-auto my-auto max-w-lg">
                    <h1 className="font-bold text-7xl">BTCTracker</h1>
                    <div className="font-semibold text-lg flex justify-between mt-4">
                        <h2>Konrad</h2>
                        <h2>GIIIPFEL</h2>
                    </div>
                </div>

                <Link href="#" passHref>
                    <a className=" p-6 mb-40 mx-auto bg-slate-400 drop-shadow-2xl rounded-xl">Bitcoin course</a>
                </Link>

                <a id="scroll" className="mx-auto mb-24 bg-slate-400 drop-shadow-2xl rounded-3xl pl-2 pr-2 pt-2" href="#scroll">
                    <Image src={expand_down} width="45" height="45"></Image>
                </a>
                
            </div>

            <div id="explanation" className="w-full">
                <div id="react" className="explain mx-auto max-w-6xl p-6 rounded-md grid grid-cols-2 gap-20">
                    <div>
                        <h1 className="font-bold text-2xl">React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Volutpat sed cras ornare arcu dui vivamus. Eget nulla facilisi etiam dignissim diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Amet purus gravida quis blandit.</p>
                    </div>

                    <div className="mx-auto">
                        <Icon icon="logos:react" width="200" />
                    </div>
                </div>

                <div id="next" className="explain mx-auto max-w-6xl p-6 rounded-md grid grid-cols-2 gap-20 mt-12">
                    <div>
                        <h1 className="font-bold text-2xl">Next.js</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Volutpat sed cras ornare arcu dui vivamus. Eget nulla facilisi etiam dignissim diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Amet purus gravida quis blandit.</p>
                    </div>

                    <div className="mx-auto">
                        <Icon icon="logos:nextjs" width="350" />
                    </div>
                </div>

                <div id="tailwindcss" className="explain mx-auto max-w-6xl p-6 rounded-md grid grid-cols-2 gap-20 mt-12">
                    <div>
                        <h1 className="font-bold text-2xl">tailwindcss</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Volutpat sed cras ornare arcu dui vivamus. Eget nulla facilisi etiam dignissim diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Amet purus gravida quis blandit.</p>
                    </div>

                    <div className="mx-auto my-auto">
                        <Icon icon="logos:tailwindcss" width="350" />
                    </div>
                </div>

                <div id="chartjs" className="explain mx-auto max-w-6xl p-6 rounded-md grid grid-cols-2 gap-20 mt-12">
                    <div>
                        <h1 className="font-bold text-2xl">Chart.js</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Volutpat sed cras ornare arcu dui vivamus. Eget nulla facilisi etiam dignissim diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Amet purus gravida quis blandit.</p>
                    </div>

                    <div className="mx-auto my-auto">
                        <Icon icon="file-icons:chartjs" width="100" />
                    </div>
                </div>
            </div>

            <div className="mb-96"></div>
                <div className="max-w-5xl mx-auto"><ExampleChart> </ExampleChart></div>
            <div className="mb-96">T</div>
        </>
    )

    


    
}

export default Main