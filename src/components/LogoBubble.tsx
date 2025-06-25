import { motion } from "framer-motion";

export default function LogoBubble() {
  return (
    <div style={{ position: "relative", width: 200, height: 200 }}>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0088",
          borderRadius: 5,
          position: "absolute",
          top: 50,
          left: 50,
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
    </div>
  );
}
