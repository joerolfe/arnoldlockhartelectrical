export default function PhotoPlaceholder() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#2a1a1a] to-[#3a1a1a] grayscale group-hover:grayscale-0 transition-all duration-500" />
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white/8 group-hover:text-red-900/20 transition-colors duration-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" />
        </svg>
      </div>
    </>
  )
}
