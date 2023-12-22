import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  const flyTo = (): void => {
    alert("aşağı");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Yolculuğa Başla ve Özgürlüğü Hisset</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton
          handleClick={flyTo}
          title="Araçları Keşfet"
          designs="mt-10"
        />
      </div>

      <div className=" flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="object-contain"
          src="/hero.png"
        />
      </div>
    </div>
  );
};

export default Hero;
