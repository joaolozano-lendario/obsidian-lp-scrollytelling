import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Zap,
  Network,
  ArrowRight,
  Check,
  ChevronDown,
  Star,
  Clock,
  Shield,
  Sparkles
} from 'lucide-react'

// SVG Components - Academia Lendária Brand Assets
const LogoDiamante = ({ className = "", fill = "#000" }: { className?: string; fill?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={fill} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

const LogoInfinito = ({ className = "", fill = "#000" }: { className?: string; fill?: string }) => (
  <svg className={className} viewBox="0 0 400 184" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M393.3 57.2C388.7 45.8 381.9 35.6 373.2 26.9C364.4 18.2 354.2 11.4 342.9 6.8C331.8 2.3 320.2 0 308.3 0C296.4 0 284.8 2.3 273.8 6.7C262.4 11.3 252.2 18.1 243.5 26.8L200 70.3L156.5 26.8C147.7 18.1 137.5 11.3 126.2 6.7C115.2 2.3 103.6 0 91.7 0C79.8 0 68.2 2.3 57.2 6.7C45.8 11.3 35.6 18.1 26.9 26.8C18.2 35.6 11.4 45.8 6.8 57.1C2.3 68.2 0 79.8 0 91.7C0 103.6 2.3 115.2 6.7 126.2C11.3 137.6 18.1 147.8 26.8 156.5C35.5 165.2 45.8 172 57.1 176.6C68.1 181.1 79.7 183.3 91.6 183.3C103.5 183.3 115.1 181 126.1 176.6C137.5 172 147.7 165.2 156.4 156.5L199.9 113L210.4 123.5L243.4 156.5C252.2 165.2 262.4 172 273.7 176.6C284.7 181.1 296.3 183.3 308.2 183.3C320.1 183.3 331.7 181 342.7 176.6C354.1 172 364.3 165.2 373 156.5C381.7 147.7 388.5 137.5 393.1 126.2C397.6 115.2 399.8 103.6 399.8 91.7C399.8 79.8 397.5 68.2 393.1 57.2H393.3ZM369.7 91.7C369.7 108.1 363.3 123.6 351.7 135.2C340.1 146.8 324.7 153.2 308.2 153.2C291.7 153.2 276.3 146.8 264.7 135.2L221.2 91.7L264.7 48.2C276.3 36.6 291.7 30.2 308.2 30.2C324.7 30.2 340.1 36.6 351.7 48.2C363.3 59.8 369.7 75.2 369.7 91.7ZM178.6 91.7L135.1 135.2C123.5 146.8 108.1 153.2 91.6 153.2C75.2 153.2 59.7 146.8 48.1 135.2C36.5 123.6 30.1 108.2 30.1 91.7C30.1 75.2 36.5 59.8 48.1 48.2C59.7 36.6 75.1 30.2 91.6 30.2C108 30.2 123.5 36.6 135.1 48.2L178.5 91.6V91.7H178.6Z" fill={fill}/>
  </svg>
)

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// Progress Bar Component
function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-obsidian-600 to-obsidian-400 z-50"
      style={{ width }}
    />
  )
}

