import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import { createCanvas, registerFont } from 'canvas'

export default async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const width = 600
  const height = 315

  registerFont(path.resolve('./fonts/GenShinGothic-P-Medium.ttf'), { family: 'GenShinGothic' })

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.font = '36px GenShinGothic'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = '#fefefe'
  context.fillRect(0, 0, width, height)
  context.fillStyle = '#333'
  context.fillText('testTestあああああああああああああああああああああああ', 200, 50)

  const buffer = canvas.toBuffer()

  res.writeHead(200, { 'Content-type': 'image/png', 'Content-Length': buffer.length })
  res.end(buffer, 'binary')
}
