// @ts-expect-error 型定義が存在しない
import highlight from 'highlight.js/lib/core'
// @ts-expect-error 型定義が存在しない
import javascript from 'highlight.js/lib/languages/javascript'
// @ts-expect-error 型定義が存在しない
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/tomorrow-night-blue.css'

highlight.registerLanguage('javascript', javascript)
highlight.registerLanguage('typescript', typescript)

export default highlight
