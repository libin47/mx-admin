import Plus from '@vicons/fa/es/Plus'
import { HeaderActionButton } from 'components/button/rounded-button'
import { tableRowStyle } from 'components/table'
import { ContentLayout } from 'layouts/content'
import { QAModel, QAResponse} from 'models/qas'
import {
  NButton,
  NCard,
  NForm,
  NInput,
  NModal,
  NPopconfirm,
  NDataTable,
  NSpace,
  NFormItemRow,
  useMessage,
} from 'naive-ui'
import { RESTManager } from 'utils'
import {
  defineComponent,
  onMounted,
  ref,
  watch,
  Ref,
} from 'vue'

export function QAStore() {
  const data = ref<QAModel[]>()

  const map = computed(
    () => new Map(data.value?.map((i) => [i.id, i])) || new Map(),
  )

  return {
    data,
    get(id: string) {
      return map.value.get(id)
    },
    async fetch(force?: boolean) {
      
      if (!data.value || force) {
        const response = (await RESTManager.api.QA.get()) as QAResponse
        data.value = response.data
        return data.value
      } else {
        return data.value
      }
    },
  }
}


export const QAView = defineComponent((props) => {
    const qaStore = QAStore()
    const loading = ref(true)
    const fetchQA = qaStore.fetch

    
    onMounted(async () => {
      loading.value = true
      await fetchQA()
      loading.value = false
    })

    const message = useMessage()
    const resetEditData = () => ({
      question: "",
      answer: [],
    })
    const showDialog = ref<boolean | string>(false)
    const editDialogData = ref(resetEditData())

    const editQAState = ref<QAState>(resetEditData())


    return () => (
      <ContentLayout
        actionsElement={
          <Fragment>
            <HeaderActionButton
              icon={<Plus />}
              variant="primary"
              onClick={() => {
                editDialogData.value = resetEditData()
                showDialog.value = true
              }}
            ></HeaderActionButton>
          </Fragment>
        }
      >

      <EditQADialog
        show={showDialog}
        onSubmit={async (state) => {
          const { question, answer } = state
          const id =
            typeof showDialog.value == 'string' ? showDialog.value : null
          if (!id) {
            const payload = (await RESTManager.api.QA.post({
              data: {
                question,
                answer,
              },
            })) as any
            message.success('创建成功')
            qaStore.data.value!.push(payload.data)
          } else {
            await RESTManager.api.QA(id).put({
              data: {
                question,
                answer,
              },
            })

            message.success('修改成功')

            const index = qaStore.data.value!.findIndex((i) => i.id == id)
            qaStore.data.value![index] = {
              ...qaStore.data.value![index],
              ...state,
            }
          }
        }}
        initialState={editQAState.value}
      />

      <NDataTable
        rowClassName={() => tableRowStyle}
        size="small"
        bordered={false}
        data={qaStore.data.value || []}
        remote
        loading={loading.value}
        columns={[
          { title: '问题', key: 'question' },
          { title: '回答', key: 'answer', width: 800 },
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
                      editQAState.value = {
                        question: row.question,
                        answer: row.answer,
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
                      await RESTManager.api.QA(row.id).delete()
                      message.success('删除成功')
                      await qaStore.fetch(true)
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

type QAState = {
  question: string
  answer: string[]
}
const EditQADialog = defineComponent<{
  initialState?: QAState
  onSubmit: (state: QAState) => void
  show: Ref<boolean | string>
}>((props) => {
  const state = reactive<QAState>(
    props.initialState ?? { question: '', answer: [] },
  )
  watch(
    () => props.initialState,
    (n) => {
      if (n) {
        state.question = n.question
        state.answer = n.answer
      }
    },
  )
  const message = useMessage()
  const onSubmit = () => {
    if (!state.question || !state.answer) {
      message.error('问题 和 答案 不能为空')
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
                question: {
                  required: true,
                  trigger: ['input', 'blur'],
                },
                answer: {
                  required: true,
                  trigger: ['input', 'blur'],
                },
              }}
            >
              <NFormItemRow path="question" label="问题">
                <NInput
                  placeholder=""
                  onInput={(e) => {
                    state.question = e
                  }}
                  value={state.question}
                ></NInput>
              </NFormItemRow>

              <NFormItemRow path="answer" label="答案">
                <NInput
                  placeholder=""
                  onInput={(e) => {
                    state.answer = e.split(',')
                  }}
                  value={state.answer.join(',')}
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

EditQADialog.props = ['initialState', 'onSubmit', 'show'] as const