import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  Coffee,
  Flame,
  Mail,
  MountainSnow,
  Send,
  Snowflake,
  Sparkles,
  Sprout,
  Trees,
  UsersRound,
} from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const heroImage =
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2400&q=85'

const galleryImages = [
  {
    src: 'https://purple-peculiar-quelea-418.mypinata.cloud/ipfs/bafybeiaxzfadcgrzyxvznv7npfrmfmbairsmd7a2kfnwstorlxtwmqqxr4?auto=format&fit=crop&w=1200&q=85',
    alt: 'Cabin architecture surrounded by forest',
    className: 'md:col-span-5 md:row-span-2',
  },
  {
    src: 'https://purple-peculiar-quelea-418.mypinata.cloud/ipfs/bafybeibngt3blwgs2cvyj5pkx3q6673fc3uazfgkiadvdblcqzedxguzka?auto=format&fit=crop&w=1200&q=85',
    alt: 'Snowy mountain ridge under winter light',
    className: 'md:col-span-3',
  },
  {
    src: 'https://purple-peculiar-quelea-418.mypinata.cloud/ipfs/bafybeief7lcaww5xalqmytu6logl6s622z75cjnmd7bd6tmojyj2ty7q4y?auto=format&fit=crop&w=1200&q=85',
    alt: 'Dense native forest atmosphere',
    className: 'md:col-span-4',
  },
  {
    src: 'https://purple-peculiar-quelea-418.mypinata.cloud/ipfs/bafybeie2nmvk5tn544ymq7qzwgt53ci5o4c6eqhvlooabrchsa3mjge4qi?auto=format&fit=crop&w=1200&q=85',
    alt: 'Night sky over mountain landscape',
    className: 'md:col-span-4',
  },
  {
    src: 'https://purple-peculiar-quelea-418.mypinata.cloud/ipfs/bafybeigzgpmt2yjf4mccfubt3zn5vxeiyzwhaxzmhf3hzerqyp54him7pe?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ski track through winter terrain',
    className: 'md:col-span-3',
  },
]

const statusItems = [
  { title: 'Arquitectura', label: 'Anteproyecto cerrado', progress: 92 },
  { title: 'Construcción', label: 'Preparación de terreno', progress: 46 },
  { title: 'Interiorismo', label: 'Materialidad en selección', progress: 64 },
  { title: 'Paisajismo', label: 'Senderos y bosque nativo', progress: 38 },
]

const experiences = [
  {
    title: 'Ski / Corralco',
    text: 'Salidas tempranas hacia nieve volcánica y regreso a un refugio cálido.',
    icon: Snowflake,
  },
  {
    title: 'Café de mañana',
    text: 'Ventanas amplias, vapor lento y el bosque marcando el ritmo del día.',
    icon: Coffee,
  },
  {
    title: 'Silencio de bosque',
    text: 'Aislación natural, araucarias y senderos para bajar la velocidad.',
    icon: Trees,
  },
  {
    title: 'Cielo estrellado',
    text: 'Noches despejadas al pie del Lonquimay, pensadas para mirar hacia arriba.',
    icon: Sparkles,
  },
  {
    title: 'Atmósfera de fuego',
    text: 'Texturas nobles, luz baja y una chimenea como centro de reunión.',
    icon: Flame,
  },
  {
    title: 'Escape familiar',
    text: 'Espacios sobrios, resistentes y cómodos para volver cada invierno.',
    icon: UsersRound,
  },
]

const locations = ['Malalcahuello', 'Corralco', 'Volcán Lonquimay', 'Araucarias']

