import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    notFound()
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let article

  try {
    article = await payload.findByID({
      collection: 'articles',
      id: Number(id),
    })
  } catch {
    notFound()
  }


  return (
    <article>
      <h1>{article.title}</h1>


{article.publishedAt && (
  <p>
    Published: {new Date(article.publishedAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    })}
  </p>
)}

      <h2>{article.subtitle}</h2>

      {typeof article.author === 'object' && article.author !== null && (
        <>
        <p>Written by: {article.author.name}</p>


{typeof article.author.photo === 'object' &&
  article.author.photo !== null &&
  article.author.photo.url && (
    <img
      src={article.author.photo.url}
      alt={article.author.photo.alt}
      width={150}
    />
    
  )}
  </>

      )}

      <RichText data={article.content} />

      <Link href="/">← Back to articles</Link>
    </article>
  )
}
