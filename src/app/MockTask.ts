export interface Events{
    id?: number 
    title: string
    tags?: object
    short_desc: string
    event_category: string
    event_subcategory: string
    cover_picture: string
}

export interface status {
  id: boolean
}

export interface apiformat{
  category: string
  subcategory: string
  taglist?: any
  offset: number
}