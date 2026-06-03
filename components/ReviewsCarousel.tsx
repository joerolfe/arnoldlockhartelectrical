'use client'

const reviews = [
  {
    name: 'Jo Waterworth',
    initials: 'JW',
    rating: 5,
    text: "If you want a trustworthy reliable electrician, then look no further. Rob and his lads go the extra mile to be helpful — no job too small or big, quick to respond and very very efficient. First class!",
  },
  {
    name: 'Sarah Taberner',
    initials: 'ST',
    rating: 5,
    text: "Brilliant service from Rob and his team. They have completed a lot of work for our school over the years including full LED upgrade, electric security gates and other extensive electrical work. Recommend 100%.",
  },
  {
    name: 'Liz Simms',
    initials: 'LS',
    rating: 5,
    text: "Rob is not your basic electrician — if there's something he doesn't know about the job I suspect it's not worth knowing. Carried out a full rewire on our 200+ year old cottage. No wires anywhere!! Wouldn't use anyone else.",
  },
  {
    name: 'Claire Reynolds',
    initials: 'CR',
    rating: 5,
    text: "Perfect service from start to finish.",
  },
  {
    name: 'Chris Bromage',
    initials: 'CB',
    rating: 5,
    text: "Professionalism, Punctuality, Quality, Responsiveness, Value.",
  },
]

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const ReviewCard = ({ name, initials, rating, text }: typeof reviews[0]) => (
  <div className="group relative flex-shrink-0 w-[300px] sm:w-[360px] bg-[#161616] border border-white/5 hover:border-red-500/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default">
    {/* Decorative quote */}
    <svg className="w-8 h-8 text-red-600/25 mb-4" fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H4c0-3.3 2.7-6 6-6V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-6c0-3.3 2.7-6 6-6V8z" />
    </svg>

    <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">{text}</p>

    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/20 flex items-center justify-center text-red-400 font-bold text-[10px] flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-white text-xs font-semibold">{name}</p>
          <Stars count={rating} />
        </div>
      </div>

      {/* Google badge */}
      <svg className="w-4 h-4 text-white/20 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    </div>
  </div>
)

// Duplicate for seamless loop
const row1 = [...reviews, ...reviews]
const row2 = [...[...reviews].reverse(), ...[...reviews].reverse()]

export default function ReviewsCarousel() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#0d0d0d] border-t border-white/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">Client Reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              What our clients say.
            </h2>
          </div>

          {/* Google rating pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 border border-white/8 rounded-full self-start sm:self-auto">
            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-xs font-semibold">5.0 Google</span>
          </div>
        </div>
      </div>

      {/* Marquee tracks — hover anywhere to pause */}
      <div
        className="marquee-track space-y-3"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* Row 1 — scrolls left */}
        <div className="flex gap-3 marquee-left" style={{ width: 'max-content' }}>
          {row1.map((r, i) => <ReviewCard key={i} {...r} />)}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-3 marquee-right" style={{ width: 'max-content' }}>
          {row2.map((r, i) => <ReviewCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  )
}
