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

const progressValues = [100, 100, 12, 72]

const experienceIcons = [
  Snowflake,
  Coffee,
  Trees,
  Sparkles,
  Flame,
  UsersRound,
]

type Language = 'es' | 'en' | 'pt'

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Port (BR)' },
]

const copy = {
  es: {
    documentLang: 'es',
    navWaitlist: 'Lista',
    hero: {
      eyebrow: 'Refugio · Ski · Malalcahuello',
      title: 'Refugio entre bosque y nieve.',
      text: 'Un refugio moderno en Malalcahuello, a minutos de Corralco.',
      primaryCta: 'Únete a la lista',
      secondaryCta: 'Ver proyecto',
      sideNote:
        'KULLINKO nace como una pausa de montaña: arquitectura sobria, invierno profundo y una hospitalidad pensada para pocas reservas.',
      imageAlt:
        'Montaña nevada y bosque cerca de un refugio de invierno',
    },
    project: {
      eyebrow: 'Estado del proyecto',
      title: 'Una apertura medida, sin perder el carácter del lugar.',
      text: 'La primera etapa está enfocada en consolidar una experiencia íntima: refugio, paisaje y descanso funcionando como una sola pieza.',
      progressLabel: 'Avance',
      items: [
        { title: 'Arquitectura', label: 'Proyecto cerrado' },
        { title: 'Construcción', label: 'Obra gruesa terminada' },
        { title: 'Terminaciones', label: 'Etapa comenzando' },
        {
          title: 'Paisajismo natural',
          label: 'Siempre creciendo y renovando',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Días simples, materiales honestos y montaña cercana.',
      items: [
        {
          title: 'Ski / Corralco',
          text: 'Salidas tempranas hacia nieve volcánica y regreso a un refugio cálido.',
        },
        {
          title: 'Café de mañana',
          text: 'Ventanas amplias, vapor lento y el bosque marcando el ritmo del día.',
        },
        {
          title: 'Silencio de bosque',
          text: 'Aislación natural, araucarias y senderos para bajar la velocidad.',
        },
        {
          title: 'Cielo estrellado',
          text: 'Noches despejadas al pie del Lonquimay, pensadas para mirar hacia arriba.',
        },
        {
          title: 'Atmósfera de fuego',
          text: 'Texturas nobles, luz baja y una chimenea como centro de reunión.',
        },
        {
          title: 'Escape familiar',
          text: 'Espacios sobrios, resistentes y cómodos para volver cada invierno.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Una postal sobria del invierno austral.',
      text: 'Imágenes recolectadas en nuestros viajes a Malalcahuello y sus alrededores.',
    },
    location: {
      eyebrow: 'Ubicación',
      title:
        'A minutos del centro de ski Corralco, dentro de un paisaje que pide calma.',
      town:
        'A 5 minutos del centro de Malalcahuello, donde encontrarás restaurantes, bares y más atractivos, junto a supermercados y farmacias para que nada te falte.',
      landscape:
        'Malalcahuello reúne bosque nativo, termas cercanas, volcanes y una cultura de montaña silenciosa. KULLINKO toma esa energía sin sobreactuarla.',
      territory: 'Territorio',
      places: ['Malalcahuello', 'Corralco', 'Volcán Lonquimay', 'Araucarias'],
    },
    pricing: {
      eyebrow: 'Tarifas referenciales',
      title: 'Una preventa simple, por persona y por temporada.',
      text: 'El refugio se reserva completo. Los valores se calculan según el número de personas y la temporada de viaje.',
      cardEyebrow: 'Preventa refugio',
      cardTitle: 'Tarifas por temporada',
      cardText:
        'Valores referenciales por persona, calculados por noche según la temporada.',
      lowChip: 'Baja',
      highChip: 'Alta',
      perPersonShort: 'pp',
      refuge: 'Refugio',
      lowSeason: 'Temporada baja',
      lowSeasonMonths: 'Octubre a junio',
      highSeason: 'Temporada alta',
      highSeasonMonths: 'Julio a septiembre',
      guests: (count: number) => `${count} personas`,
    },
    waitlist: {
      eyebrow: 'Lista privada',
      title: 'Recibe la primera ventana de apertura.',
      text: 'La lista reunirá avances de obra, primeras fechas disponibles y cupos de estadía antes del lanzamiento público.',
      honeypot: 'No completar',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'nombre@correo.com',
      nameError: 'Ingresa tu nombre para guardar el cupo.',
      emailError: 'Ingresa un correo válido para recibir novedades.',
      success: 'Listo. Tu inscripción quedó registrada.',
      local:
        'Listo. Se guardó en este dispositivo y quedará listo para sincronizar cuando el formulario esté disponible.',
      genericError: 'No fue posible registrar la solicitud. Intenta nuevamente.',
      submitting: 'Enviando...',
      submit: 'Quiero enterarme primero',
      note: 'Sin ruido comercial. Solo noticias relevantes sobre apertura, fechas y disponibilidad inicial.',
    },
    finalCta: {
      title: 'Inviernos lentos. Montaña. Silencio.',
      cta: 'Unirme a la lista',
    },
    footer: {
      copyright: '© 2026 KULLINKO. Malalcahuello, Chile.',
    },
  },
  en: {
    documentLang: 'en',
    navWaitlist: 'Waitlist',
    hero: {
      eyebrow: 'Refuge · Ski · Malalcahuello',
      title: 'A refuge between forest and snow.',
      text: 'A modern mountain refuge in Malalcahuello, minutes from Corralco.',
      primaryCta: 'Join the waitlist',
      secondaryCta: 'View project',
      sideNote:
        'KULLINKO was born as a mountain pause: restrained architecture, deep winter, and hospitality designed for just a few stays.',
      imageAlt:
        'Snow-covered mountain and forest near a winter refuge',
    },
    project: {
      eyebrow: 'Project status',
      title: 'A measured opening, without losing the character of the place.',
      text: 'The first stage is focused on consolidating an intimate experience: refuge, landscape, and rest working as one.',
      progressLabel: 'Progress',
      items: [
        { title: 'Architecture', label: 'Project completed' },
        { title: 'Construction', label: 'Structural work completed' },
        { title: 'Finishing works', label: 'Stage beginning' },
        {
          title: 'Natural landscaping',
          label: 'Always growing and renewing',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Simple days, honest materials, and the mountain close by.',
      items: [
        {
          title: 'Ski / Corralco',
          text: 'Early departures toward volcanic snow and a return to a warm refuge.',
        },
        {
          title: 'Morning coffee',
          text: 'Wide windows, slow steam, and the forest setting the pace of the day.',
        },
        {
          title: 'Forest silence',
          text: 'Natural insulation, araucarias, and trails made for slowing down.',
        },
        {
          title: 'Starry sky',
          text: 'Clear nights at the foot of Lonquimay, made for looking upward.',
        },
        {
          title: 'Firelit atmosphere',
          text: 'Noble textures, low light, and a fireplace as the center of gathering.',
        },
        {
          title: 'Family escape',
          text: 'Sober, resilient, comfortable spaces to return to every winter.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'A restrained postcard from the southern winter.',
      text: 'Images collected during our trips to Malalcahuello and its surroundings.',
    },
    location: {
      eyebrow: 'Location',
      title:
        'Minutes from Corralco Ski Center, within a landscape that invites calm.',
      town:
        'Five minutes from downtown Malalcahuello, where you will find restaurants, bars, and more attractions, along with supermarkets and pharmacies so nothing is missing.',
      landscape:
        'Malalcahuello brings together native forest, nearby hot springs, volcanoes, and a quiet mountain culture. KULLINKO carries that energy without overplaying it.',
      territory: 'Territory',
      places: ['Malalcahuello', 'Corralco', 'Lonquimay Volcano', 'Araucarias'],
    },
    pricing: {
      eyebrow: 'Reference rates',
      title: 'A simple presale, per person and by season.',
      text: 'The refuge is booked as a whole. Prices are calculated by number of guests and travel season.',
      cardEyebrow: 'Refuge presale',
      cardTitle: 'Seasonal rates',
      cardText:
        'Reference prices per person, calculated per night according to the season.',
      lowChip: 'Low',
      highChip: 'High',
      perPersonShort: 'pp',
      refuge: 'Refuge',
      lowSeason: 'Low season',
      lowSeasonMonths: 'October to June',
      highSeason: 'High season',
      highSeasonMonths: 'July to September',
      guests: (count: number) => `${count} guests`,
    },
    waitlist: {
      eyebrow: 'Private waitlist',
      title: 'Receive the first opening window.',
      text: 'The list will gather construction updates, first available dates, and stay openings before the public launch.',
      honeypot: 'Do not fill out',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'name@email.com',
      nameError: 'Enter your name to reserve your spot.',
      emailError: 'Enter a valid email to receive updates.',
      success: 'Done. Your registration has been recorded.',
      local:
        'Done. It was saved on this device and will be ready to sync when the form is available.',
      genericError: 'We could not register the request. Please try again.',
      submitting: 'Sending...',
      submit: 'I want to hear first',
      note: 'No commercial noise. Only relevant news about opening, dates, and initial availability.',
    },
    finalCta: {
      title: 'Slow winters. Mountain. Silence.',
      cta: 'Join the waitlist',
    },
    footer: {
      copyright: '© 2026 KULLINKO. Malalcahuello, Chile.',
    },
  },
  pt: {
    documentLang: 'pt-BR',
    navWaitlist: 'Lista',
    hero: {
      eyebrow: 'Refúgio · Ski · Malalcahuello',
      title: 'Um refúgio entre bosque e neve.',
      text: 'Um refúgio moderno em Malalcahuello, a poucos minutos de Corralco.',
      primaryCta: 'Entrar na lista',
      secondaryCta: 'Ver projeto',
      sideNote:
        'KULLINKO nasce como uma pausa na montanha: arquitetura sóbria, inverno profundo e uma hospitalidade pensada para poucas reservas.',
      imageAlt:
        'Montanha nevada e bosque perto de um refúgio de inverno',
    },
    project: {
      eyebrow: 'Estado do projeto',
      title: 'Uma abertura cuidadosa, sem perder o caráter do lugar.',
      text: 'A primeira etapa está focada em consolidar uma experiência íntima: refúgio, paisagem e descanso funcionando como uma só peça.',
      progressLabel: 'Avanço',
      items: [
        { title: 'Arquitetura', label: 'Projeto concluído' },
        { title: 'Construção', label: 'Obra estrutural concluída' },
        { title: 'Acabamentos', label: 'Etapa começando' },
        {
          title: 'Paisagismo natural',
          label: 'Sempre crescendo e se renovando',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Dias simples, materiais honestos e a montanha por perto.',
      items: [
        {
          title: 'Ski / Corralco',
          text: 'Saídas cedo para a neve vulcânica e retorno a um refúgio acolhedor.',
        },
        {
          title: 'Café da manhã',
          text: 'Janelas amplas, vapor lento e o bosque marcando o ritmo do dia.',
        },
        {
          title: 'Silêncio do bosque',
          text: 'Isolamento natural, araucárias e trilhas para desacelerar.',
        },
        {
          title: 'Céu estrelado',
          text: 'Noites limpas aos pés do Lonquimay, pensadas para olhar para cima.',
        },
        {
          title: 'Atmosfera de fogo',
          text: 'Texturas nobres, luz baixa e uma lareira como centro de encontro.',
        },
        {
          title: 'Escape em família',
          text: 'Espaços sóbrios, resistentes e confortáveis para voltar todo inverno.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galeria',
      title: 'Um cartão-postal sóbrio do inverno austral.',
      text: 'Imagens coletadas em nossas viagens a Malalcahuello e seus arredores.',
    },
    location: {
      eyebrow: 'Localização',
      title:
        'A poucos minutos do centro de ski Corralco, dentro de uma paisagem que pede calma.',
      town:
        'A 5 minutos do centro de Malalcahuello, onde você encontrará restaurantes, bares e mais atrativos, junto com supermercados e farmácias para que nada falte.',
      landscape:
        'Malalcahuello reúne bosque nativo, termas próximas, vulcões e uma cultura de montanha silenciosa. KULLINKO toma essa energia sem exagerar.',
      territory: 'Território',
      places: ['Malalcahuello', 'Corralco', 'Vulcão Lonquimay', 'Araucárias'],
    },
    pricing: {
      eyebrow: 'Tarifas referenciais',
      title: 'Uma pré-venda simples, por pessoa e por temporada.',
      text: 'O refúgio é reservado por completo. Os valores são calculados pelo número de pessoas e pela temporada da viagem.',
      cardEyebrow: 'Pré-venda refúgio',
      cardTitle: 'Tarifas por temporada',
      cardText:
        'Valores referenciais por pessoa, calculados por noite conforme a temporada.',
      lowChip: 'Baixa',
      highChip: 'Alta',
      perPersonShort: 'pp',
      refuge: 'Refúgio',
      lowSeason: 'Temporada baixa',
      lowSeasonMonths: 'Outubro a junho',
      highSeason: 'Temporada alta',
      highSeasonMonths: 'Julho a setembro',
      guests: (count: number) => `${count} pessoas`,
    },
    waitlist: {
      eyebrow: 'Lista privada',
      title: 'Receba a primeira janela de abertura.',
      text: 'A lista reunirá avanços da obra, primeiras datas disponíveis e vagas de estadia antes do lançamento público.',
      honeypot: 'Não preencher',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'nome@email.com',
      nameError: 'Digite seu nome para reservar o lugar.',
      emailError: 'Digite um email válido para receber novidades.',
      success: 'Pronto. Sua inscrição foi registrada.',
      local:
        'Pronto. Foi salvo neste dispositivo e ficará pronto para sincronizar quando o formulário estiver disponível.',
      genericError: 'Não foi possível registrar a solicitação. Tente novamente.',
      submitting: 'Enviando...',
      submit: 'Quero saber primeiro',
      note: 'Sem ruído comercial. Apenas notícias relevantes sobre abertura, datas e disponibilidade inicial.',
    },
    finalCta: {
      title: 'Invernos lentos. Montanha. Silêncio.',
      cta: 'Entrar na lista',
    },
    footer: {
      copyright: '© 2026 KULLINKO. Malalcahuello, Chile.',
    },
  },
}

type Copy = (typeof copy)[Language]

const pricePerPerson = {
  lowSeason: 25000,
  highSeason: 50000,
}

const pricingRows = Array.from({ length: 7 }, (_, index) => {
  const guests = index + 4

  return {
    guests,
    lowSeasonTotal: guests * pricePerPerson.lowSeason,
    highSeasonTotal: guests * pricePerPerson.highSeason,
  }
})

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price)

type WaitlistFields = {
  name: string
  email: string
  botField: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'local' | 'error'

function LandingPage() {
  const [language, setLanguage] = useState<Language>('es')
  const t = copy[language]

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#202626] text-[#F3F1EC]"
      lang={t.documentLang}
    >
      <HeroSection
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <ProjectStatusSection t={t} />
      <ExperienceSection t={t} />
      <GallerySection t={t} />
      <LocationSection t={t} />
      <PricingSection t={t} />
      <WaitlistSection t={t} />
      <FinalCtaSection t={t} />
      <Footer t={t} />
    </main>
  )
}

function HeroSection({
  language,
  onLanguageChange,
  t,
}: {
  language: Language
  onLanguageChange: (language: Language) => void
  t: Copy
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14"
    >
      <img
        src={heroImage}
        alt={t.hero.imageAlt}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,38,38,.34)_0%,rgba(32,38,38,.66)_48%,rgba(32,38,38,.96)_100%)]" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-5 py-5 text-[11px] uppercase tracking-[0.24em] text-[#ECEBE7]/80 sm:px-8 lg:px-12">
        <a href="#top" className="font-semibold text-[#F3F1EC]">
          KULLINKO
        </a>
        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full border border-[#ECEBE7]/20 bg-[#202626]/35 p-1 backdrop-blur"
            aria-label="Language selector"
          >
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => onLanguageChange(option.code)}
                className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                  language === option.code
                    ? 'bg-[#ECEBE7] text-[#202626]'
                    : 'text-[#ECEBE7]/72 hover:bg-[#ECEBE7]/10 hover:text-[#F3F1EC]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a
            href="#waitlist"
            className="rounded-full border border-[#ECEBE7]/25 px-4 py-2 transition hover:border-[#ECEBE7]/70 hover:bg-[#ECEBE7]/10"
          >
            {t.navWaitlist}
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_.45fr] lg:items-end">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D9D4C7]/80">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-balance text-6xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#F3F1EC] sm:text-7xl md:text-8xl lg:text-[7.8rem]">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ECEBE7]/82 sm:text-xl">
            {t.hero.text}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#ECEBE7] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#202626] transition hover:-translate-y-0.5 hover:bg-[#F3F1EC]"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#proyecto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ECEBE7]/25 px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] transition hover:-translate-y-0.5 hover:border-[#ECEBE7]/70 hover:bg-[#ECEBE7]/10"
            >
              {t.hero.secondaryCta}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hidden border-l border-[#ECEBE7]/20 pl-8 text-sm leading-7 text-[#D9D4C7]/80 lg:block">
          <p>{t.hero.sideNote}</p>
        </div>
      </div>
    </section>
  )
}

function ProjectStatusSection({ t }: { t: Copy }) {
  return (
    <section id="proyecto" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[.6fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
              {t.project.eyebrow}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F3F1EC] sm:text-5xl">
              {t.project.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#D9D4C7]/78 lg:justify-self-end">
            {t.project.text}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.project.items.map((item, index) => (
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
                  <span>{t.project.progressLabel}</span>
                  <span>{progressValues[index]}%</span>
                </div>
                <div className="h-px bg-[#ECEBE7]/13">
                  <div
                    className="h-px bg-[#D9D4C7] transition-all duration-700 group-hover:bg-[#F3F1EC]"
                    style={{ width: `${progressValues[index]}%` }}
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

function ExperienceSection({ t }: { t: Copy }) {
  return (
    <section className="bg-[#ECEBE7] px-5 py-20 text-[#202626] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            {t.experience.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.experience.title}
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden bg-[#202626]/12 md:grid-cols-2 lg:grid-cols-3">
          {t.experience.items.map((experience, index) => {
            const Icon = experienceIcons[index]
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

function GallerySection({ t }: { t: Copy }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
              {t.gallery.eyebrow}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#D9D4C7]/72">
            {t.gallery.text}
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

function LocationSection({ t }: { t: Copy }) {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,212,199,.16),transparent_34%),linear-gradient(135deg,#202626_0%,#445543_48%,#2C262C_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9D4C7]/65">
            {t.location.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F3F1EC] sm:text-5xl">
            {t.location.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#ECEBE7]/74">
            {t.location.town}
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#ECEBE7]/74">
            {t.location.landscape}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.location.places.map((location, index) => (
            <div
              key={location}
              className="border border-[#ECEBE7]/14 bg-[#202626]/35 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#ECEBE7]/36 hover:bg-[#202626]/50"
            >
              <MountainSnow
                className="mb-10 h-5 w-5 text-[#D9D4C7]"
                aria-hidden="true"
              />
              <p className="text-xs uppercase tracking-[0.26em] text-[#D9D4C7]/55">
                {t.location.territory} 0{index + 1}
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

function WaitlistSection({ t }: { t: Copy }) {
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
      setError(t.waitlist.nameError)
      return
    }

    if (!isValidEmail) {
      setError(t.waitlist.emailError)
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
            {t.waitlist.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.waitlist.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#202626]/68">
            {t.waitlist.text}
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
              {t.waitlist.honeypot}
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
              {t.waitlist.nameLabel}
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="h-14 rounded-none border border-[#202626]/16 bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18"
                placeholder={t.waitlist.namePlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#202626]/76">
              {t.waitlist.emailLabel}
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="h-14 rounded-none border border-[#202626]/16 bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18"
                placeholder={t.waitlist.emailPlaceholder}
              />
            </label>
          </div>
          {error ? (
            <p className="mt-4 text-sm font-medium text-[#7A3D2E]">{error}</p>
          ) : null}
          {state === 'success' ? (
            <p className="mt-4 text-sm font-medium text-[#445543]">
              {t.waitlist.success}
            </p>
          ) : null}
          {state === 'local' ? (
            <p className="mt-4 text-sm font-medium text-[#445543]">
              {t.waitlist.local}
            </p>
          ) : null}
          {state === 'error' ? (
            <p className="mt-4 text-sm font-medium text-[#7A3D2E]">
              {t.waitlist.genericError}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#202626] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] transition hover:-translate-y-0.5 hover:bg-[#445543] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === 'submitting' ? t.waitlist.submitting : t.waitlist.submit}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-5 text-xs leading-6 text-[#202626]/52">
            {t.waitlist.note}
          </p>
        </form>
      </div>
    </section>
  )
}

function PricingSection({ t }: { t: Copy }) {
  return (
    <section className="bg-[#F3F1EC] px-5 pt-20 text-[#202626] sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            {t.pricing.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#202626]/68">
            {t.pricing.text}
          </p>
        </div>
        <PricingTable t={t} />
      </div>
    </section>
  )
}

function PricingTable({ t }: { t: Copy }) {
  return (
    <div className="border border-[#202626]/12 bg-[#ECEBE7] shadow-[0_28px_80px_rgba(32,38,38,.10)]">
      <div className="border-b border-[#202626]/10 p-5 sm:p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#445543]/70">
          {t.pricing.cardEyebrow}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#202626]">
              {t.pricing.cardTitle}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#202626]/62">
              {t.pricing.cardText}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#202626]/10 bg-[#202626]/10 text-center">
            <div className="bg-[#F3F1EC] px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#445543]/70">
                {t.pricing.lowChip}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#202626]">
                {formatPrice(pricePerPerson.lowSeason)} {t.pricing.perPersonShort}
              </p>
            </div>
            <div className="bg-[#202626] px-4 py-3 text-[#F3F1EC]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D9D4C7]/70">
                {t.pricing.highChip}
              </p>
              <p className="mt-1 text-sm font-semibold">
                {formatPrice(pricePerPerson.highSeason)} {t.pricing.perPersonShort}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#202626]/10 text-[11px] uppercase tracking-[0.22em] text-[#202626]/48">
              <th scope="col" className="px-5 py-4 font-semibold sm:px-8">
                {t.pricing.refuge}
              </th>
              <th scope="col" className="px-5 py-4 font-semibold">
                <span className="block">{t.pricing.lowSeason}</span>
                <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] text-[#202626]/38">
                  {t.pricing.lowSeasonMonths}
                </span>
              </th>
              <th scope="col" className="px-5 py-4 font-semibold">
                <span className="block">{t.pricing.highSeason}</span>
                <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] text-[#202626]/38">
                  {t.pricing.highSeasonMonths}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => (
              <tr
                key={row.guests}
                className="border-b border-[#202626]/8 last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-base font-semibold text-[#202626] sm:px-8"
                >
                  {t.pricing.guests(row.guests)}
                </th>
                <td className="px-5 py-4">
                  <p className="text-base font-semibold text-[#202626]">
                    {formatPrice(row.lowSeasonTotal)}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-base font-semibold text-[#202626]">
                    {formatPrice(row.highSeasonTotal)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FinalCtaSection({ t }: { t: Copy }) {
  return (
    <section className="px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#F3F1EC] sm:text-6xl lg:text-7xl">
          {t.finalCta.title}
        </h2>
        <a
          href="#waitlist"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#ECEBE7] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#202626] transition hover:-translate-y-0.5 hover:bg-[#F3F1EC]"
        >
          {t.finalCta.cta}
        </a>
      </div>
    </section>
  )
}

function Footer({ t }: { t: Copy }) {
  return (
    <footer className="border-t border-[#ECEBE7]/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#D9D4C7]/64 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.18em] text-[#F3F1EC]">
          KULLINKO
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            className="transition hover:text-[#F3F1EC]"
            href="https://www.instagram.com/kullinko.refugiomalalcahuello/"
          >
            Instagram
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-[#F3F1EC]"
            href="mailto:kullinkospa@gmail.com"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            kullinkospa@gmail.com
          </a>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
