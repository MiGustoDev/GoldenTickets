import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Search, Loader2, CheckCircle2, XCircle, Ticket, Info } from 'lucide-react';
import { supabase } from '../lib/supabase';

type ValidationForm = {
    dni: string;
};

type ValidationResult = {
    success: boolean;
    message: string;
    tipo?: 'BRONCE' | 'PLATA' | 'ORO';
    nombre?: string;
    apellido?: string;
};

export default function Validation() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ValidationResult | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<ValidationForm>();

    const onSubmit = async (data: ValidationForm) => {
        setIsLoading(true);
        setResult(null);

        try {
            // 1. Buscamos el registro activo por DNI
            const { data: registro, error: regError } = await supabase
                .from('registros')
                .select('id_ticket, activo, nombre, apellido')
                .eq('dni', data.dni)
                .eq('activo', true)
                .maybeSingle();

            if (regError) throw regError;

            if (!registro) {
                setResult({
                    success: false,
                    message: 'El DNI ingresado no cuenta con un beneficio activo en el sistema.'
                });
            } else {
                // 2. Buscamos el tipo de ticket
                const { data: ticket, error: ticketError } = await supabase
                    .from('tickets')
                    .select('tipo')
                    .eq('id_ticket', registro.id_ticket)
                    .single();

                if (ticketError) throw ticketError;

                setResult({
                    success: true,
                    message: 'Beneficio validado con éxito.',
                    tipo: ticket.tipo as 'BRONCE' | 'PLATA' | 'ORO',
                    nombre: registro.nombre,
                    apellido: registro.apellido
                });
            }
        } catch (err) {
            console.error('Error in validation:', err);
            setResult({
                success: false,
                message: 'Ocurrió un error al consultar el sistema. Por favor, reintente.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const tierColors = {
        ORO: 'text-migusto-oro border-migusto-oro/30 bg-migusto-oro/10',
        PLATA: 'text-migusto-plata border-migusto-plata/30 bg-migusto-plata/10',
        BRONCE: 'text-migusto-bronce border-migusto-bronce/30 bg-migusto-bronce/10'
    };

    return (
        <div className="min-h-screen py-12 px-4 relative overflow-hidden bg-migusto-tierra-oscuro">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-migusto-rojo/5 blur-[120px] rounded-full animate-pulse-soft"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-migusto-dorado/5 blur-[120px] rounded-full animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="container mx-auto max-w-2xl relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6"
                    >
                        <Shield className="h-10 w-10 text-migusto-rojo" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-migusto-crema">
                        Validador de <span className="text-migusto-rojo italic">Tickets</span>
                    </h1>
                    <p className="text-migusto-crema/40 text-lg">Consulta de beneficios activos por DNI</p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-3">
                            <label className="block text-migusto-crema/70 text-sm font-bold uppercase tracking-[0.2em] ml-1">
                                DNI del Cliente
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('dni', {
                                        required: 'El DNI es obligatorio',
                                        pattern: { value: /^[0-9\.-]+$/, message: 'Formato de DNI inválido' }
                                    })}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-migusto-crema focus:outline-none focus:ring-2 focus:ring-migusto-rojo/50 focus:border-migusto-rojo transition-all text-xl font-medium placeholder:text-white/10"
                                    placeholder="Ingrese el DNI"
                                    autoComplete="off"
                                />
                                <Search className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/20" />
                            </div>
                            {errors.dni && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-medium ml-1">
                                    {errors.dni.message}
                                </motion.p>
                            )}
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-migusto-rojo text-white py-5 rounded-2xl font-black text-xl shadow-premium hover:bg-migusto-rojo-claro transition-all disabled:opacity-50 flex items-center justify-center space-x-3 group relative overflow-hidden"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                    <span>Consultando...</span>
                                </>
                            ) : (
                                <>
                                    <span>Verificar Beneficio</span>
                                    <Shield className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="overflow-hidden"
                            >
                                <div className={`p-8 rounded-3xl border ${result.success ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                                    <div className="flex flex-col items-center text-center">
                                        {result.success ? (
                                            <>
                                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                                                </div>
                                                <h3 className="text-2xl font-serif font-bold text-white mb-1">Beneficio Activo</h3>
                                                {result.nombre && (
                                                    <p className="text-migusto-dorado-bright text-xl font-bold uppercase tracking-tight mb-4">
                                                        {result.nombre} {result.apellido !== 'REQUERIDO' && result.apellido}
                                                    </p>
                                                )}

                                                <div className={`px-6 py-3 rounded-2xl border font-black tracking-widest uppercase text-sm ${tierColors[result.tipo!]}`}>
                                                    TICKET {result.tipo}
                                                </div>

                                                <div className="mt-6 flex flex-col items-center">
                                                    <div className="flex items-center space-x-3 text-migusto-dorado-bright mb-2">
                                                        <Ticket className="h-6 w-6" />
                                                        <span className="font-bold text-lg">1 pack 12 empanadas</span>
                                                    </div>
                                                    <p className="text-white/60 font-medium">Disponible para canje este mes</p>
                                                </div>

                                                <div className="mt-8 pt-6 border-t border-white/5 w-full">
                                                    <div className="flex items-center justify-center space-x-2 text-xs text-white/30 uppercase tracking-widest font-bold">
                                                        <Info className="h-4 w-4" />
                                                        <span>Solicitar DNI físico para validar identidad</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                                                    <XCircle className="h-10 w-10 text-red-500" />
                                                </div>
                                                <h3 className="text-2xl font-serif font-bold text-white mb-2">Sin Beneficio</h3>
                                                <p className="text-white/60 leading-relaxed italic">{result.message}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
