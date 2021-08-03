import {
  IHelpAreaRootContentItem,
} from './VHelpAreaContent.interface'

export const HELP_AREA_ROOT_CONTENT: Array<IHelpAreaRootContentItem> = [
  {
    title: 'form',
    description: 'Object type field. Contains form customization fields.',
    items: [
      {
        fieldName: 'title',
        description: 'A field of type string. Specifies the name of the form.'
      }
    ]
  },
  {
    title: 'fields',
    description: 'A collection of field objects. The order in which the fields are displayed depends on the order of the field description objects in the collection.',
    items: [
      {
        fieldName: 'type',
        description: 'Specifies the type of the field. Supported values: \'numeric\', \'text\', \'textArea\', \'logic\', \'date\', \'enum\'. Valid values are case sensitive.'
      },
      {
        fieldName: 'label',
        description: 'Determines the label on the field. Any string is allowed.'
      },
      {
        fieldName: '* defaultValue',
        description: 'Additional setting, applicable only for the field with the \'date\' type. Valid format: YYYY-MM-DD.'
      },
      {
        fieldName: '*! radioList',
        description: 'Mandatory setting applicable only for a field with an \'enum\' type. You can pass a array of strings as an argument. These lines will appear as labels for radio buttons. The order of the lines in the collection determines the radio buttons. The first button is selected by default. If no collection is specified, the field will not be generate.'
      },
    ]
  },
  {
    title: 'buttons',
    description: 'Collection of button objects. The buttons are displayed at the bottom of the form. The order of the buttons depends on the order of the button description objects in the collection.',
    items: [
      {
        fieldName: 'label',
        description: 'Determines the label on the button. Any string is allowed.'
      },
      {
        fieldName: 'type',
        description: 'Determines how the button will look. Valid values: \'primary\', \'secondary\''
      },
    ],
  },
]
