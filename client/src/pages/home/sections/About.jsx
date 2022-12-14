import { FlexWrap, MediumWrap } from "../../../components/layouts/Containers";
import Img from "../../../assets/images/0-main.jpg";

import "./styles/About.css";

function About(){
    return(
        <section>
            <FlexWrap id="about" className="FlexMaxWidth">
                <MediumWrap>
                    <h2>Quem somos</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </MediumWrap>
                <MediumWrap className="images">
                    <img src={Img} alt="balcão de atendimento"/>
                </MediumWrap>
            </FlexWrap>
        </section>
    )
}

export default About;