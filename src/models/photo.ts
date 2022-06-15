import { Count, Image, Pager } from './base'

export interface PhotoResponse {
  data: PhotoModel[]
  pagination: Pager
}

export interface PhotoModel {
  id: string
  text: string
  title: string
  photos: string[]
  slug: string

  hide: boolean
  created: string
  modified: string

  count: Count
  copyright: boolean
  commentsIndex: number
  allowComment: boolean

  albumId: string //相册id
  album: Album //相册信息
}

export interface Album {
  count: number
  id: string
  name: string
  slug: string
  created: Date
  albumId: string
}
