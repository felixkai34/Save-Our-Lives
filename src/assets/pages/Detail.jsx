import { useParams } from "react-router-dom"
import Datas from '../Data.json'
import Slider from "../components/Slider";
import Appdownload from "../components/Appdownload";
import Back from "../components/Back";

export default function Detail() {

    const param = useParams();
    const datas = Datas.find(data => data.Id == param.Id)
    const hasImg = datas.Imgs.includes(datas.Imgs[0])
    const hasVd = datas.Videos.includes(datas.Videos[0])

    return(
        <> 
            <div className="max-w-screen-md mx-auto px-3 ">
                <h1 className=" text-3xl text-white text-center my-10">Save Our Lives</h1>

                <img className="w-full" src={ datas.Poster }/>
                <h1 className=" text-lg md:text-2xl text-white font-bold py-10 leading-loose">{` " ${datas.Title}  "`}</h1>
                <pre className=" text-white leading-loose whitespace-pre-wrap">{datas.Detail}</pre>
                { param.Id == 3 ? <Appdownload/> : undefined } 
                { hasImg ? <Slider datas={datas}/> : undefined } 
                { hasVd ? <iframe className=" w-full aspect-video" src={datas.Videos} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> : undefined}
                <Back/>
            </div>
        </>
    )
}