type WaitlistFields = {
  name: string
  email: string
  botField: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'local' | 'error'

function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#202626] text-[#F3F1EC]">
      <HeroSection />
      <ProjectStatusSection />
      <ExperienceSection />
      <GallerySection />
      <LocationSection />
      <WaitlistSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14"
    >
      <img
        src={heroImage}
        alt="Snow covered mountain and forest atmosphere near a winter refuge"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,38,38,.34)_0%,rgba(32,38,38,.66)_48%,rgba(32,38,38,.96)_100%)]" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 text-[11px] uppercase tracking-[0.24em] text-[#ECEBE7]/80 sm:px-8 lg:px-12">
        <a href="#top" className="font-semibold text-[#F3F1EC]">
          KULLINKO
        </a>
        <a
          href="#waitlist"
          className="rounded-full border border-[#ECEBE7]/25 px-4 py-2 transition hover:border-[#ECEBE7]/70 hover:bg-[#ECEBE7]/10"
        >
          Lista
        </a>
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_.45fr] lg:items-end">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D9D4C7]/80">
            Refugio · Ski · Malalcahuello
          </p>
          <h1 className="max-w-5xl text-balance text-6xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#F3F1EC] sm:text-7xl md:text-8xl lg:text-[7.8rem]">
            Refugio entre bosque y nieve.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ECEBE7]/82 sm:text-xl">
            Un refugio moderno en Malalcahuello, a minutos de Corralco.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#ECEBE7] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#202626] transition hover:-translate-y-0.5 hover:bg-[#F3F1EC]"
            >
              Únete a la lista
            </a>
            <a
              href="#proyecto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ECEBE7]/25 px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] transition hover:-translate-y-0.5 hover:border-[#ECEBE7]/70 hover:bg-[#ECEBE7]/10"
            >
              Ver proyecto
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hidden border-l border-[#ECEBE7]/20 pl-8 text-sm leading-7 text-[#D9D4C7]/80 lg:block">
          <p>
            KULLINKO nace como una pausa de montaña: arquitectura sobria,
            invierno profundo y una hospitalidad pensada para pocas reservas.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectStatusSection() {
  return (
    <section id="proyecto" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[.6fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
              Estado del proyecto
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F3F1EC] sm:text-5xl">
              Una apertura medida, sin perder el carácter del lugar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#D9D4C7]/78 lg:justify-self-end">
            La primera etapa está enfocada en consolidar una experiencia íntima:
            refugio, paisaje y descanso funcionando como una sola pieza.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statusItems.map((item, index) => (
            <article
              key={item.title}
              className="group border border-[#ECEBE7]/12 bg-[#2C262C]/34 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D9D4C7]/35 hover:bg-[#2C262C]/52"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-[#D9D4C7]/55">
                  0{index + 1}
                </span>
                <Sprout
                  className="h-5 w-5 text-[#D9D4C7]/60 transition group-hover:text-[#ECEBE7]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#F3F1EC]">
                {item.title}
              </h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-[#D9D4C7]/72">
                {item.label}
              </p>
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between text-xs text-[#D9D4C7]/60">
                  <span>Avance</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="h-px bg-[#ECEBE7]/13">
                  <div
                    className="h-px bg-[#D9D4C7] transition-all duration-700 group-hover:bg-[#F3F1EC]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="bg-[#ECEBE7] px-5 py-20 text-[#202626] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            Experiencia
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Días simples, materiales honestos y montaña cercana.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden bg-[#202626]/12 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => {
            const Icon = experience.icon
            return (
              <article
                key={experience.title}
                className="group min-h-64 bg-[#ECEBE7] p-6 transition duration-300 hover:bg-[#D9D4C7]"
              >
                <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full border border-[#445543]/25 text-[#445543] transition group-hover:scale-105 group-hover:bg-[#445543] group-hover:text-[#ECEBE7]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                  {experience.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#202626]/68">
                  {experience.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
              Galería
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Una postal sobria del invierno austral.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#D9D4C7]/72">
            Imágenes de referencia para expresar la dirección visual:
            arquitectura cálida, bosque profundo y nieve volcánica.
          </p>
        </div>
        <div className="grid auto-rows-[18rem] gap-3 md:grid-cols-12 md:auto-rows-[15rem]">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden bg-[#2C262C] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,38,38,0)_35%,rgba(32,38,38,.62)_100%)] opacity-80" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,212,199,.16),transparent_34%),linear-gradient(135deg,#202626_0%,#445543_48%,#2C262C_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
            Ubicación
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F3F1EC] sm:text-5xl">
            A minutos del centro invernal, dentro de un paisaje que pide calma.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#ECEBE7]/74">
            Malalcahuello reúne bosque nativo, termas cercanas, volcanes y una
            cultura de montaña silenciosa. KULLINKO toma esa energía sin
            sobreactuarla.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {locations.map((location, index) => (
            <div
              key={location}
              className="border border-[#ECEBE7]/14 bg-[#202626]/35 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#ECEBE7]/36 hover:bg-[#202626]/50"
            >
              <MountainSnow
                className="mb-10 h-5 w-5 text-[#D9D4C7]"
                aria-hidden="true"
              />
              <p className="text-xs uppercase tracking-[0.26em] text-[#D9D4C7]/55">
                Territorio 0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                {location}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WaitlistSection() {
  const [fields, setFields] = useState<WaitlistFields>({
    name: '',
    email: '',
    botField: '',
  })
  const [state, setState] = useState<SubmitState>('idle')
  const [error, setError] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
    if (error) setError('')
  }

  const storeLocally = () => {
    const existing = JSON.parse(
      window.localStorage.getItem('kullinko-waitlist') ?? '[]',
    ) as Array<{ name: string; email: string; createdAt: string }>

    window.localStorage.setItem(
      'kullinko-waitlist',
      JSON.stringify([
        ...existing,
        {
          name: fields.name.trim(),
          email: fields.email.trim(),
          createdAt: new Date().toISOString(),
        },
      ]),
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (fields.botField) return

    const trimmedName = fields.name.trim()
    const trimmedEmail = fields.email.trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)

    if (trimmedName.length < 2) {
      setError('Ingresa tu nombre para guardar el cupo.')
      return
    }

    if (!isValidEmail) {
      setError('Ingresa un correo válido para recibir novedades.')
      return
    }

    setState('submitting')
    setError('')

    const body = new URLSearchParams({
      'form-name': 'kullinko-waitlist',
      name: trimmedName,
      email: trimmedEmail,
      'bot-field': fields.botField,
    }).toString()

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!response.ok) throw new Error('Netlify form unavailable')

      setState('success')
      setFields({ name: '', email: '', botField: '' })
    } catch {
      storeLocally()
      setState('local')
      setFields({ name: '', email: '', botField: '' })
    }
  }

  return (
    <section
      id="waitlist"
      className="bg-[#F3F1EC] px-5 py-20 text-[#202626] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            Lista privada
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Recibe la primera ventana de apertura.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#202626]/68">
            La lista reunirá avances de obra, primeras fechas disponibles y
            cupos de estadía antes del lanzamiento público.
          </p>
        </div>
        <form
          name="kullinko-waitlist"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="border border-[#202626]/12 bg-[#ECEBE7] p-5 shadow-[0_28px_80px_rgba(32,38,38,.14)] sm:p-8"
        >
          <input type="hidden" name="form-name" value="kullinko-waitlist" />
          <p className="hidden">
            <label>
              No completar
              <input
                name="bot-field"
                value={fields.botField}
                onChange={(event) =>
                  setFields((current) => ({
                    ...current,
                    botField: event.target.value,
                  }))
                }
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </p>
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-[#202626]/76">
              Nombre
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="h-14 rounded-none border border-[#202626]/16 bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#202626]/76">
              Email
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="h-14 rounded-none border border-[#202626]/16 bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18"
                placeholder="nombre@correo.com"
              />
            </label>
          </div>
          {error ? (
            <p className="mt-4 text-sm font-medium text-[#7A3D2E]">{error}</p>
          ) : null}
          {state === 'success' ? (
            <p className="mt-4 text-sm font-medium text-[#445543]">
              Listo. Tu inscripción quedó registrada.
            </p>
          ) : null}
          {state === 'local' ? (
            <p className="mt-4 text-sm font-medium text-[#445543]">
              Listo. Se guardó en este dispositivo y quedará listo para
              sincronizar cuando el formulario esté disponible.
            </p>
          ) : null}
          {state === 'error' ? (
            <p className="mt-4 text-sm font-medium text-[#7A3D2E]">
              No fue posible registrar la solicitud. Intenta nuevamente.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#202626] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] transition hover:-translate-y-0.5 hover:bg-[#445543] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === 'submitting' ? 'Enviando...' : 'Quiero enterarme primero'}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-5 text-xs leading-6 text-[#202626]/52">
            Sin ruido comercial. Solo noticias relevantes sobre apertura,
            fechas y disponibilidad inicial.
          </p>
        </form>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#F3F1EC] sm:text-6xl lg:text-7xl">
          Inviernos lentos. Montaña. Silencio.
        </h2>
        <a
          href="#waitlist"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ECEBE7] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#202626] transition hover:-translate-y-0.5 hover:bg-[#F3F1EC]"
        >
          Unirme a la lista
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#ECEBE7]/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#D9D4C7]/64 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.18em] text-[#F3F1EC]">
          KULLINKO
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a className="transition hover:text-[#F3F1EC]" href="https://instagram.com/kullinko.refugio">
            Instagram
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-[#F3F1EC]" href="mailto:hola@kullinko.cl">
            <Mail className="h-4 w-4" aria-hidden="true" />
            hola@kullinko.cl
          </a>
          <p>© 2026 KULLINKO. Malalcahuello, Chile.</p>
        </div>
      </div>
    </footer>
  )
}
