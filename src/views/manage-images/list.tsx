import Upload from '@vicons/fa/es/Upload'
import axios from 'axios'
import { HeaderActionButton } from 'components/button/rounded-button'

import { ContentLayout } from 'layouts/content'
import { AlbumModel, AlbumResponse } from 'models/album'
import { PhotoResponse } from 'models/photo'
import { RelativeTime } from 'components/time/relative-time'
import {
  NButton,
  useMessage,
  NSpace,
  NImageGroup,
  NImage,
  NPopconfirm,
  NCollapse,
  NCollapseItem,
  NGradientText
} from 'naive-ui'

import { RouteName } from 'router/name'
import { AlbumStore } from 'stores/album'
import { RESTManager } from 'utils/rest'
import { computed, defineComponent, onMounted, reactive, ref, toRaw, Ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { usePhotoTable } from 'hooks/use-table'
import { Pager } from 'models/base'
import setup from 'views/setup'


type albumType = {
  data: AlbumModel
}


export const PhotoWriteView = defineComponent({
  name: 'PhotoList',
  setup() {
    const route = useRoute()
    const urlpr: string = "http://image.wind-watcher.cn/"
    const urlend: string = "?w=300&h=300"
    const id = computed(() => route.query.id)

    async function deletePhotos(photos: string[]) {
      for (var ii = 0; ii < photos.length; ii++) {
        var x = await axios.get('/admin?md5=' + photos[ii] + '&t=1')
      }
    }
    const { $id, name, loading, data, pager, fetchDataFn } =
      usePhotoTable(
        (data, pager) =>
          async (page = route.query.page || 1, size = 20) => {
            let idstring = typeof id.value == 'string' ? id.value : (await RESTManager.api.albums().get<albumType>()).data[0].id
            $id.value = idstring
            name.value = (await RESTManager.api.albums($id.value).get<albumType>()).data.name
            const response = await RESTManager.api.photos().get<PhotoResponse>({
              params: {
                album: idstring,
                page,
                size,
              },
            })
            data.value = response.data
            pager.value = response.pagination
          },
      )
    const fetchData = fetchDataFn
    watch(
      () => route.query.page,
      async (n) => {
        // @ts-expect-error
        await fetchData(n)
      },
    )

    let itest
    onMounted(async () => {
      await fetchData()
    })


    const ImageTable = defineComponent({
      setup() {
        // console.log(data.value)
        return () => (<NCollapse>{
          data.value.map((item, index) => {
          return (
            <NCollapseItem name={index}>
              {{
                header() {
                  return (
                    <><NGradientText size={18}>{item.title}</NGradientText>
                    </>
                  )
                },
                ['header-extra']() {
                  return (<><RelativeTime time={item.created} />
                  </>)
                },
                default() {
                  return (
                    <>
                      <div style="padding-bottom:10px">
                        <NSpace justify="space-between" align="center">
                          {item.text}
                          <NSpace>
                            <RouterLink to={'/images/uploaads?id=' + item.id}>

                              <NButton
                                size="tiny"
                                text
                                type="primary"
                              >
                                编辑
                              </NButton>
                            </RouterLink>

                            <NPopconfirm
                              positiveText={'取消'}
                              negativeText="删除"
                              onNegativeClick={async () => {
                                await deletePhotos(item.photos)
                                RESTManager.api.photos(item.id).delete()
                                message.success('删除成功')
                                await fetchData(pager.value.currentPage)
                                // router.push({ name: RouteName.EditaPhoto })
                                // let x = await axios.get('/admin?md5='+)
                                // console.log(x)
                                // message.success('删除成功')
                                // await categoryStore.fetch(true)
                              }}
                            >
                              {{
                                trigger: () => (
                                  <NButton text type="error" size="tiny">
                                    移除
                                  </NButton>
                                ),

                                default: () => (
                                  <span style={{ maxWidth: '12rem' }}>
                                    确定要删除 {item.title} 吗?里面所有的图片都将被删除！
                                  </span>
                                ),
                              }}
                            </NPopconfirm>
                          </NSpace>
                        </NSpace>

                      </div>
                      <NImageGroup><NSpace>
                        {item.photos.map((item, index) => {
                          return <NImage width="100" src={urlpr + item + urlend} preview-src={urlpr + item} />
                        })}
                      </NSpace></NImageGroup></>)
                },
              }}
            </NCollapseItem>
            )
        })}</NCollapse>)
      }
    })



    const message = useMessage()
    const router = useRouter()

    return () => {
      return (

        <ContentLayout
          title={name.value}
          actionsElement={
            <>
              <HeaderActionButton
                to={'/images/uploaads?album=' + id.value}
                icon={<Upload />}
              ></HeaderActionButton>
            </>
          }
        >
          <ImageTable />
          {/* <div>{itest}</div> */}

          {/* <NGradientText>6666</NGradientText> */}

          {/* <NCollapse><ImageTable/></NCollapse> */}
        </ContentLayout>
      )
    }

  },
})

