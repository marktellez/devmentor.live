export default function Pill({ color = 'purple-500', children }) {
  return (
    <span className={`inline-block bg-${color}/10 text-${color} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
      {children}
    </span>
  )
} 