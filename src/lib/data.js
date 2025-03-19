import { START_YEAR } from './config'

const currentYear = new Date().getFullYear()
const yearsExperience = currentYear - START_YEAR

export const sharedData = {
  stats: {
    yearsExperience,
    sessions: 1000,
    rating: 5.0,
    reviews: 1000
  },
  latestMusing: {
    title: "The End of Programming: AI's Victory",
    description: "A deep dive into how AI is fundamentally changing the nature of programming and what it means for developers.",
    date: "2024-03-17",
    slug: "the-end-of-programming-ais-victory",
    author: {
      name: "Mark Tellez",
      avatar: "/mark.jpg",
      url: "/about"
    }
  }
} 