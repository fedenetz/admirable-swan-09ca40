import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  BedDouble,
  Coffee,
  CookingPot,
  Flame,
  Mail,
  MapPin,
  MountainSnow,
  Navigation,
  Send,
  Snowflake,
  Sparkles,
  Sprout,
  Trees,
  UsersRound,
} from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const heroImage =
  '/images/hero.png'

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

const refugeImages = {
  chucao: {
    wide: '/images/refugios/chucao-wide.png',
    vertical: '/images/refugios/chucao-vertical.png',
  },
  carpintero: {
    wide: '/images/refugios/carpintero-wide.png',
    vertical: '/images/refugios/carpintero-vertical.png',
  },
}

type Language = 'es' | 'en' | 'pt'

const languageOptions: Array<{
  code: Language
  label: string
  shortLabel: string
}> = [
  { code: 'es', label: 'Español', shortLabel: 'ES' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'pt', label: 'Port (BR)', shortLabel: 'PT' },
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
      mapEyebrow: 'Mapa referencial',
      mapNote: 'Área general Caracoles. Ubicación exacta disponible en la reserva.',
      mapLabels: {
        town: 'Malalcahuello',
        ski: 'Centro Ski Corralco',
        area: 'Caracoles',
        route: 'Ruta hacia Corralco',
      },
      places: ['Malalcahuello', 'Corralco', 'Volcán Lonquimay', 'Araucarias'],
    },
    pricing: {
      eyebrow: 'Tarifas referenciales',
      title: 'Una preventa simple, por persona y por temporada.',
      text: 'El refugio se reserva completo. Los valores se calculan según el número de personas y la temporada de viaje.',
      cardEyebrow: 'Preventa refugio',
      cardTitle: 'Tarifas por temporada',
      cardText:
        'Valores referenciales por persona, calculados por noche según número de personas y temporada.',
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
    refuges: {
      eyebrow: 'Refugios disponibles',
      title: 'Dos refugios, una misma forma de habitar la montaña.',
      text: 'Chucao y Carpintero comparten distribución, capacidad y equipamiento: espacios cálidos para grupos familiares o estadías con amigos.',
      capacity: 'Hasta 10 personas',
      layout: '2 habitaciones · 2 baños · altillo',
      kitchen: 'Cocina completa',
      heating: 'Calefacción con caldera a combustión lenta de leña',
      items: [
        {
          key: 'chucao',
          name: 'Refugio Chucao',
          alt: 'Refugio Chucao de KULLINKO en entorno de bosque',
        },
        {
          key: 'carpintero',
          name: 'Refugio Carpintero',
          alt: 'Refugio Carpintero de KULLINKO en entorno de bosque',
        },
      ],
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
      mapEyebrow: 'Reference map',
      mapNote: 'General Caracoles area. Exact location available upon booking.',
      mapLabels: {
        town: 'Malalcahuello',
        ski: 'Corralco Ski Center',
        area: 'Caracoles',
        route: 'Route to Corralco',
      },
      places: ['Malalcahuello', 'Corralco', 'Lonquimay Volcano', 'Araucarias'],
    },
    pricing: {
      eyebrow: 'Reference rates',
      title: 'A simple presale, per person and by season.',
      text: 'The refuge is booked as a whole. Prices are calculated by number of guests and travel season.',
      cardEyebrow: 'Refuge presale',
      cardTitle: 'Seasonal rates',
      cardText:
        'Reference prices per person, calculated per night by number of guests and season.',
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
    refuges: {
      eyebrow: 'Available refuges',
      title: 'Two refuges, one shared way of inhabiting the mountain.',
      text: 'Chucao and Carpintero share the same layout, capacity, and equipment: warm spaces for family groups or stays with friends.',
      capacity: 'Up to 10 guests',
      layout: '2 bedrooms · 2 bathrooms · loft',
      kitchen: 'Full kitchen',
      heating: 'Slow-combustion wood boiler heating',
      items: [
        {
          key: 'chucao',
          name: 'Refugio Chucao',
          alt: 'KULLINKO Chucao refuge in a forest setting',
        },
        {
          key: 'carpintero',
          name: 'Refugio Carpintero',
          alt: 'KULLINKO Carpintero refuge in a forest setting',
        },
      ],
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
      mapEyebrow: 'Mapa referencial',
      mapNote: 'Área geral Caracoles. Localização exata disponível na reserva.',
      mapLabels: {
        town: 'Malalcahuello',
        ski: 'Centro Ski Corralco',
        area: 'Caracoles',
        route: 'Rota até Corralco',
      },
      places: ['Malalcahuello', 'Corralco', 'Vulcão Lonquimay', 'Araucárias'],
    },
    pricing: {
      eyebrow: 'Tarifas referenciais',
      title: 'Uma pré-venda simples, por pessoa e por temporada.',
      text: 'O refúgio é reservado por completo. Os valores são calculados pelo número de pessoas e pela temporada da viagem.',
      cardEyebrow: 'Pré-venda refúgio',
      cardTitle: 'Tarifas por temporada',
      cardText:
        'Valores referenciais por pessoa, calculados por noite segundo número de pessoas e temporada.',
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
    refuges: {
      eyebrow: 'Refúgios disponíveis',
      title: 'Dois refúgios, uma mesma forma de habitar a montanha.',
      text: 'Chucao e Carpintero compartilham a mesma distribuição, capacidade e equipamento: espaços acolhedores para grupos familiares ou estadias com amigos.',
      capacity: 'Até 10 pessoas',
      layout: '2 quartos · 2 banheiros · mezanino',
      kitchen: 'Cozinha completa',
      heating: 'Aquecimento com caldeira a combustão lenta de lenha',
      items: [
        {
          key: 'chucao',
          name: 'Refúgio Chucao',
          alt: 'Refúgio Chucao da KULLINKO em ambiente de bosque',
        },
        {
          key: 'carpintero',
          name: 'Refúgio Carpintero',
          alt: 'Refúgio Carpintero da KULLINKO em ambiente de bosque',
        },
      ],
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

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      element.dataset.revealed = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.dataset.revealed = 'true'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

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
      <RefugesSection t={t} />
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
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-14"
    >
      <img
        src={heroImage}
        alt={t.hero.imageAlt}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,38,38,.26)_0%,rgba(32,38,38,.52)_46%,rgba(32,38,38,.94)_100%)]" />
      <div className="fixed inset-x-0 top-0 z-20 flex min-h-20 items-center justify-between gap-3 border-b border-[#ECEBE7]/8 bg-[#202626]/30 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#ECEBE7]/80 backdrop-blur-md sm:px-8 lg:px-12">
        <a href="#top" className="flex min-h-11 items-center font-semibold text-[#F3F1EC]">
          KULLINKO
        </a>
        <div className="flex min-w-0 items-center gap-2">
          <div
            className="flex rounded-full border border-[#ECEBE7]/18 bg-[#202626]/42 p-1 backdrop-blur"
            aria-label="Language selector"
          >
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => onLanguageChange(option.code)}
                aria-label={option.label}
                className={`min-h-11 rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.12em] transition sm:px-4 ${
                  language === option.code
                    ? 'bg-[#ECEBE7] text-[#202626]'
                    : 'text-[#ECEBE7]/72 hover:bg-[#ECEBE7]/10 hover:text-[#F3F1EC]'
                }`}
              >
                <span className="sm:hidden">{option.shortLabel}</span>
                <span className="hidden sm:inline">{option.label}</span>
              </button>
            ))}
          </div>
          <a
            href="#waitlist"
            className="hidden min-h-11 items-center rounded-full border border-[#ECEBE7]/22 px-4 transition hover:border-[#ECEBE7]/70 hover:bg-[#ECEBE7]/10 sm:inline-flex"
          >
            {t.navWaitlist}
          </a>
        </div>
      </div>
      <div className="hero-enter relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_.45fr] lg:items-end">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#D9D4C7]/84 sm:mb-6 sm:tracking-[0.42em]">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-[#F3F1EC] [text-shadow:0_2px_28px_rgba(32,38,38,.58)] sm:text-7xl sm:leading-[.96] md:text-8xl lg:text-[7.8rem]">
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
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[.6fr_1fr] lg:items-end">
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
        </Reveal>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.project.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
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
                <div className="h-1 overflow-hidden rounded-full bg-[#ECEBE7]/13">
                  <div
                    className="h-full rounded-full bg-[#D9D4C7] transition-all duration-700 group-hover:bg-[#F3F1EC]"
                    style={{ width: `${progressValues[index]}%` }}
                  />
                </div>
              </div>
            </Reveal>
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
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            {t.experience.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.experience.title}
          </h2>
        </Reveal>
        <div className="grid border-y border-[#202626]/12 md:grid-cols-2 lg:grid-cols-3">
          {t.experience.items.map((experience, index) => {
            const Icon = experienceIcons[index]
            return (
              <Reveal
                key={experience.title}
                delay={index * 70}
                className="group min-h-64 border-b border-[#202626]/10 bg-[#ECEBE7] px-0 py-7 transition duration-300 hover:bg-[#D9D4C7]/45 md:border-r md:px-7 lg:[&:nth-child(3n)]:border-r-0"
              >
                <div className="mb-10 flex h-11 w-11 items-center justify-center text-[#445543] transition group-hover:-translate-y-0.5 group-hover:text-[#202626]">
                  <Icon className="h-6 w-6 stroke-[1.45]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                  {experience.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#202626]/68">
                  {experience.text}
                </p>
              </Reveal>
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
        <Reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
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
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[15rem]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 80}
              className={`group relative aspect-[4/3] overflow-hidden bg-[#2C262C] md:aspect-auto ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,38,38,0)_35%,rgba(32,38,38,.62)_100%)] opacity-80" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MapMarker({
  className,
  label,
}: {
  className: string
  label: string
}) {
  return (
    <div
      className={`absolute z-10 flex max-w-[13rem] items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ECEBE7] ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9D4C7]/45 bg-[#202626]/86 shadow-[0_10px_26px_rgba(0,0,0,.25)]">
        <MapPin className="h-4 w-4 text-[#D9D4C7]" aria-hidden="true" />
      </span>
      <span className="rounded-full border border-[#ECEBE7]/12 bg-[#202626]/68 px-3 py-1.5 backdrop-blur">
        {label}
      </span>
    </div>
  )
}

function LocationSection({ t }: { t: Copy }) {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#202626_0%,#27302D_42%,#445543_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1fr] lg:items-center">
        <Reveal>
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
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="relative min-h-[27rem] overflow-hidden border border-[#ECEBE7]/14 bg-[#202626]/38 p-5 shadow-[0_24px_90px_rgba(0,0,0,.18)] backdrop-blur sm:col-span-2 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(68,85,67,.34),rgba(32,38,38,.08)),radial-gradient(circle_at_20%_77%,rgba(217,212,199,.13),transparent_20%),radial-gradient(circle_at_75%_18%,rgba(236,235,231,.12),transparent_19%)]" />
            <div className="absolute inset-5 border border-[#D9D4C7]/10" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 640 430"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-20 358 C88 338 136 360 214 336 C288 314 354 320 438 292 C514 266 570 268 668 244"
                fill="none"
                stroke="rgba(236,235,231,.11)"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M-30 288 C62 306 122 286 194 294 C272 302 320 274 400 270 C488 266 546 242 670 238"
                fill="none"
                stroke="rgba(236,235,231,.08)"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M32 116 C108 132 172 112 248 124 C326 136 392 112 474 126 C548 138 590 126 664 136"
                fill="none"
                stroke="rgba(236,235,231,.07)"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M28 338 C120 324 196 330 272 318 C356 304 450 300 604 282"
                fill="none"
                stroke="rgba(236,235,231,.24)"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path
                d="M86 364 C158 356 220 364 288 350 C344 338 386 326 424 298"
                fill="none"
                stroke="rgba(125,177,190,.28)"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M132 326 L224 318 C284 314 318 336 360 314 C398 294 414 268 448 242 C486 212 504 178 494 136 C488 106 474 86 452 68"
                fill="none"
                stroke="rgba(32,38,38,.55)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="13"
              />
              <path
                d="M132 326 L224 318 C284 314 318 336 360 314 C398 294 414 268 448 242 C486 212 504 178 494 136 C488 106 474 86 452 68"
                fill="none"
                stroke="#D9D4C7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              <path
                d="M132 326 L224 318 C284 314 318 336 360 314"
                fill="none"
                stroke="rgba(32,38,38,.36)"
                strokeLinecap="round"
                strokeDasharray="2 13"
                strokeWidth="2"
              />
              <ellipse
                cx="360"
                cy="318"
                rx="82"
                ry="38"
                fill="rgba(217,212,199,.18)"
                stroke="rgba(217,212,199,.42)"
                strokeDasharray="6 8"
                strokeWidth="1.5"
              />
              <path
                d="M330 344 L286 366"
                fill="none"
                stroke="rgba(217,212,199,.55)"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
            <div className="relative z-10 flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#D9D4C7]/60">
                  {t.location.mapEyebrow}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#ECEBE7]/72">
                  {t.location.mapNote}
                </p>
              </div>
              <Navigation className="h-5 w-5 shrink-0 text-[#D9D4C7]/70" aria-hidden="true" />
            </div>
            <MapMarker
              className="left-[10%] top-[74%]"
              label={t.location.mapLabels.town}
            />
            <MapMarker
              className="left-[64%] top-[13%]"
              label={t.location.mapLabels.ski}
            />
            <div className="absolute left-[35%] top-[82%] z-10 max-w-[12rem] -translate-x-1/2 rounded-full border border-[#D9D4C7]/35 bg-[#D9D4C7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#202626] shadow-[0_12px_34px_rgba(0,0,0,.24)]">
              {t.location.mapLabels.area}
            </div>
            <div className="absolute left-[69%] top-[48%] z-10 hidden -translate-x-1/2 rounded-full border border-[#ECEBE7]/12 bg-[#202626]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#ECEBE7]/62 sm:block">
              {t.location.mapLabels.route}
            </div>
          </Reveal>
          {t.location.places.map((location, index) => (
            <Reveal
              key={location}
              delay={index * 80}
              className="border border-[#ECEBE7]/14 bg-[#202626]/35 p-6 shadow-[0_20px_70px_rgba(0,0,0,.12)] backdrop-blur transition hover:-translate-y-1 hover:border-[#ECEBE7]/36 hover:bg-[#202626]/50"
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
            </Reveal>
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
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            {t.waitlist.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.waitlist.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#202626]/68">
            {t.waitlist.text}
          </p>
        </Reveal>
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
                className={`h-14 rounded-none border bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18 ${
                  error ? 'border-[#7A3D2E]/42' : 'border-[#202626]/16'
                }`}
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
                className={`h-14 rounded-none border bg-[#F3F1EC] px-4 text-base text-[#202626] outline-none transition placeholder:text-[#202626]/38 focus:border-[#445543] focus:ring-2 focus:ring-[#445543]/18 ${
                  error ? 'border-[#7A3D2E]/42' : 'border-[#202626]/16'
                }`}
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
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#202626] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] shadow-[0_14px_34px_rgba(32,38,38,.18)] transition hover:-translate-y-0.5 hover:bg-[#445543] focus:outline-none focus:ring-2 focus:ring-[#445543]/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === 'submitting' ? t.waitlist.submitting : t.waitlist.submit}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-5 text-sm leading-7 text-[#202626]/58">
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
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[.72fr_1fr] xl:items-start">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
            {t.pricing.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#202626]/68">
            {t.pricing.text}
          </p>
        </Reveal>
        <PricingTable t={t} />
      </div>
    </section>
  )
}

function PricingTable({ t }: { t: Copy }) {
  return (
    <Reveal className="min-w-0 border border-[#202626]/12 bg-[#ECEBE7] shadow-[0_28px_80px_rgba(32,38,38,.10)]">
      <div className="border-b border-[#202626]/10 p-5 sm:p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#445543]/70">
          {t.pricing.cardEyebrow}
        </p>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
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
              <p className="mt-1 text-sm font-semibold leading-5 text-[#202626]">
                {formatPrice(pricePerPerson.lowSeason)} {t.pricing.perPersonShort}
              </p>
            </div>
            <div className="bg-[#202626] px-4 py-3 text-[#F3F1EC]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D9D4C7]/70">
                {t.pricing.highChip}
              </p>
              <p className="mt-1 text-sm font-semibold leading-5">
                {formatPrice(pricePerPerson.highSeason)} {t.pricing.perPersonShort}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="hidden w-full table-fixed border-collapse text-left md:table">
          <thead>
            <tr className="border-b border-[#202626]/10 text-[11px] uppercase tracking-[0.22em] text-[#202626]/48">
              <th scope="col" className="w-[32%] px-5 py-4 font-semibold lg:px-8">
                {t.pricing.refuge}
              </th>
              <th scope="col" className="w-[34%] px-5 py-4 font-semibold">
                <span className="block">{t.pricing.lowSeason}</span>
                <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] text-[#202626]/38">
                  {t.pricing.lowSeasonMonths}
                </span>
              </th>
              <th scope="col" className="w-[34%] px-5 py-4 font-semibold">
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
                  className="px-5 py-4 text-base font-semibold text-[#202626] lg:px-8"
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
        <div className="grid gap-3 p-4 md:hidden">
          {pricingRows.map((row) => (
            <article
              key={row.guests}
              className="border border-[#202626]/10 bg-[#F3F1EC] p-4"
            >
              <p className="text-sm font-semibold text-[#202626]">
                {t.pricing.guests(row.guests)}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#445543]/72">
                    {t.pricing.lowSeason}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#202626]">
                    {formatPrice(row.lowSeasonTotal)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#445543]/72">
                    {t.pricing.highSeason}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#202626]">
                    {formatPrice(row.highSeasonTotal)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function RefugesSection({ t }: { t: Copy }) {
  return (
    <section className="bg-[#D9D4C7] px-5 py-20 text-[#202626] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[.58fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#445543]/70">
              {t.refuges.eyebrow}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              {t.refuges.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#202626]/68 lg:justify-self-end">
            {t.refuges.text}
          </p>
        </Reveal>

        <div className="grid gap-5 lg:gap-6">
          {t.refuges.items.map((refuge, index) => {
            const images = refugeImages[refuge.key as keyof typeof refugeImages]

            return (
              <Reveal
                key={refuge.key}
                delay={index * 90}
                className="grid overflow-hidden border border-[#202626]/12 bg-[#ECEBE7] shadow-[0_28px_80px_rgba(32,38,38,.10)] lg:grid-cols-[1.08fr_.92fr]"
              >
                <picture className="block aspect-[4/5] overflow-hidden bg-[#202626] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[28rem]">
                  <source media="(min-width: 768px)" srcSet={images.wide} />
                  <img
                    src={images.vertical}
                    alt={refuge.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </picture>
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#445543]/70">
                      0{index + 1}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                      {refuge.name}
                    </h3>
                  </div>
                  <div className="mt-10 grid gap-3">
                    <RefugeFeature icon={<UsersRound />} label={t.refuges.capacity} />
                    <RefugeFeature icon={<BedDouble />} label={t.refuges.layout} />
                    <RefugeFeature icon={<CookingPot />} label={t.refuges.kitchen} />
                    <RefugeFeature icon={<Flame />} label={t.refuges.heating} />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function RefugeFeature({
  icon,
  label,
}: {
  icon: ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-4 border-t border-[#202626]/10 pt-3 text-sm font-medium leading-6 text-[#202626]/72">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#445543] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.6]">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  )
}

function FinalCtaSection({ t }: { t: Copy }) {
  return (
    <section className="bg-[#202626] px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#F3F1EC] sm:text-6xl lg:text-7xl">
          {t.finalCta.title}
        </h2>
        <a
          href="#waitlist"
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#ECEBE7] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#202626] transition hover:-translate-y-0.5 hover:bg-[#F3F1EC]"
        >
          {t.finalCta.cta}
        </a>
      </Reveal>
    </section>
  )
}

function Footer({ t }: { t: Copy }) {
  return (
    <footer className="border-t border-[#ECEBE7]/10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#D9D4C7]/64 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.18em] text-[#F3F1EC]">
          KULLINKO
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            className="min-h-11 transition hover:text-[#F3F1EC] sm:min-h-0"
            href="https://www.instagram.com/kullinko.refugiomalalcahuello/"
          >
            Instagram
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 transition hover:text-[#F3F1EC] sm:min-h-0"
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
