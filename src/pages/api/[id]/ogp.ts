import { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import { createCanvas, registerFont, loadImage } from 'canvas'
import { apiKey } from '@/utils/common'
import { LineShareButton } from 'react-share'

/**
 * canvas
 */
const width = 600
const height = 315
const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')
type Context = typeof context

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const title = await getTitle(req.query.id as string)

  registerFont(path.resolve('./fonts/GenShinGothic-P-Medium.ttf'), { family: 'GenShinGothic' })

  context.font = '36px GenShinGothic'
  context.textAlign = 'left'
  context.textBaseline = 'middle'

  const backgroundImage = await loadImage(path.resolve('./public/ogp_bg.png'))
  context.drawImage(backgroundImage, 0, 0, width, height)

  context.fillStyle = '#333'
  const lines = createTextLines(context, title)
  lines.forEach((line, index) => {
    const y = 120 + 40 * (index - (lines.length - 1) / 2)
    context.fillText(line, 46, y)
  })

  const buffer = canvas.toBuffer()

  res.writeHead(200, { 'Content-type': 'image/png', 'Content-Length': buffer.length })
  res.end(buffer, 'binary')
}

const getTitle = async (id: string): Promise<string> => {
  const data = await fetch(`${process.env.API_PATH}/blog/${id}`, apiKey as RequestInit).then((res) => res.json())
  const { title }: { title: string } = data
  return title
}

const createTextLine = (context: Context, text: string) => {
  const maxWidth = 480
  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1)
    if (context.measureText(line).width > maxWidth) {
      return { line, remaining: text.substring(i + 1) }
    }
  }
  return { line: text, remaining: '' }
}

const createTextLines = (context: Context, text: string): string[] => {
  const lines: string[] = []
  let currentText = text

  while (currentText !== '') {
    const separatedText = createTextLine(context, currentText)
    lines.push(separatedText.line)
    currentText = separatedText.remaining
  }
  return lines
}
