import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'


export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

const { id } = await params


const payloadConfig = await config
const payload = await getPayload({ config: payloadConfig })


const article = await payload.findByID({
  collection: 'articles',
  id: Number(id),
})

return (
  <article>
    <h1>{article.title}</h1>
    <RichText data={article.content} />
  </article>
)


}
