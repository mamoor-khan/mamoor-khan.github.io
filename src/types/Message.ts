export enum Align {
  RIGHT,
  LEFT,
}

export type Message = {
  id: string
  text: string
  time: string
}

export type MessageProps = {
  messageList: Array<Message>
  date?: string
  align: Align
}
