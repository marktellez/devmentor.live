import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'DevmentorLive'
    const description = searchParams.get('description') || 'Web Development & AI Mentorship'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url("${process.env.NEXT_PUBLIC_URL}/og-bg.png")`,
            backgroundSize: 'cover',
            fontFamily: 'Geist Sans',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              borderRadius: '20px',
              maxWidth: '900px',
            }}
          >
            <div
              style={{
                fontSize: '60px',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: 'white',
                marginBottom: '16px',
                lineHeight: 1.2,
                textAlign: 'center',
                padding: '0 40px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                color: '#9CA3AF',
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: 1.4,
                padding: '0 20px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}