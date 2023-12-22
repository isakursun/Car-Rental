import { AnimatePresence } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils/generateImage";
import { motion } from 'framer-motion';

type ModalPropsType = {
  car: CarType;
  isOpen: boolean;
  close: () => void;
};

const DetailModal = ({ car, isOpen, close }: ModalPropsType) => {
  return (
    <AnimatePresence> 
    {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center gap-4">
        <motion.div
        initial={{scale:0.3, opacity:0}}
        whileInView={{scale:1, opacity:1}}
        transition={{duration:0.3}}
        exit={{scale:0, opacity:0}}
        className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
          {/* kapatma butonu */}
          <button
            onClick={close}
            className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
          >
            <img src="/close.svg" />
          </button>

          {/* araç fotoları */}
          <div className="flex-1 flex flex-col gap-3">
            {/* büyük */}
            <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
              <img
                className="h-full mx-auto object-contain"
                src={generateImage(car)}
              />
            </div>
            {/* küçük */}
            <div className="flex gap-3">
              <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car, "29")}
                />
              </div>
              <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car, "33")}
                />
              </div>
              <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car, "13")}
                />
              </div>
            </div>
          </div>

          {/* araç bilgileri */}

          {Object.entries(car)
            .filter(([key]) => key !== "year")
            .map(([key, value]) => (
              <div className="flex justify-between">
                <h4 className="capitalize text-gray">
                  {key.replace("_", " ")}
                </h4>
                <p className="capitalize text-black-100 font-semibold">
                  {value}
                </p>
              </div>
            ))}
        </motion.div>
      </div>
    )}
    </AnimatePresence>
  );
};

export default DetailModal;
