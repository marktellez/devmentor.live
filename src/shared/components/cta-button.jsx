import ScrollButton from './scroll-button'

export default function CTAButton({ color = 'green-500', children }) {
  const baseColor = color.split('-')[0]
  return (
    <div className="my-32 flex justify-center">
      <ScrollButton
        className={`inline-flex px-8 py-4 bg-${baseColor}-500/10 hover:bg-${baseColor}-500/20 text-${baseColor}-400 rounded-lg font-medium transition-colors duration-200 items-center gap-2 group`}
      >
        {children}
      </ScrollButton>
    </div>
  )
} 