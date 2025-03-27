import { motion, AnimatePresence } from "framer-motion";
import "/src/App.css";

const transition = (OgComponent) => {
  return () => (
    <AnimatePresence>
      {/* Page Component */}
      <OgComponent />

      {/* Slide-in transition */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-blue-300 bg-opacity-50 transform origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }} 
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Slide-out transition */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-blue-300 bg-opacity-50 transform origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
};

export default transition;
