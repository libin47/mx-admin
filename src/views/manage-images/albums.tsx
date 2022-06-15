import Add12Filled from '@vicons/fluent/es/Add12Filled'
import { HeaderActionButton } from 'components/button/rounded-button'
import { tableRowStyle } from 'components/table'
import { useStoreRef } from 'hooks/use-store-ref'
import { ContentLayout } from 'layouts/content'
import { TableTitleLink } from 'components/link/title-link'
import {
  NButton,
  NCard,
  NDataTable,
  NForm,
  NFormItemRow,
  NH3,
  NInput,
  NModal,
  NPopconfirm,
  NSpace,
  NTag,
  useMessage,
} from 'naive-ui'
import { AlbumStore } from 'stores/album'
import { RESTManager } from 'utils/rest'
import { defineComponent, onMounted, reactive, Ref, ref, watch } from 'vue'

export const ManageAlbumsListView = defineComponent((props) => {
  const albumStore = useStoreRef(AlbumStore)

  const loading = ref(true)
  const fetchAlbum = albumStore.fetch

  const message = useMessage()
  onMounted(async () => {
    loading.value = true
    await fetchAlbum()
    loading.value = false
  })

  const showDialog = ref<boolean | string>(false)
  const resetState = () => ({ name: '', slug: '' })
  const editAlbumState = ref<AlbumState>(resetState())
  return () => (
    <ContentLayout
      actionsElement={
        <>
          <HeaderActionButton
            variant="success"
            icon={<Add12Filled />}
            onClick={() => {
              showDialog.value = true
              editAlbumState.value = resetState()
            }}
          ></HeaderActionButton>
        </>
      }
    >
      <NH3 prefix="bar">分类</NH3>

      <EditAlbumDialog
        show={showDialog}
        onSubmit={async (state) => {
          const { name, slug } = state
          const id =
            typeof showDialog.value == 'string' ? showDialog.value : null
          if (!id) {
            const payload = (await RESTManager.api.albums.post({
              data: {
                name,
                slug,
              },
            })) as any
            message.success('创建成功')
            albumStore.data.value!.push(payload.data)
          } else {
            await RESTManager.api.albums(id).put({
              data: {
                name,
                slug,
                type: 0,
              },
            })

            message.success('修改成功')

            const index = albumStore.data.value!.findIndex((i) => i.id == id)
            albumStore.data.value![index] = {
              ...albumStore.data.value![index],
              ...state,
            }
          }
        }}
        initialState={editAlbumState.value}
      />

      <NDataTable
        rowClassName={() => tableRowStyle}
        size="small"
        bordered={false}
        data={albumStore.data.value || []}
        remote
        loading={loading.value}
        columns={[
          { title: '名称', key: 'name',
          render(row) {
            var name:string = row.name
            return (
              <TableTitleLink
                title={row.name}
                inPageTo={'/images/photos?id=' + row.id}
              ></TableTitleLink>
            )
          }, },
          { title: '数', key: 'count' },
          { title: '路径', key: 'slug', width: 300 },
          {
            width: 300,
            title: '操作',
            fixed: 'right',
            key: 'id',
            render(row) {
              return (
                <NSpace size={12}>
                  <NButton
                    size="tiny"
                    text
                    type="primary"
                    onClick={(e) => {
                      editAlbumState.value = {
                        name: row.name,
                        slug: row.slug,
                      }

                      showDialog.value = row.id
                    }}
                  >
                    编辑
                  </NButton>

                  <NPopconfirm
                    positiveText={'取消'}
                    negativeText="删除"
                    onNegativeClick={async () => {
                      await RESTManager.api.albums(row.id).delete()
                      message.success('删除成功')
                      await albumStore.fetch(true)
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
                          确定要删除 {row.title} ?
                        </span>
                      ),
                    }}
                  </NPopconfirm>
                </NSpace>
              )
            },
          },
        ]}
      />
    </ContentLayout>
  )
})

type AlbumState = {
  name: string
  slug: string
}
const EditAlbumDialog = defineComponent<{
  initialState?: AlbumState
  onSubmit: (state: AlbumState) => void
  show: Ref<boolean | string>
}>((props) => {
  const state = reactive<AlbumState>(
    props.initialState ?? { name: '', slug: '' },
  )

  watch(
    () => props.initialState,
    (n) => {
      if (n) {
        state.name = n.name
        state.slug = n.slug
      }
    },
  )
  const message = useMessage()
  const onSubmit = () => {
    if (!state.name || !state.slug) {
      message.error('名字 和 路径 不能为空')
      return
    }
    props.onSubmit(state)
    props.show.value = false
  }

  return () => (
    <NModal
      show={!!props.show.value}
      onUpdateShow={(s) => {
        props.show.value = s
      }}
    >
      {{
        default: () => (
          <NCard
            style="width: 500px;max-width: 90vw"
            headerStyle={{ textAlign: 'center' }}
            title={props.initialState ? '编辑' : '新建'}
          >
            <NForm
              onSubmit={onSubmit}
              rules={{
                name: {
                  required: true,
                  trigger: ['input', 'blur'],
                },
                slug: {
                  required: true,
                  trigger: ['input', 'blur'],
                },
              }}
            >
              <NFormItemRow path="name" label="名字">
                <NInput
                  placeholder=""
                  onInput={(e) => {
                    state.name = e
                  }}
                  value={state.name}
                ></NInput>
              </NFormItemRow>

              <NFormItemRow path="slug" label="路径">
                <NInput
                  placeholder=""
                  onInput={(e) => {
                    state.slug = e
                  }}
                  value={state.slug}
                ></NInput>
              </NFormItemRow>

              <div class="text-center">
                <NSpace size={12} align="center" inline>
                  <NButton type="success" onClick={onSubmit} round>
                    确定
                  </NButton>
                  <NButton onClick={() => (props.show.value = false)} round>
                    取消
                  </NButton>
                </NSpace>
              </div>
            </NForm>
          </NCard>
        ),
      }}
    </NModal>
  )
})

EditAlbumDialog.props = ['initialState', 'onSubmit', 'show'] as const
