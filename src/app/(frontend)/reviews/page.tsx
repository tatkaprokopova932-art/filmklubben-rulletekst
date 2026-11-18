import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'


export default async function ReviewsPage() {
  const payload = await getPayload({ config })

  const reviews = await payload.find({
    collection: 'reviews',
    sort: '-publishedAt',
  })
  
return (
  <main>
    <h1>Film Reviews</h1>
    
{reviews.docs.map((review) => (
  <div key={review.id}>
    
<h2>
  <Link href={`/reviews/${review.id}`}>
    {review.filmTitle}
  </Link>
</h2>

    <p>Rating: {review.rating}/6 🎲</p>

{review.publishedAt && (
  <p>
    Published: {new Date(review.publishedAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    })}
  </p>
)}

  </div>
))}

  </main>
)

}