// Section 1: Hero - The Hook (Dedo na Ferida)
function HeroSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timings = [600, 1800, 3200, 4800, 6200]
    timings.forEach((time, index) => {
      setTimeout(() => setStage(index + 1), time)
    })
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <AnimatePresence mode="wait">
          {stage >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl md:text-2xl text-lendaria-700"
            >
              Quantos projetos você começou esse ano?
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl md:text-2xl text-lendaria-600 mt-4"
            >
              Quantos você terminou?
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl md:text-2xl text-lendaria-500 mt-4"
            >
              Qual foi a última coisa que você aprendeu?
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage >= 4 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xl md:text-2xl text-lendaria-400 mt-4"
            >
              Consegue lembrar agora?
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <p className="font-mono text-xs text-obsidian-500 tracking-[0.2em] uppercase mb-4">
                Segundo Cérebro com IA
              </p>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-lendaria-black leading-tight">
                Você não precisa aprender mais.
                <br />
                <span className="text-obsidian-600">Precisa acessar o que já sabe.</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {stage >= 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 text-lendaria-400 mx-auto animate-bounce" />
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Section 2: The Problem Amplification
function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    { number: '92%', text: 'do que você aprendeu está inacessível' },
    { number: '3h+', text: 'por semana procurando o que você já sabia' },
    { number: '∞', text: 'ideias brilhantes perdidas para sempre' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-lendaria-soft py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-lendaria-500 tracking-[0.3em] uppercase mb-12 text-center"
        >
          01 — O Peso Invisível
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <p className="font-display text-7xl md:text-8xl font-bold text-lendaria-black">
                {problem.number}
              </p>
              <p className="font-body text-lg text-lendaria-600 mt-4">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-lendaria-800 max-w-3xl mx-auto leading-relaxed">
            Conhecimento que você não consegue acessar é conhecimento que você{' '}
            <span className="font-bold text-lendaria-black">não tem</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Section 3: Breather - Quote
function BreatherQuote() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center justify-center bg-lendaria-black relative overflow-hidden">
      {/* Subtle purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-obsidian-600/10 blur-[150px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-8xl text-obsidian-400 block mb-4"
        >
          "
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl text-white leading-tight font-light"
        >
          Você não precisa aprender mais.
          <br />
          <span className="text-obsidian-400 font-semibold">Precisa acessar o que já sabe.</span>
        </motion.blockquote>
      </div>
    </section>
  )
}

// Section 4: The Reframe
function ReframeSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-lendaria-500 tracking-[0.3em] uppercase mb-12 text-center"
        >
          02 — O Problema Real
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-6 p-8 bg-lendaria-soft rounded-xl">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span className="text-red-500 text-2xl">✕</span>
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-lendaria-800">
                O que você acha que é o problema:
              </p>
              <p className="font-body text-lg text-lendaria-600 mt-2">
                "Falta de disciplina", "não tenho tempo", "preciso de mais força de vontade"
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-obsidian-50 rounded-xl border-2 border-obsidian-200">
            <div className="w-12 h-12 rounded-full bg-obsidian-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-lendaria-800">
                O problema real:
              </p>
              <p className="font-body text-lg text-lendaria-700 mt-2">
                Você está tentando compensar <span className="font-semibold">ausência de sistema</span> com excesso de disciplina.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-3xl md:text-4xl text-center mt-16 text-lendaria-black font-bold"
        >
          Sistema &gt; Disciplina
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg text-lendaria-600 text-center mt-4"
        >
          Disciplina falha nos dias ruins. Sistema funciona sempre.
        </motion.p>
      </div>
    </section>
  )
}

// Section 5: The Mechanism (Graph Visualization)
function MechanismSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-lendaria-soft py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-lendaria-500 tracking-[0.3em] uppercase mb-8 text-center"
        >
          03 — O Mecanismo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-center text-lendaria-black font-bold mb-4"
        >
          Seu cérebro pensa em{' '}
          <span className="text-obsidian-600">conexões</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xl text-lendaria-600 text-center max-w-2xl mx-auto mb-16"
        >
          Não em pastas. Obsidian espelha como você realmente pensa.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Before: Folders */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <p className="font-mono text-sm text-red-500 uppercase tracking-wider mb-6">
              Hierarquia de Pastas
            </p>
            <div className="space-y-3 font-mono text-sm text-lendaria-600">
              <p>📁 Projetos</p>
              <p className="ml-6">📁 2024</p>
              <p className="ml-12">📁 Marketing</p>
              <p className="ml-18 ml-[72px]">📄 Onde coloco isso?</p>
              <p className="ml-18 ml-[72px] text-red-400">❌ Perdido para sempre</p>
            </div>
            <p className="font-body text-lendaria-500 mt-6 text-sm">
              Funciona com 10 arquivos. Quebra com 1000.
            </p>
          </motion.div>

          {/* After: Network */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-lendaria-black p-8 rounded-2xl relative overflow-hidden"
          >
            <p className="font-mono text-sm text-obsidian-400 uppercase tracking-wider mb-6">
              Pensamento em Rede
            </p>

            {/* Simple Graph SVG */}
            <svg viewBox="0 0 200 150" className="w-full h-48">
              {/* Connections */}
              <motion.line
                x1="100" y1="75" x2="40" y2="40"
                stroke="#7c3aed" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="100" y1="75" x2="160" y2="40"
                stroke="#7c3aed" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1="100" y1="75" x2="50" y2="120"
                stroke="#7c3aed" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.line
                x1="100" y1="75" x2="150" y2="120"
                stroke="#7c3aed" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.4 }}
              />
              <motion.line
                x1="40" y1="40" x2="160" y2="40"
                stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.6 }}
              />

              {/* Nodes */}
              <motion.circle
                cx="100" cy="75" r="12"
                fill="#7c3aed"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.circle
                cx="40" cy="40" r="8"
                fill="#a78bfa"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <motion.circle
                cx="160" cy="40" r="8"
                fill="#a78bfa"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              />
              <motion.circle
                cx="50" cy="120" r="8"
                fill="#a78bfa"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
              />
              <motion.circle
                cx="150" cy="120" r="8"
                fill="#a78bfa"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </svg>

            <p className="font-body text-lendaria-300 mt-4 text-sm">
              Uma nota pode estar em vários contextos. Sem escolher "onde salvar".
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section 6: Breather - Stat
function BreatherStat() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-lg text-lendaria-500 mb-4"
        >
          Profissionais com sistemas de pensamento organizados ganham
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-8xl md:text-9xl font-bold text-obsidian-600"
        >
          3.2x
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg text-lendaria-500 mt-4"
        >
          mais em 5 anos
        </motion.p>
      </div>
    </section>
  )
}

