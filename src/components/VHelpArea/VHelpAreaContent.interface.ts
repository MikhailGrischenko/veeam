export interface IHelpAreaRootContentItem {
  title: string
  description: string
  items: Array<IHelpAreaContentItem>
}

export interface IHelpAreaContentItem {
  fieldName: string
  description: string
}
