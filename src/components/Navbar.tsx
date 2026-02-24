import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-migusto-tierra-oscuro/80 backdrop-blur-md border-b border-white/10 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}Logo Mi Gusto 2025.png`}
                alt="Mi Gusto"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col ml-1 border-l border-white/10 pl-3">
                <span className="text-[10px] font-black text-gold-gradient tracking-[0.3em] uppercase">
                  Golden Tickets
                </span>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {[
              { path: '/', label: 'Home' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${isActive(link.path)
                  ? 'bg-migusto-rojo text-white shadow-premium-gold'
                  : 'text-migusto-crema-oscuro hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            {/* Registro link removed from mobile as well */}
          </div>
        </div>
      </div>
    </nav>
  );
}
