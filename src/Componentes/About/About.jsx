import React from "react";
import "./about.css";
import image from "./image1.jpeg";
const About = () => {
  return (
    <div className="container">
      <img
        src={image}
        alt="image"
        width="500px"
        height="500px"
        className="image-about"
      ></img>
      <div className="description">
        <h1 className="about"> Sobre nós </h1>
        <p>
          Na TechShop, temos o compromisso de fornecer o que há de mais recente
          e avançado tecnologias para impulsionar o sucesso de nossos clientes.
          Somos uma empresa apaixonado por conectar pessoas e organizações com
          tecnologias de ponta soluções que transformam a forma como vivemos,
          trabalhamos e nos relacionamos. Nossa ampla gama de produtos inclui
          dispositivos eletrônicos de última geração, hardware e software
          projetado para atender às necessidades de indivíduos e empresas em
          todo todas as indústrias.
        </p>

        <p>
          De smartphones e laptops a segurança avançada sistemas e soluções de
          automação residencial, estamos constantemente atualizando nossos
          estoque para oferecer o que há de melhor em tecnologia. Além disso,
          nossa equipe dedicada de especialistas em tecnologia estão sempre
          disponíveis para fornecer suporte personalizado e orientação
          especializada, garantindo que nossos clientes obtenham o máximo
          benefício de suas compras conosco. Na InovaTech Solutions, não
          vendemos apenas tecnologia - capacitamos o futuro. Junte-se a nós
          enquanto embarcamos nesta emocionante jornada de inovação e progresso
          tecnológico.
        </p>
      </div>
    </div>
  );
};

export default About;
