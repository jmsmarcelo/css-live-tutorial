const text = {
    parent: 'PARENT (A)',
    children: 'CHILDREN (B, C, D, E)',
    size: 'Size: ',
    containerProperties: 'CONTAINER PROPERTIES',
    itemProperties: 'ITEM PROPERTIES',
    properties: 'Properties',
    child: 'Child',
    values: 'Values:',
    flex: 'Flexbox is a powerful tool for creating flexible and responsive layouts. Click in a property name for more info.',
    containers: {
        'flex-direction': {
            info: 'Defines the direction of the main axis along which the flex items are laid out.',
            values: {
                'row': '(default) Left to right,',
                'row-reverse': 'Right to left.',
                'column': 'Top to bottom.',
                'column-reverse': 'Bottom to top.'
            }
        },
        'flex-wrap': {
            info: 'Controls whether the flex items should wrap onto a new line or column.',
            values: {
                'nowrap': '(default) All items are kept on a single line/column.',
                'wrap': 'Items wrap onto a new line/column when necessary.',
                'wrap-reverse': 'Items wrap onto a new line/column in the reverse direction.'
            }
        },
        'justify-content': {
            info: 'Aligns items along the main axis (horizontal for \'row\').',
            values: {
                'initial': 'Sets this property to its default value.',
                'flex-start': '(default) Aligns items to the start of the container.',
                'flex-end': 'Aligns items to the end of the container.',
                'center': 'Centers items within the container.',
                'space-between': 'Distributes space between items, with the first and last items at the container\'s edges.',
                'space-around': 'Distributes space around items, including space before the first and after the last item.',
                'space-evenly': 'Distributes space evenly between items, with equal space on all sides.',
                'inherit': 'Inherits this property from its parent element.'
            }
        },
        'align-items': {
            info: 'Aligns items along the cross axis (vertical for \'row\').',
            values: {
                'stretch': '(default) Items stretch to fill the container.',
                'flex-start': 'Aligns items to the start of the cross axis.',
                'flex-end': 'Aligns items to the end of the cross axis.',
                'center': 'Centers items along the cross axis.',
                'baseline': 'Aligns items along their text baselines.'
            }
        },
        'align-content': {
            info: 'Controls the spacing between lines/columns in a flex container with multiple lines/columns. Applies only when there are multiple lines or columns of items. In the \'flex-wrap\' the value cannot be \'nowrap\'.',
            values: {
                'stretch': '(default) Lines/columns stretch to fill the available space.',
                'flex-start': 'Lines/columns are grouped at the start.',
                'flex-end': 'Lines/columns are grouped at the end.',
                'center': 'Lines/columns are centered.',
                'space-between': 'Space is distributed between the lines/columns.',
                'space-around': 'Space is distributed around the lines/columns.',
            }
        }
    },
    items: {
        'order': {
            info: 'Defines the order in which flex items are displayed within the container, regardless of their order in the HTML.',
            values: {
                '0': '(default) items with lower values appear first.'
            }
        },
        'flex-grow': {
            info: 'Defines a flex item\'s ability to grow to fill the available space in the container.',
            values: {
                '0': '(default) Does not grow.',
                '1': 'allows the item to grow and take up additional space.'
            }
        },
        'flex-shrink': {
            info: 'Defines a flex item\'s ability to shrink if the container is smaller than the sum of the items\' widths.',
            values: {
                '1': '(default) Can shrink.',
                '0': 'Prevents the item from shrinking.'
            }
        },
        'flex-basis': {
            info: 'Defines the initial size of a flex item before space is distributed, similar to \'width\' but with flexible behavior.',
            values: {
                'auto': '(default) uses the content or the item\'s defined width/height.'
            }
        },
        'align-self': {
            info: 'Aligns an individual flex item along the cross axis, overriding the container\'s \'align-items\' value.',
            values: {
                'auto': '(default) Uses the container\'s \'align-items\' value.',
                'flex-start': 'Aligns to the start of the cross axis.',
                'flex-end': 'Aligns to the end of the cross axis.',
                'center': 'Centers along the cross axis.',
                'baseline': 'Aligns along the text baseline.',
                'stretch': 'Stretches to fill the container (if allowed).'
            }
        },
        'flex': {
            info: 'A shorthand property that combines \'flex-grow\', \'flex-shrink\', and \'flex-basis\'.',
            values: {
                '1 0 auto': 'sets the item to grow, not shrink, and use the auto width/height.'
            }
        }
    }
};