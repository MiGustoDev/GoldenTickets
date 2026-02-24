import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-migusto-tierra-oscuro border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3 text-migusto-crema-oscuro bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <MapPin className="h-5 w-5 text-migusto-rojo" />
            <span className="text-sm md:text-base font-medium">
              <span className="text-migusto-crema">Mi Gusto Vicente López</span> · Av. del Libertador 962
            </span>
          </div>
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-widest text-migusto-crema/40 font-bold">
              Golden Tickets Mi Gusto Lovers · {new Date().getFullYear()}
            </p>
            <p className="text-[10px] text-migusto-crema/20">
              Promoción exclusiva · La calidad no se negocia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
