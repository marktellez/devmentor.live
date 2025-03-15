import { getAllMusings } from '@/data/musings'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const musings = await getAllMusings()
    const latestMusing = musings.sort((a, b) => b.date - a.date)[0]
    
    if (!latestMusing) {
      return NextResponse.json({ error: 'No musings found' }, { status: 404 })
    }

    return NextResponse.json(latestMusing)
  } catch (error) {
    console.error('Error fetching latest musing:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
