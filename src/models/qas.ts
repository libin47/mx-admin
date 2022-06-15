
export interface QAModel {
  id: string
  created: string
  answer: string[]
  question: string
}

export interface QAResponse {
  data: QAModel[]
}