// Section 7: The Transformation
function TransformationSection() {
  const { ref, isInView } = useInView()

  const steps = [
    {
      icon: Brain,
      title: 'Capture',
      description: 'Tire da cabeça em 5 segundos. Sem pensar onde salvar.',
    },
    {
      icon: Network,
      title: 'Conecte',
      description: 'Links bidirecionais criam conexões automáticas.',
    },
    {
      icon: Zap,
      title: 'Crie',
      description: 'Ideias emergem das conexões. Você só organiza.',
    },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-lendaria-soft py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-lendaria-500 tracking-[0.3em] uppercase mb-8 text-center"
        >
          04 — A Transformação
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-center text-lendaria-black font-bold mb-16"
        >
          Três passos. Uma transformação.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-obsidian-100 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-obsidian-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-lendaria-black mb-3">
                {step.title}
              </h3>
              <p className="font-body text-lendaria-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-xl text-center text-lendaria-700 mt-16"
        >
          Setup: <span className="font-semibold text-lendaria-black">15 minutos</span>.
          Resultado: <span className="font-semibold text-obsidian-600">anos de clareza</span>.
        </motion.p>
      </div>
    </section>
  )
}

// Section 8: Social Proof
function SocialProofSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center justify-center bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-lendaria-500 tracking-[0.3em] uppercase mb-12"
        >
          05 — Quem já tem clareza
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-2xl md:text-3xl text-lendaria-800 leading-relaxed italic"
        >
          "Eu tinha 10 anos de anotações espalhadas. Notion, Evernote, Google Keep, cadernos físicos. Em um fim de semana, estava tudo conectado. Pela primeira vez, consigo pensar com clareza."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-obsidian-100 flex items-center justify-center">
            <span className="font-display font-bold text-obsidian-600">AN</span>
          </div>
          <div className="text-left">
            <p className="font-display font-semibold text-lendaria-black">Alan Nicolas</p>
            <p className="font-body text-sm text-lendaria-500">Fundador, Academia Lendária</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-8 mt-12 text-lendaria-400"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-mono text-sm">15.000+ alunos</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-mono text-sm">2 anos de acesso</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Section 9: The Offer
