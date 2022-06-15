import { AlbumModel, AlbumResponse } from 'models/album'
import { RESTManager } from 'utils/rest'
import { computed, ref } from 'vue'

export const useAlbumStore = defineStore('album', () => { 
  const data = ref<AlbumModel[]>()

  const map = computed(
    () => new Map(data.value?.map((i) => [i.id, i])) || new Map(),
  )

  return {
    data,
    map,
    get(id: string) {
      return map.value.get(id)
    },
    async fetch(force?: boolean) {
      if (!data.value || force) {
        const response = (await RESTManager.api.albums.get({
          params: {
            type: 'Album',
          },
        })) as AlbumResponse

        data.value = response.data
      } else {
        return data.value
      }
    },
  }
})

export { useAlbumStore as AlbumStore }