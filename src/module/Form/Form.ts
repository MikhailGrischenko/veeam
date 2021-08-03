import {IForm} from './Form.intrface'

export class Form {
  title: string = ''

  constructor(form?: IForm) {
    this.title = form?.title ? form.title : 'Unknown form title'
  }
}