function OfferSection() {
  const { ref, isInView } = useInView()

  const included = [
    'Clareza mental em 7 dias — acesse qualquer ideia em segundos',
    'Setup completo em 15 minutos — saia da primeira aula funcionando',
    'Sistema que funciona nos próximos 10 anos — não envelhece',
    'Vault pronto pra usar — copie, cole, comece',
    'Templates de criadores — como mentes brilhantes pensam',
    'Suporte até funcionar — não te largamos',
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-lendaria-black py-24 relative overflow-hidden">
      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-obsidian-600/10 blur-[200px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-obsidian-400 tracking-[0.3em] uppercase mb-8 text-center"
        >
          Seu Segundo Cérebro
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-center text-white font-bold mb-4"
        >
          15 minutos de setup.
          <br />
          <span className="text-obsidian-400">Anos de clareza.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xl text-lendaria-400 text-center mb-12"
        >
          Não é curso de ferramenta. É sistema de pensamento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lendaria-900 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: What's included */}
            <div>
              <p className="font-display text-lg font-semibold text-white mb-6">
                O que está incluído:
              </p>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-obsidian-400 flex-shrink-0" />
                    <span className="font-body text-lendaria-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Price */}
            <div className="flex flex-col justify-center items-center md:items-end">
              <p className="font-mono text-sm text-lendaria-500 line-through mb-2">
                R$ 5.160 valor real
              </p>
              <p className="font-display text-6xl md:text-7xl font-bold text-white">
                R$ 288
              </p>
              <p className="font-body text-lendaria-400 mt-2">
                ou 12x de R$ 28,06
              </p>

              <button className="mt-8 bg-obsidian-600 hover:bg-obsidian-500 text-white font-display font-semibold text-lg px-12 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)]">
                Quero Meu Segundo Cérebro
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 pt-8 border-t border-lendaria-800 flex items-center justify-center gap-4"
          >
            <Shield className="w-6 h-6 text-emerald-400" />
            <p className="font-body text-lendaria-400">
              <span className="text-emerald-400 font-semibold">Garantia incondicional de 7 dias:</span>{' '}
              Teste sem compromisso. Se não for pra você, devolvemos 100%.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Section 10: Final CTA
function FinalCTASection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-[50vh] flex items-center justify-center bg-white py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl text-lendaria-black font-bold mb-8"
        >
          Clareza mental é a única vantagem que seus concorrentes não conseguem copiar.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-obsidian-600 hover:bg-obsidian-500 text-white font-display font-semibold text-xl px-16 py-5 rounded-xl transition-all duration-300 flex items-center gap-3 mx-auto shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)]"
        >
          <Sparkles className="w-6 h-6" />
          Começar Agora
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-mono text-sm text-lendaria-500 mt-8"
        >
          Acesso imediato • Garantia 7 dias • Suporte especializado
        </motion.p>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-lendaria-soft py-12 border-t border-lendaria-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Infinito - Assinatura */}
          <LogoInfinito className="w-24 h-auto" fill="#000" />

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-body text-lendaria-600">
            <a href="#" className="hover:text-lendaria-black transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-lendaria-black transition-colors">Privacidade</a>
            <a href="#" className="hover:text-lendaria-black transition-colors">Suporte</a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-lendaria-500">
            © 2024 Academia Lendár[IA] • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

// Header
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-lendaria-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <LogoDiamante className="w-8 h-8" fill="#000" />
          <span className="font-display font-semibold text-lendaria-800 text-sm">Academia Lendár[IA]</span>
        </div>
      </div>
    </header>
  )
}

// Main App
export default function App() {
  return (
    <main className="relative">
      <Header />
      <ProgressBar />
      <HeroSection />
      <ProblemSection />
      <BreatherQuote />
      <ReframeSection />
      <MechanismSection />
      <BreatherStat />
      <TransformationSection />
      <SocialProofSection />
      <OfferSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
