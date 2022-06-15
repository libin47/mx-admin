import SlidersH from '@vicons/fa/es/SlidersH'
import TelegramPlane from '@vicons/fa/es/TelegramPlane'
import Upload from '@vicons/fa/es/Upload'
import { Icon } from '@vicons/utils'
import { HeaderActionButton } from 'components/button/rounded-button'
import { EditorToggleWrapper } from 'components/editor/universal/toggle'
import { MaterialInput } from 'components/input/material-input'
import { UnderlineInput } from 'components/input/underline-input'
import { ParseContentButton } from 'components/logic/parse-button'
import { WEB_URL } from 'constants/env'
import { useStoreRef } from 'hooks/use-store-ref'
import { ContentLayout } from 'layouts/content'
import { isString } from 'lodash-es'
import { AlbumModel } from 'models/album'
import { PhotoModel } from 'models/photo'
import {
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NUpload,
  NSelect,
  NSwitch,
  NDivider,
  useMessage
} from 'naive-ui'

class ImageMyself{
  width?: number
  height?: number
  accent?: string
  type: string='ImageMyself'
  src: string = ''
}

import { RouteName } from 'router/name'
import { AlbumStore } from 'stores/album'
import { RESTManager } from 'utils/rest'
import { computed, defineComponent, onMounted, reactive, ref, toRaw, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


type fileType = {
  id:string,
  name:string
  file: string,
  status:'pending' | 'uploading' | 'finished' | 'removed' | 'error',
  url:string,
  percentage:number,
}
type PhotoReactiveType = {
  title: string
  text: string
  slug: string
  albumId: string
  copyright: boolean
  hide: boolean
  length: number
  photos: string[]
  photo: fileType[]
}

interface Set<T>{
  add(t:T);
  remove(t:T);
  indexOf(t:T):number;
  size():number;
  toArray():T[];
}

class ArraySet<T> implements Set<T>{
  private arr:Array<T> = [];

  public add(t:T){
      this.indexOf(t) < 0 && this.arr.push(t);
  }

  public remove(t:T){
      var i = this.indexOf(t);
      if(i >= 0){
          delete this.arr[i];
      }
  }

  public indexOf(t:T):number{
      return this.arr.indexOf(t);
  }

  public size():number{
      return Object.keys(this.arr).length;
  }

  public toArray():T[]{
      var arr = new Array<T>();
      for(var i = 0; i < this.arr.length; i ++){
          this.arr[i] && arr.push(this.arr[i]);
      }
      return arr;
  }
  public clear(){
    this.arr = []
  }
}


function array2photos(array:string[]) {
  var arr = new Array<ImageMyself>();
  for(var i = 0; i < array.length; i ++){
    var img:ImageMyself = new ImageMyself()
    img.src = array[i]
    arr.push(img)
}
return arr;
}

async function sleep(time : number) : Promise<void>{
    return new Promise<void>((res,rej)=>{
        setTimeout(res,time);
    });
}

const PhotoUploadView = defineComponent(()=>{
  const route = useRoute()
  const albumStore = useStoreRef(AlbumStore)
  const message = useMessage()
  const router = useRouter()
  
  // 数据或标志位
  const id = computed(() => route.query.id)
  var imagelist = new ArraySet<string>()
  const drawerShow = ref(false)
  var cansubmit = ref(false)
  var photook = ref(true)
  if(id.value){
    cansubmit.value = true
  }

  // let MyUpload 
  const resetReactive: () => PhotoReactiveType = () => ({
    albumId: albumStore.data?.value?.[0].id ?? '',
    slug: '',
    text: '',
    title: '',
    copyright: true,
    hide: false,
    length: 0,
    photos: [],
    photo: [],
  })

  const data = reactive<PhotoReactiveType>(resetReactive())

  function imgCompress(reader, callback){//图片超过尺寸压缩
    var img = new Image();
    img.src=reader.result;
    img.onload = function(){
    var w = img.naturalWidth, h = img.naturalHeight, resizeW = 0, resizeH = 0;  
      var maxSize = {
          width: 1000,
          height: 1000,
          level: 0.5
      };
      if(w > maxSize.width || h > maxSize.height){
        var multiple = Math.max(w / maxSize.width, h / maxSize.height);
        resizeW = w / multiple;
        resizeH = h / multiple;
      }else{// 如果图片尺寸小于最大限制，则不压缩直接上传
        return callback()
      }
      var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
      canvas.width = resizeW;
      canvas.height = resizeH;
      ctx?.drawImage(img, 0, 0, resizeW, resizeH);
      var base64 = canvas.toDataURL('image/jpeg', maxSize.level); 
      callback(base64);
  }
  }


  let MyUpload

  onMounted(async () => {
    await albumStore.fetch()

    const $id = id.value
    if ($id && typeof $id == 'string') {
      const {data: payload} = (await RESTManager.api.photos($id).get()) as any
      parsePayloadIntoReactiveData(payload as PhotoModel)
    }

    MyUpload = defineComponent({
      setup() {
        return () => (
        <>
        <NDivider />
        <NUpload
          multiple
          accept=".png,.jpg,.jpeg,.webp,.gif"
          show-preview-button
          show-download-button
          default-upload={false}
          list-type="image-card"
          action="/upload"
          default-file-list={data.photo}
          create-thumbnail-url={(file)=>{
            var reader = new FileReader();
            reader.readAsDataURL(file)
            return new Promise((resolve) => {
              reader.onload = function (e){
                imgCompress(reader,function(base64){
                  resolve(base64)
                })
              } 
            })
          }
          }
          on-finish={(e)=>{    
            const md5= e.event.target.response.substr(67, 32)
            e.file.file = md5
          }}
          on-change={(e)=>{  
            var numAll = e.fileList.length
            var numFinish = 0
            imagelist.clear()
            // console.log(numAll)
            for (let i = 0; i < numAll; i ++) {
              // console.log("i:", i)
              const file:fileType = e.fileList[i]
              if (file.status=='finished') {
                numFinish += 1
                imagelist.add((typeof file.file=='string')?(file.file):'')
              }
              else{
                break
              }
            }
            if(numAll==numFinish){photook.value=true}
            else{photook.value=false}
          }}
          on-remove={(e)=>{
            if(e.file.status=="finished"){
              console.log(e.file.file)
          }}}
          ref={uploadRef}
        >
          点击添加图片
        </NUpload>
        <NDivider />
        </>
        )
      }
    })
  })


  // api请求的photoModel转为本地格式
  const parsePayloadIntoReactiveData = (payload: PhotoModel) => {
    const raw = toRaw(data)
    const keys = Object.keys(raw)
    for (const k in payload) {
      if (keys.includes(k)) {
        data[k] = payload[k]
      }
    }
    data['photo'] = data.photos.map(item=>{
      imagelist.add(item)
      return {
      id:item,
      file:item,
      name:"pic",
      status:'finished',
      percentage: 100,
      url:'https://image.wind-watcher.cn/'+item,
    }})
    data['length'] = data.photos.length
  }

  const album = computed(
    () =>
      albumStore.get(data.albumId) ||
      albumStore.data?.value?.[0] ||
      ({} as AlbumModel),
  )


  // submit
  const uploadSubmit = async () => {
    uploadRef.value.submit()
  }

  
  const handleSubmit = async () => {
    data.photos = imagelist.toArray()
    data.length = data.photos.length
    if (id.value) {
      // update
      if (!isString(id.value)) {
        return
      }
      const $id = id.value as string
      await RESTManager.api.photos($id).put({
        data: {
          ...toRaw(data),
        },
      })
      message.success('修改成功')
    } else {
      // create
      await RESTManager.api.photos.post({
        data: {
          ...toRaw(data),
        },
      })
      message.success('发布成功')
    }
    router.push({ name: RouteName.EditAlbum, hash: '|publish' })
  }
  const uploadRef: Ref = ref(null)



  return ()=>(
    <ContentLayout
      title={id.value ? '上传照片' : '上传新照片'}
      actionsElement={
        <>
          <ParseContentButton data={data} />
          <HeaderActionButton
            icon={<Upload />}
            onClick={uploadSubmit}
          ></HeaderActionButton>
          <HeaderActionButton
            icon={<TelegramPlane />}
            onClick={handleSubmit}
            disabled={(!cansubmit.value)||(!photook.value)}
          ></HeaderActionButton>
        </>
      }
      footerButtonElement={
        <>
          <button
            onClick={() => {
              drawerShow.value = true
            }}
          >
            <Icon>
              <SlidersH />
            </Icon>
          </button>
        </>
      }
    >
      <div class={'text-gray-500 py-3'}>
        <label class="prefix">{`${WEB_URL}/${album.value.slug}/`}</label>

        <UnderlineInput
          class="ml-2"
          value={data.slug}
          onChange={(e) => {
            data.slug = e
            if(e.length>0 && data.title.length>0){cansubmit.value=true}
            else{cansubmit.value=false}
          }}
        />
      </div>

      <MyUpload/>

      <MaterialInput
        class="mt-3 relative z-10"
        label="简要介绍一下吧~"
        value={data.title}
        onChange={(e) => {
          data.title = e
          if(e.length>0 && data.slug.length>0){cansubmit.value=true}
          else{cansubmit.value=false}
        }}
      ></MaterialInput>


      <EditorToggleWrapper
        loading={!!(id.value && !data.title)}
        onChange={(v) => {
          data.text = v
        }}
        text={data.text}
      />

      {/* Drawer  */}

      <NDrawer
        show={drawerShow.value}
        width={450}
        style={{ maxWidth: '90vw' }}
        placement="right"
        onUpdateShow={(s) => {
          drawerShow.value = s
        }}
      >
        <NDrawerContent title="上传到">
          <NForm>
            <NFormItem label="分类" required path="album">
              <NSelect
                placeholder="请选择"
                value={data.albumId}
                onUpdateValue={(e) => {
                  data.albumId = e
                }}
                options={
                  albumStore.data.value?.map((i) => ({
                    label: i.name,
                    value: i.id,
                    key: i.id,
                  })) || []
                }
              ></NSelect>
            </NFormItem>
            <NFormItem
              label="是否隐藏"
              labelWidth={100}
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={data.hide}
                onUpdateValue={(e) => void (data.hide = e)}
              ></NSwitch>
            </NFormItem>
            <NFormItem
              label="版权注明"
              labelWidth={100}
              labelAlign="right"
              labelPlacement="left"
            >
              <NSwitch
                value={data.copyright}
                onUpdateValue={(e) => void (data.copyright = e)}
              ></NSwitch>
            </NFormItem>
          </NForm>
        </NDrawerContent>
      </NDrawer>
    </ContentLayout>
  )
}
)

export default PhotoUploadView
