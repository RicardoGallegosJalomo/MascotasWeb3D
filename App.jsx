import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Box,
  Sparkles,
  PawPrint,
  Truck,
  ShieldCheck,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle2,
  Gift,
  Image as ImageIcon,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "525618016990"; 
const WHATSAPP_TEXT = "Hola, quiero cotizar una figura 3D personalizada de mi mascota.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const Button = ({ children, href, variant = "primary", className = "" }) => {
  const styles =
    variant === "primary"
      ? "bg-[#2B2420] text-white hover:bg-[#4a3f38]"
      : "border border-[#2B2420] bg-white/50 text-[#2B2420] hover:bg-white";

  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-7 text-base font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-[2rem] border border-[#ead8c8] shadow-sm ${className}`}>
    {children}
  </div>
);

const steps = [
  {
    icon: Camera,
    title: "1. Envíanos su fotografía",
    text: "Puede ser una foto de tu mascota viva o una imagen especial de una mascota que quieras recordar.",
  },
  {
    icon: Sparkles,
    title: "2. Diseñamos su figura en 3D",
    text: "Creamos una pieza personalizada cuidando sus rasgos, postura, expresión y detalles más representativos.",
  },
  {
    icon: Box,
    title: "3. Imprimimos y empacamos",
    text: "La figura se imprime en 3D y se entrega en una caja personalizada con el diseño de tu mascota.",
  },
  {
    icon: Truck,
    title: "4. Recíbela en casa",
    text: "Te la enviamos cuidadosamente protegida para que llegue lista para regalar, conservar o exhibir.",
  },
];

const features = [
  "Diseños personalizados a partir de fotografía",
  "Figuras para mascotas vivas o fallecidas",
  "Empaque de cartón con diseño impreso",
  "Ideal para regalo, recuerdo o altar conmemorativo",
  "Acabado decorativo y emocional",
  "Atención directa durante el proceso",
];

