import FadeIn from './FadeIn'

const team = [
  {
    name: 'Rob Arnold',
    role: 'Director & Lead Electrician',
    bio: 'HND & Certificate in Electrical Engineering. 15+ years experience delivering domestic and commercial projects across the Midlands.',
    badge: 'Director',
    initials: 'RA',
  },
  {
    name: 'George Summers',
    role: 'Apprentice Electrician',
    bio: 'Working across domestic and commercial sites, developing hands-on skills under the guidance of our senior engineers.',
    badge: null,
    initials: 'GS',
  },
  {
    name: 'Connor Golden',
    role: '3rd Year Apprentice',
    bio: 'Third year into his electrical apprenticeship, gaining experience across a wide range of installation projects.',
    badge: null,
    initials: 'CG',
  },
  {
    name: 'James Sellers',
    role: '1st Year Apprentice',
    bio: 'Just started his journey in the trade — learning the ropes and building a solid foundation in electrical work.',
    badge: null,
    initials: 'JS',
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#111111] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="mb-10 sm:mb-14">
          <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">The People</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Meet the team.
          </h2>
        </FadeIn>

        {/* Mobile: horizontal snap carousel. sm+: grid */}
        <div
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map(({ name, role, bio, badge, initials }, i) => (
            <FadeIn
              key={name}
              delay={i * 80}
              className="flex-shrink-0 w-[78vw] sm:w-auto snap-start h-full"
            >
              <div className="group relative bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">

                {/* Placeholder photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#2a1a1a] to-[#3a1a1a] grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 hero-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-white/8 group-hover:text-red-900/20 transition-colors duration-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/20 to-transparent" />
                  {badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase rounded">
                        {badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 group-hover:border-red-500/30 group-hover:bg-red-500/10 flex items-center justify-center text-gray-500 group-hover:text-red-400 text-xs font-bold transition-all duration-500">
                      {initials}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base mb-0.5">{name}</h3>
                  <p className="text-red-500 text-xs font-semibold tracking-wide uppercase mb-3">{role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <p className="sm:hidden text-gray-600 text-xs text-center mt-4 tracking-wide">
          Swipe to see the team
        </p>
      </div>
    </section>
  )
}
