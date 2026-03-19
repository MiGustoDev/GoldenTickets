import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-migusto-tierra-oscuro/80 backdrop-blur-md border-b border-white/10 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left Spacer to balance the right content */}
          <div className="flex justify-start">
            {/* Opcional: algún link o espacio vacío */}
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center">
            <a href="https://www.migusto.com.ar/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}Logo Mi Gusto 2025.png`}
                  alt="Mi Gusto"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </motion.div>
            </a>
          </div>

          {/* Right Content */}
          <div className="flex justify-end">
            {location.pathname !== '/validator' && (
              <>
                <div className="hidden md:flex items-center">
                  <button
                    onClick={() => navigate('/faq')}
                    className="text-[10px] font-black text-gold-gradient tracking-[0.3em] uppercase hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    FAQ
                  </button>
                </div>

                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => navigate('/faq')}
                    className="text-[10px] font-black text-gold-gradient tracking-[0.3em] uppercase hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    FAQ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
