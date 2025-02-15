import { BaseModel } from './base'

export const defaultServerlessFunction = `
async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart()
export enum SnippetType {
  JSON = 'json',
  Function = 'function',
  Text = 'text',
  YAML = 'yaml',
}

export enum SnippetTypeToLanguage {
  json = 'json',
  function = 'typescript',
  text = 'markdown',
  yaml = 'yaml',
}
export class SnippetModel extends BaseModel {
  type = SnippetType.JSON
  private = false
  raw = '{}'
  name = ''
  reference = 'root'
  comment?: string
  metatype?: string
  schema?: string
}
