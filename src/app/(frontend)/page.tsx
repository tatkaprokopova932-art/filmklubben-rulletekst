import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import Link from 'next/link'


export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const articles = await payload.find({
    collection: 'articles',
  })


  return (
    <div className="home">

<h1>Filmklubben Rulletekst</h1>



{articles.docs.length === 0 && <p>No articles available yet.</p>}

{articles.docs.map((article) => (
  <article key={article.id}>
    
<Link href={`/articles/${article.id}`}>
  <h2>{article.title}</h2>
</Link>

    {article.content && <RichText data={article.content} />}
  </article>
))}



      <div className="content">
        
        
      </div>
    </div>
  )
}
