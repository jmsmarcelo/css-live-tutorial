const text = {
    parent: 'PARENT (A)',
    reset: 'Reset',
    info: 'Info',
    children: 'CHILDREN ',
    length: 'Length: ',
    containerProperties: 'CONTAINER PROPERTIES',
    itemProperties: 'ITEM PROPERTIES',
    properties: 'Properties',
    child: 'Child',
    values: 'Values:',
    'display: flex': 'Flexbox is a powerful tool for creating flexible and responsive layouts. Click in a property name for more info.',
    'display: grid': 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. Click in a property name for more info.',
    container: {
        'flex-direction': 'Specifies the direction of the flexible items.',
        'flex-wrap': 'Specifies whether the flexible items should wrap or not.',
        'justify-content': 'aligns the flexible container\'s items when the items do not use all available space on the main-axis (horizontally).',
        'align-items': 'Specifies the default alignment for items inside a flexbox or grid container.',
        'align-content': 'Controls the spacing between lines/columns in a flex container with multiple lines/columns. Applies only when there are multiple lines or columns of items. In the <code>flex-wrap</code> the value cannot be <code>nowrap</code>.',
        'grid-template-columns': 'Specifies the number (and the widths) of columns in a grid layout.',
        'grid-template-rows': 'Specifies the number (and the heights) of the rows in a grid layout.',
        'grid-template-areas': 'Specifies areas within the grid layout. You can name grid items by using the <code>grid-area</code> property',
        'grid-template': "Is a shorthand property for the following properties: <code>grid-template-rows</code> and <code>grid-template-columns</code> or <code>grid-template-areas</code>",
        'justify-items': 'Is set on the grid container to give child elements (grid items) alignment in the inline direction. For this property to have any alignment effect, the grid items need available space around themselves in the inline direction.',

        'row': '(default) Left to right,',
        'row-reverse': 'Right to left.',
        'column': 'Top to bottom.',
        'column-reverse': 'Bottom to top.',
        'nowrap': '(default) All items are kept on a single line/column.',
        'wrap': 'Items wrap onto a new line/column when necessary.',
        'wrap-reverse': 'Items wrap onto a new line/column in the reverse direction.',
        'flex-start': 'Aligns items to the start of the container.',
        'flex-end': 'Aligns items to the end of the container.',
        'center': 'Centers items within the container.',
        'space-between': 'Distributes space between items, with the first and last items at the container\'s edges.',
        'space-around': 'Distributes space around items, including space before the first and after the last item.',
        'space-evenly': 'Distributes space evenly between items, with equal space on all sides.',
        'initial': 'Sets this property to its default value.',
        'inherit': 'Inherits this property from its parent element.'
    },
    item: {
        'order': {
            info: 'Defines the order in which flex items are displayed within the container, regardless of their order in the HTML.',
            '0': '(default) items with lower values appear first.'
        },
        'flex-grow': {
            info: 'Defines a flex item\'s ability to grow to fill the available space in the container.',
            '0': '(default) Does not grow.',
            '1': 'allows the item to grow and take up additional space.'
        },
        'flex-shrink': {
            info: 'Defines a flex item\'s ability to shrink if the container is smaller than the sum of the items\' widths.',
            '1': '(default) Can shrink.',
            '0': 'Prevents the item from shrinking.'
    },
        'flex-basis': {
            info: 'Defines the initial size of a flex item before space is distributed, similar to <code>width</code> but with flexible behavior.',
            'auto': '(default) uses the content or the item\'s defined width/height.'
        },
        'align-self': {
            info: 'Aligns an individual flex item along the cross axis, overriding the container\'s <code>align-items</code> value.',
            'auto': '(default) Uses the container\'s <code>align-items</code> value.',
            'flex-start': 'Aligns to the start of the cross axis.',
            'flex-end': 'Aligns to the end of the cross axis.',
            'center': 'Centers along the cross axis.',
            'baseline': 'Aligns along the text baseline.',
            'stretch': 'Stretches to fill the container (if allowed).'
        },
        'flex': {
            info: 'A shorthand property that combines <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.',
            '1 0 auto': 'sets the item to grow, not shrink, and use the auto width/height.'
        },
        'grid-area': {
            info: 'Specifies a grid item\'s size and location in a grid layout, and is a shorthand property for the following properties: <code>grid-row-start</code>, <code>grid-row-end</code>, <code>grid-column-start</code> and <code>grid-column-end</code>. Can also be used to assign a name to a grid item: <code>grid-template-areas</code>',
            'auto': 'Default value.',
            'boss': 'Specifies a name for the grid item.'
        }
    }
};