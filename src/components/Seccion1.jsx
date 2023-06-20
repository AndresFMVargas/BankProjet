import styles from "../style";
import { discount,Imagen1,Bosque, robot } from "../assets";
import GetStarted from "./GetStarted";

const Seccion1 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">1.5%</span> Deforestacion Anual en{" "}
            <span className="text-white">Colombia</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-green-600 ss:leading-[100.8px] leading-[75px]">
            Los Bosques <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Nesecitan</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-green-600 ss:leading-[100.8px] leading-[75px] w-full">
         NUESTRA AYUDA
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Somos una organizacion que busca la proteccion ambiental por medio de la coservacion 
         de areas nativas de bosque, y afluentes que mantienen las fuentes de agua en las difernetes 
         requines de nuestro pais. 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={discount} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default  Seccion1;
