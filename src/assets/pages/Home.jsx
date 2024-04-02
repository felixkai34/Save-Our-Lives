import { Link } from "react-router-dom";
import Datas from '../Data.json'

export default function Home() {
    
    return(
        <>
            <div className="max-w-screen-lg mx-auto px-3 py-3">
                <h1 className=" text-3xl text-white text-center my-10">Save Our Lives</h1>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Datas.map((data)=>{
                        return(
                            <div key={data.Id} className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border border-cyan-700 text-white">
                                <img className="w-full h-48 object-cover" src={ data.Poster }/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-5">{data.Name}</div>
                                    <p className="text-base leading-loose">
                                        {data.Title}
                                    </p>

                                    <Link to={`/${data.Id}`} className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}