const packages = [
  {
    name: "Recuerdo esencial",
    description: "Una figura personalizada para conservar un detalle especial de tu mascota.",
    items: [
      "Figura 3D personalizada",
      "Diseño basado en fotografía",
      "Empaque protector",
      "Revisión previa del diseño",
    ],
    highlight: false,
  },
  {
    name: "Caja personalizada",
    description:
      "La experiencia completa: figura 3D más caja con el diseño impreso de tu mascota.",
    items: [
      "Figura 3D personalizada",
      "Caja de cartón con diseño impreso",
      "Detalle decorativo premium",
      "Ideal para regalo o recuerdo",
    ],
    highlight: true,
  },
  {
    name: "Homenaje especial",
    description: "Pensado para recordar con cariño a una mascota que ya no está físicamente.",
    items: [
      "Figura conmemorativa",
      "Caja personalizada",
      "Mensaje o nombre de la mascota",
      "Presentación emotiva y cuidada",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "Sentí que volvía a tener un pedacito de mi perrita conmigo. La caja y la figura quedaron hermosas.",
    author: "Cliente conmemorativo",
  },
  {
    quote:
      "Mandé la foto de mi gato y captaron perfecto su carita. Fue un regalo muy especial.",
    author: "Cliente regalo",
  },
  {
    quote:
      "Me gustó que todo fuera personalizado, desde la figura hasta el empaque. Se siente muy cuidado.",
    author: "Cliente mascota viva",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#2B2420]">
      <header className="sticky top-0 z-50 border-b border-[#ead8c8] bg-[#FFF9F3]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2B2420] text-white shadow-sm">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">PetPrint 3D</p>
              <p className="text-xs text-[#806f63]">Mascotas hechas recuerdo</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#6d5d52] md:flex">
            <a href="#proceso" className="hover:text-[#2B2420]">
              Proceso
            </a>
            <a href="#empaque" className="hover:text-[#2B2420]">
              Empaque
            </a>
            <a href="#paquetes" className="hover:text-[#2B2420]">
              Paquetes
            </a>
            <a href="#contacto" className="hover:text-[#2B2420]">
              Contacto
            </a>
          </nav>

          <Button href={whatsappUrl} className="hidden sm:inline-flex">
            Cotizar
          </Button>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#F2C6B4]/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D9B99B]/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e4c9b8] bg-white/70 px-4 py-2 text-sm font-medium text-[#6d5d52] shadow-sm">
                <Heart className="h-4 w-4" />
                Figuras 3D personalizadas de mascotas
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-[#2B2420] sm:text-5xl md:text-6xl">
                Convertimos la foto de tu mascota en una figura 3D llena de amor.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5d52]">
                Diseñamos e imprimimos piezas personalizadas a partir de una fotografía.
                Cada figura se entrega en una caja de cartón con el diseño de tu mascota
                impreso, lista para regalar, conservar o recordar con cariño.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl}>
                  Quiero mi figura 3D
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#proceso" variant="secondary">
                  Ver cómo funciona
                </Button>
              </div>

              <div className="mt-9 grid max-w-lg grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-xs text-[#806f63]">personalizado</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-black">3D</p>
                  <p className="text-xs text-[#806f63]">diseño e impresión</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-black">♡</p>
                  <p className="text-xs text-[#806f63]">vivos o fallecidos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] border border-[#ead8c8] bg-white p-4 shadow-2xl">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex min-h-[390px] flex-col justify-between rounded-[2rem] bg-[#EAD3C0] p-6">
                    <div className="w-fit rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#6d5d52]">
                      Foto original
                    </div>
                    <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-white/70 shadow-inner">
                      <ImageIcon className="h-24 w-24 text-[#8a6a55]" />
                    </div>
                    <p className="text-sm leading-6 text-[#6d5d52]">
                      El cliente envía una fotografía clara de su mascota para capturar su esencia.
                    </p>
                  </div>

                  <div className="flex min-h-[390px] flex-col justify-between rounded-[2rem] bg-[#2B2420] p-6 text-white">
                    <div className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                      Figura + caja
                    </div>
                    <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-[2rem] bg-white/10 shadow-inner">
                      <Box className="h-24 w-24 text-[#f6dbc6]" />
                    </div>
                    <p className="text-sm leading-6 text-[#f6dbc6]">
                      Diseño 3D impreso y empaque personalizado con la imagen de la mascota.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 left-8 rounded-3xl bg-white px-5 py-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  <p className="font-bold">Un recuerdo con forma, textura y corazón</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#9b745e]">
                  Diseño emocional
                </p>
                <h2 className="text-4xl font-black tracking-tight">
                  No hacemos figuras genéricas. Hacemos piezas con historia.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#6d5d52]">
                  Cada mascota tiene una forma de mirar, una postura, una manchita,
                  una expresión o un gesto que la vuelve única. Nuestro trabajo es
                  transformar esos detalles en una pieza física que puedas tener cerca.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-3xl border border-[#ead8c8] bg-[#FFF9F3] p-5"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#6c4e3d]" />
                    <p className="font-medium leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#9b745e]">
                Proceso sencillo
              </p>
              <h2 className="text-4xl font-black tracking-tight">
                De una foto a una figura personalizada
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6d5d52]">
                Nosotros nos encargamos del diseño, la impresión y la presentación final.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="bg-white">
                    <div className="p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1D7C6]">
                        <Icon className="h-7 w-7 text-[#4a3529]" />
                      </div>
                      <h3 className="text-xl font-black">{step.title}</h3>
                      <p className="mt-3 leading-7 text-[#6d5d52]">{step.text}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="empaque" className="bg-[#2B2420] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="rounded-[2.5rem] bg-white/10 p-5 shadow-2xl">
              <div className="rounded-[2rem] border border-white/10 bg-[#3a312c] p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#eacdb8]">
                      Caja personalizada
                    </p>
                    <h3 className="mt-2 text-3xl font-black">Lista para entregar</h3>
                  </div>
                  <Box className="h-12 w-12 text-[#eacdb8]" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <Gift className="mb-8 h-10 w-10 text-[#eacdb8]" />
                    <p className="text-lg font-bold">Diseño exterior</p>
                    <p className="mt-2 text-sm leading-6 text-[#ead8c8]">
                      La caja puede llevar el diseño, nombre o estilo visual de la mascota.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <ShieldCheck className="mb-8 h-10 w-10 text-[#eacdb8]" />
                    <p className="text-lg font-bold">Protección interna</p>
                    <p className="mt-2 text-sm leading-6 text-[#ead8c8]">
                      El empaque ayuda a conservar y presentar la figura con cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#eacdb8]">
                Más que una figura
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Una experiencia completa desde que abres la caja.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#ead8c8]">
                El empaque forma parte del recuerdo. Por eso, cada figura puede entregarse
                en una caja de cartón personalizada con el diseño de la mascota impreso,
                creando una presentación especial, emotiva y lista para regalar.
              </p>
              <div className="mt-8 rounded-3xl bg-white/10 p-6">
                <p className="text-xl font-bold">Perfecto para:</p>
                <div className="mt-4 grid gap-3 text-[#ead8c8] sm:grid-cols-2">
                  <p>♡ Regalos personalizados</p>
                  <p>♡ Recuerdos conmemorativos</p>
                  <p>♡ Decoración del hogar</p>
                  <p>♡ Detalles para amantes de mascotas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="paquetes" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#9b745e]">
                Opciones de servicio
              </p>
              <h2 className="text-4xl font-black tracking-tight">
                Elige cómo quieres recordar a tu mascota
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6d5d52]">
                Los precios pueden ajustarse según tamaño, nivel de detalle y tipo de acabado.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={pkg.highlight ? "bg-[#2B2420] text-white" : "bg-[#FFF9F3]"}
                >
                  <div className="p-7">
                    {pkg.highlight && (
                      <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2B2420]">
                        Más solicitado
                      </div>
                    )}
                    <h3 className="text-2xl font-black">{pkg.name}</h3>
                    <p
                      className={`mt-3 leading-7 ${
                        pkg.highlight ? "text-[#ead8c8]" : "text-[#6d5d52]"
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <div className="my-7 h-px bg-current opacity-15" />
                    <ul className="space-y-3">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={whatsappUrl}
                      className={`mt-8 w-full ${
                        pkg.highlight
                          ? "!bg-white !text-[#2B2420] hover:!bg-[#f3e5d9]"
                          : ""
                      }`}
                    >
                      Solicitar cotización
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.author} className="bg-white">
                  <div className="p-7">
                    <div className="mb-5 flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg leading-8 text-[#4c4039]">“{item.quote}”</p>
                    <p className="mt-5 font-bold text-[#806f63]">{item.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#DAB89D] shadow-xl">
            <div className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4a3529]">
                  Cotización personalizada
                </p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Envíanos la foto de tu mascota y creemos algo único.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a3529]">
                  Cuéntanos si quieres una figura de una mascota viva, un regalo especial
                  o una pieza conmemorativa. Te orientamos sobre tamaño, acabado, empaque
                  y tiempos de entrega.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={whatsappUrl}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>
                  <Button href="#paquetes" variant="secondary">
                    Ver paquetes
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/70 p-6 shadow-sm">
                <h3 className="text-2xl font-black">Para cotizar necesitamos:</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Fotografía clara de la mascota",
                    "Nombre de la mascota",
                    "Tamaño aproximado deseado",
                    "Si será regalo, recuerdo o pieza conmemorativa",
                    "Ciudad o zona de envío",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4a3529]" />
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <a
          href={whatsappUrl}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2B2420] text-white shadow-2xl transition hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          <Send className="h-6 w-6" />
        </a>
      </main>

      <footer className="border-t border-[#ead8c8] bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-[#6d5d52] md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 PetPrint 3D. Figuras personalizadas de mascotas.</p>
          <div className="flex gap-5">
            <a href="#inicio" className="hover:text-[#2B2420]">
              Inicio
            </a>
            <a href="#proceso" className="hover:text-[#2B2420]">
              Proceso
            </a>
            <a href={whatsappUrl} className="hover:text-[#2B2420]">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
