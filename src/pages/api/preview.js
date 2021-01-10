/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { apiKey } from '@/utils/common'

export default async (req, res) => {
  if (!req.query.id) {
    return res.status(404).end()
  }
  const content = await fetch(
    `${process.env.API_PATH}/blog/${req.query.id}?fields=id&draftKey=${req.query.draftKey}`,
    apiKey
  )
    .then((res) => res.json())
    .catch((_error) => null)

  if (!content) {
    return res.status(401).json({ message: 'invalid slug' })
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/articles/${content.id}` })
  res.end('Preview Mode Enabled')
}
