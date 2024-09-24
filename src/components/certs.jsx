import one from "../assets/img/award1.png"
import two from "../assets/img/award2.png"
import three from "../assets/img/award3.png"
import four from "../assets/img/award4.png"
import five from "../assets/img/award5.png"

export default function Certs() {
    return (
        <div className="flex gap-12 my-8 justify-center items-center">
            <img src={one} alt="" className="h-28 "/>
            <img src={two} alt="" className="h-28"/>
            <img src={three} alt="" className="h-28"/>
            <img src={four} alt="" className="h-28"/>
            <img src={five} alt="" className="h-28"/>
        </div>
    )
}