import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Technical Interview Preparation | AI & Traditional Development",
  description: "Master both traditional and AI-focused technical interviews with personalized preparation from a senior developer with FAANG interview experience. 90% success rate.",
  path: '/tech-interview-prep'
})

export default function TechInterviewPrepLayout({ children }) {
  return children
}