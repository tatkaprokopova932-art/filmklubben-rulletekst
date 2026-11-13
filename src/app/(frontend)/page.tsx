import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const articles = await payload.find({
    collection: 'articles',
  })


  return (
    <div className="home">

<h1>Filmklubben Rulletekst</h1>

{articles.docs.map((article) => (
  <h2 key={article.id}>{article.title}</h2>
))}


      <div className="content">
        
        
      </div>
    </div>
  )
}
