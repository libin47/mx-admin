
import { PhotoModel } from './photo'
export interface AlbumModel {
  count: number
  id: string
  created: string
  slug: string
  name: string
  modified: string
}

export interface AlbumResponse {
  data: AlbumModel[]
}

export type AlbumWithChildrenModel = AlbumModel & {
  children: PickedPostModelInAlbumChildren[]
}

export type PickedPostModelInAlbumChildren = Pick<
PhotoModel,
  'id' | 'title' | 'slug' | 'modified' | 'created'
>
