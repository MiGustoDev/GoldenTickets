import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';
import { EpicTitle, EpicSubtitle } from '../components/EpicText';

const faqs = [
  {
    question: '¿En mi Pack de 12 recibí un cupón, qué hago?',
    answer: 'Dirigite al local Mi Gusto Vicente López (Av. del Libertador 962) con cupón y DNI.'
  },
  {
    question: '¿Cómo canjeo cada mes?',
    answer: 'Presencial con DNI y Tarjeta Lovers.'
  },
  {
    question: '¿Qué pasa si pierdo el ticket?',
    answer: 'Se considera perdido, sin reposición.'
  },
  {
    question: '¿Hasta cuándo canjeo?',
    answer: 'Último día del mes, o caduca.'
  },
  {
    question: '¿Dónde?',
    answer: 'Solo Vicente López.'
  },
  {
    question: '¿Por app/web?',
    answer: 'No, solo presencial.'
  },
  {
    question: '¿Cuántos premios?',
    answer: '300 total.'
  },
  {
    question: '¿Otro puede usarlo?',
    answer: 'No, personal e intransferible.'
  },
  {
    question: '¿Puedo regalarlo?',
    answer: 'Solo antes de registrar datos.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-0 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-migusto-rojo/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-migusto-dorado/10 blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-migusto-dorado uppercase tracking-[0.5em] text-xs font-black block mb-6"
            >
              Presentamos
            </motion.span>

            <div className="flex flex-col items-center justify-center mb-10">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={`${import.meta.env.BASE_URL}Logo Mi Gusto 2025.png`}
                alt="Mi Gusto"
                className="h-32 md:h-48 w-auto mb-4"
              />
              <EpicTitle
                text="Experience"
                goldWord="Experience"
                className="text-6xl md:text-8xl"
                delay={0.5}
              />
            </div>
            <EpicSubtitle
              text="¡Bienvenidos! Sé parte del exclusivo club Lovers"
              goldWord="Lovers"
              className="text-xl md:text-3xl mb-12 max-w-2xl mx-auto"
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <Link
                to="/register"
                className="group relative px-12 py-5 bg-migusto-rojo text-white rounded-2xl font-black text-2xl shadow-premium-gold hover:bg-migusto-rojo-claro transition-all flex items-center space-x-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span>Canjeá tu Cupón</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Award className="h-8 w-8 text-migusto-oro" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reward Cards Section */}
      <section className="py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-center mb-16 text-migusto-crema"
          >
            Niveles de <span className="text-gold-gradient italic">Premios</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Bronce */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group h-[400px] flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gradient-to-br from-[#4d3326] to-[#2d1e16] border border-white/5 shadow-premium overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-3xl rounded-full"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-5 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-16 w-16 text-[#CD7F32]" />
                </div>
                <h3 className="text-4xl font-black text-[#CD7F32] tracking-tighter mb-4 opacity-80 uppercase">BRONCE</h3>
                <div className="h-[2px] w-12 bg-[#CD7F32]/30 mb-6"></div>
                <p className="text-migusto-crema/90 text-2xl font-bold leading-tight">12 empanadas <br />cada mes</p>
                <div className="mt-8 px-6 py-2 rounded-full bg-black/40 border border-white/5">
                  <span className="text-migusto-crema/60 text-sm font-bold uppercase tracking-widest">Durante 3 Meses</span>
                </div>
              </div>
            </motion.div>

            {/* Plata */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group h-[400px] flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gradient-to-br from-[#4a4a4a] to-[#1a1a1a] border border-white/5 shadow-2xl overflow-hidden scale-105"
            >
              <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-5 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-16 w-16 text-[#C0C0C0]" />
                </div>
                <h3 className="text-4xl font-black text-[#C0C0C0] tracking-tighter mb-4 opacity-80 uppercase">PLATA</h3>
                <div className="h-[2px] w-12 bg-[#C0C0C0]/30 mb-6"></div>
                <p className="text-migusto-crema/90 text-2xl font-bold leading-tight">12 empanadas <br />cada mes</p>
                <div className="mt-8 px-6 py-2 rounded-full bg-black/40 border border-white/5">
                  <span className="text-migusto-crema/60 text-sm font-bold uppercase tracking-widest">Durante 6 Meses</span>
                </div>
              </div>
            </motion.div>

            {/* Oro */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative group h-[400px] flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gradient-to-br from-[#4d3d00] to-[#1a1500] border border-migusto-dorado/20 shadow-premium-gold overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-migusto-dorado/10 blur-3xl rounded-full"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-5 rounded-full bg-migusto-dorado/10 border border-migusto-dorado/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-16 w-16 text-migusto-oro" />
                </div>
                <h3 className="text-4xl font-black text-migusto-oro tracking-tighter mb-4 opacity-80 uppercase">ORO</h3>
                <div className="h-[2px] w-12 bg-migusto-oro/30 mb-6"></div>
                <p className="text-migusto-crema/90 text-2xl font-bold leading-tight">12 empanadas <br />cada mes</p>
                <div className="mt-8 px-6 py-2 rounded-full bg-black/40 border border-migusto-dorado/20">
                  <span className="text-migusto-oro/80 text-sm font-bold uppercase tracking-widest">Durante 12 Meses</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif text-center mb-16 text-migusto-crema">
            El camino al <span className="text-migusto-rojo italic">Premio</span>
          </h2>
          <div className="space-y-4">
            {/* Paso 0 - Distintivo especial */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              className="flex items-center space-x-6 glass-card p-6 rounded-2xl border-2 border-migusto-dorado/50 bg-gradient-to-r from-migusto-dorado/10 to-transparent hover:bg-migusto-dorado/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-migusto-dorado/10 text-6xl font-black">¡</div>
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-migusto-dorado to-amber-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-migusto-dorado/30">
                0
              </div>
              <p className="text-xl text-migusto-crema font-bold">{'Encontraste un ticket especial en tu pedido'}</p>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="h-8 w-8 text-migusto-dorado" />
              </div>
            </motion.div>
            {[
              { step: 1, text: 'Presentate a la sucursal de Vicente Lopez con tu DNI fisico' },
              { step: 2, text: 'Validamos ID y DNI asociado al ticket.' },
              { step: 3, text: 'Entregamos tu Tarjeta Lovers' },
              { step: 4, text: 'Disfrutá tu canje mensual' }
            ].map(({ step, text }) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: step * 0.1 }}
                key={step}
                className="flex items-center space-x-6 glass-card p-6 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-migusto-rojo to-migusto-rojo-oscuro rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-migusto-rojo/20">
                  {step}
                </div>
                <p className="text-xl text-migusto-crema/90 font-medium">{text}</p>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="h-8 w-8 text-migusto-rojo" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif text-center mb-16 text-migusto-crema">
            Preguntas <span className="text-gold-gradient italic">Frecuentes</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full px-8 py-5 text-left flex items-center justify-between transition-all rounded-2xl ${openFaq === index ? 'bg-migusto-rojo text-white' : 'glass-card text-migusto-crema hover:bg-white/10'
                    }`}
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-500 ${openFaq === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 py-6 text-migusto-crema/70 leading-relaxed text-lg italic">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: AlertCircle, title: 'Personal e Intransferible', text: 'Solo válido para el titular registrado' },
              { icon: AlertCircle, title: 'No Acumulable', text: 'Un premio por persona' },
              { icon: AlertCircle, title: 'Canje Mensual', text: 'Un pack de 12 empanadas por mes' },
              { icon: AlertCircle, title: 'Pérdida sin Reposición', text: 'No se emiten duplicados de tarjeta' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:bg-migusto-rojo/10 group-hover:border-migusto-rojo/30 transition-all">
                  <item.icon className="h-10 w-10 text-migusto-rojo" />
                </div>
                <h3 className="text-lg font-black text-migusto-crema mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm text-migusto-crema/40 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
