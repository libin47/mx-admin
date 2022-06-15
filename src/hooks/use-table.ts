import type { Pager } from 'models/base'
import qs from 'qs'
import type { Ref} from 'vue';
import { reactive, ref } from 'vue'
import type { LocationQueryValue } from 'vue-router'

export type fetchDataFn = (
  page?: string | number | LocationQueryValue[],
  size?: number,
  db_query?: string | undefined,
) => Promise<any>
export const useDataTableFetch = <T = any>(
  fetchDataFn: (data: Ref<T[]>, pager: Ref<Pager>) => fetchDataFn,
) => {
  const data: Ref<T[]> = ref<T[]>([]) as any
  const pager = ref<Pager>({} as any)
  const sortProps = reactive({
    sortBy: '',
    sortOrder: 0,
  })
  const checkedRowKeys = ref<string[]>([])
  const loading = ref(false)
  return {
    data,
    pager,
    sortProps,
    checkedRowKeys,
    loading,
    fetchDataFn: async (
      page?: number,
      size?: number,
      db_query?: Record<string, any>,
    ) => {
      loading.value = true
      await fetchDataFn(data, pager)(
        page,
        size,
        db_query ? qs.stringify(db_query) : undefined,
      )
      loading.value = false
    },
  }
}

export const usePhotoTable = <T = any>(
  fetchDataFn: (data: Ref<T[]>, pager: Ref<Pager>, $id: Ref<string> , name: Ref<string>) => fetchDataFn,
) => {
  const $id: Ref<string> = ref<string>() as any
  const name: Ref<string> = ref<string>() as any
  const data: Ref<T[]> = ref<T[]>([]) as any
  const pager = ref<Pager>({} as any)
  const loading = ref(false)
  return {
    $id,
    name,
    data,
    pager,
    loading,
    fetchDataFn: async (page?: number, size?: number) => {
      loading.value = true
      await fetchDataFn(data, pager, $id, name)(page, size)
      loading.value = false
    },
  }
}
