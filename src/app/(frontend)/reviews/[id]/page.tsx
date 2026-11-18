import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'


type ReviewPageProps = {
  params: Promise<{ id: string }>
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params

if (!/^\d+$/.test(id) || Number(id) < 1) {
  notFound()
}

  const payload = await getPayload({ config })

  
const review = await payload
  .findByID({
    collection: 'reviews',
    id: Number(id),
  })
  .catch((error) => {
    if (error?.status === 404) {
      notFound()
    }
    throw error
  })


  return (
    <main>
      <h1>{review.filmTitle}</h1>
      <p>Director: {review.director}</p>
      <p>Duration: {review.duration} minutes</p>
      <p>Age Rating: {review.ageRating}+</p>
      <p>Main Actors: {review.mainActors}</p>
      <p>Rating: {review.rating}/6 🎲</p>
      {review.publishedAt && (
        <p>
          Published:{' '}
          {new Date(review.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
          })}
        </p>
      )}

      {typeof review.author === 'object' && <p>Reviewed by: {review.author.name}</p>}

      <article>
        <RichText data={review.content} />
      </article>


<Link href="/reviews">
  ← Back to all reviews
</Link>

    </main>
  )
}
