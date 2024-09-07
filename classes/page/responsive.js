const maps = {
    children: ['B', 'C', 'D', 'E'],
    container: {
        'justify-content': ['initial', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'inherit']
    },
    item: {
        'order': [1, 2, 3, 4]
    },
    flex: {
        container: {
            'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
            'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
            'align-items': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
            'align-content': ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        },
        item: {
            'flex-grow': [0, 1, 2, 3],
            'flex-shrink': [1, 0, 2, 3],
            'flex-basis': ['auto', '50px', '100px'],
            'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
            'flex': ['0 1 auto', '0 1 50px', '0 1 100px', '1 0 auto', '1 0 50px', '1 0 100px']
        }
    },
    grid: {
        container: {
            'grid-template-columns': ['none', 'auto auto', 'auto auto auto', '10% 15% 20% 30%'],
            'grid-template-rows': ['none', 'auto auto', 'auto auto auto', '10% 15% 20% 30%'],
            'grid-template-areas': ['none', '\'boss boss . .\'', '\'. boss boss .\'', '\'. boss boss boss\''],
            'grid-template': ['none', '\'boss boss . \' \'boss boss . \'', '\'boss boss boss\' \'boss boss boss\''],
        },
        item: {
            'grid-area': ['', 'boss']
        }
    }
}
function setDisplayProperties() {
    while(objs.cpParentDisplay.children.length > 1) {
        objs.cpParentDisplay.lastChild.remove();
    }
    switch(objs.cpParentDisplaySelect.value) {
        case 'display: flex':
            createControllerContainer(maps.flex.container);
            createControllerItem(maps.flex.item);
            break;
        case 'display: grid':
            createControllerContainer(maps.grid.container);
            createControllerItem(maps.grid.item);
            break;
    }
}
function createInfo(att) {
    while(objs.cpInfo.firstChild) {
        objs.cpInfo.firstChild.remove();
    }
    createObjs({
        cssInfo: ['cpInfo', 'span', [['textContent', text[att]]]]
    }, objs, objs);
}
function createSubInfo(p, pk) {
    while(objs.cssInfo.children.length > 0) {
        objs.cssInfo.lastChild.remove();
    }
    const map = {};
    map[`cpInfo${pk}`] = ['cssInfo', 'p', [['innerHTML', `<code>${pk}</code>:`]]];
    map[`cpInfo${pk}Info`] = [`cpInfo${pk}`, 'p', [['textContent', p[pk].info]]];
    map[`cpInfo${pk}Values`] = [`cpInfo${pk}`, 'p', [['textContent', text.values]]];
    for(let k in p[pk].values) {
        map[`cpInfo${pk}${k}`] = [`cpInfo${pk}Values`, 'p', [['classList', 'p-info'], ['innerHTML', `<code>${k}</code>: ${p[pk].values[k]}`]]]
    }
    createObjs(map, objs, objs)
}
function getSelectedDisplay() {
    return objs.cpParentDisplaySelect.value.split(': ')[1];
}
function createControllerContainer(target) {
    Object.assign(target, maps.container);
    const targetController = {
        cpParentDisplayContainerTable: ['cpParentDisplay', 'table'],
        cpParentDisplayContainerTr: ['cpParentDisplayContainerTable', 'tr']
    }
    targetController['cpParentDisplayContainer'] = ['cpParentDisplayContainerTr', 'th', [['colSpan', 2], ['textContent', text.containerProperties]]];
    for(let p in target) {
        targetController[`cpParentDisplay${p}tr`] = ['cpParentDisplayContainerTable', 'tr'];
        targetController[`cpParentDisplay${p}td`] = [`cpParentDisplay${p}tr`, 'td', [['onclick', function() {createSubInfo(text.containers, p)}], ['textContent', p + ': ']]];
        targetController[`cpParentDisplay${p}Value`] = [`cpParentDisplay${p}tr`, 'td'];
        targetController[`cpParentDisplay${p}Select`] = [`cpParentDisplay${p}Value`, 'select', [['onchange', function() {setStyle(objs.parent, this.value)}]]];
        for(let v of target[p]) {
            targetController[`cpParentDisplay${p}${v}`] = [`cpParentDisplay${p}Select`, 'option', [['value', `${p}: ${v}`], ['textContent', v]]];
        }
    }
    createObjs(targetController, objs, objs);
}
function updateItems(vs, v, c, p) {
    let ov = vs[c];
    for(let k in vs) {
        if(vs[k] === v && p !== 'grid-area' ||
            vs[k] === v && ov.split(':')[1] === '' && p === 'grid-area') {
            vs[k] = ov;
            objs[`cpParentDisplay${p}${k}Select`].value = ov;
        }
    }
    vs[c] = v;
    maps.children.forEach(mc => {
        setStyle(objs[`child${mc}`], vs[mc]);
    });
}
function createControllerItem(target) {
    Object.assign(target, maps.item);
    let values = {};
    const targetController = {
        cpParentDisplayItemTable: ['cpParentDisplay', 'table'],
        cpParentDisplayItemTr: ['cpParentDisplayItemTable', 'tr']
    }
    targetController['cpParentDisplayItem'] = ['cpParentDisplayItemTr', 'th', [['colSpan', (maps.children.length + 1)], ['textContent', text.itemProperties]]];
    targetController[`cpParentDisplayTitles`] = ['cpParentDisplayItemTable', 'tr'];
    targetController[`cpParentDisplayProperties`] = ['cpParentDisplayTitles', 'th', [['textContent', text.properties]]];
    maps.children.forEach(n => {
        targetController[`cpParentDisplay${n}Title`] = ['cpParentDisplayTitles', 'th', [['textContent', `${text.child} ${n}`]]]
    })
    for(let p in target) {
        targetController[`cpParentDisplay${p}tr`] = ['cpParentDisplayItemTable', 'tr'];
        targetController[`cpParentDisplay${p}td`] = [`cpParentDisplay${p}tr`, 'td', [['onclick', function() {createSubInfo(text.items, p)}], ['textContent', p + ': ']]];
        let s = 0;
        maps.children.forEach(c => {
            let i = 0;
            targetController[`cpParentDisplay${p}${c}td`] = [`cpParentDisplay${p}tr`, 'td']
            targetController[`cpParentDisplay${p}${c}Select`] = [`cpParentDisplay${p}${c}td`, 'select', [['onchange', function() {
                if(p === 'order' || p === 'grid-area') {
                    updateItems(values, this.value, c, p)
                } else {
                    setStyle(objs[`child${c}`], this.value);
                }
            }]]];
            for(let v of target[p]) {
                let selected = false;
                if(selected = (p === 'order' && i++ === s) || (p === 'grid-area' && typeof values[c] === 'undefined')) values[c] = `${p}:${v}`;
                targetController[`cpParentDisplay${p}${c}${v}`] = [`cpParentDisplay${p}${c}Select`, 'option', [['selected', selected], ['value', `${p}:${v}`], ['textContent', v]]];
            }
            s++;
        });
    }
    createObjs(targetController, objs, objs);
}
const objs = {}, root = document.querySelector(':root');
createObjs({
    cp: ['body', 'aside'],

    cpChild: ['cp', 'div'],
    cpChildTitle: ['cpChild', 'h4', [['textContent', text.children]]],
    cpChildDisplay: ['cpChild', 'p', [['textContent', text.size]]],
    cpChildDisplaySelect: ['cpChildDisplay', 'select', [['onchange', function() {setSizeChilds(this.value)}]]],
    cpChildDisplayAuto: ['cpChildDisplaySelect', 'option', [['value', 'auto'], ['textContent', 'auto auto']]],
    cpChildDisplay50: ['cpChildDisplaySelect', 'option', [['value', '50px'], ['textContent', '50px 50px']]],
    cpChildDisplay110: ['cpChildDisplaySelect', 'option', [['value', '110px'], ['textContent', '110px 110px']]],

    cpParent: ['cp', 'div'],
    cpParentTitle: ['cpParent', 'h4', [['textContent', text.parent]]],

    cpParentDisplay: ['cpParent', 'p', [['textContent', 'Display: ']]],
    cpParentDisplaySelect: ['cpParentDisplay', 'select', [['onchange', function() {
        resetStyle(objs.parent);
        resetStyle(objs.childB);
        resetStyle(objs.childC);
        resetStyle(objs.childD);
        resetStyle(objs.childE);
        setStyle(objs.parent, this.value);
        setDisplayProperties();
        createInfo(this.value.split(': ')[1]);
    }]]],
    cpParentDisplayFlex: ['cpParentDisplaySelect', 'option', [['value', 'display: flex'], ['textContent', 'flex']]],
    cpParentDisplayGrid: ['cpParentDisplaySelect', 'option', [['disabled', true], ['value', 'display: grid'], ['textContent', 'grid']]],

    cpInfo: ['body', 'section', [['classList', 'cp-info']]],

    parent: ['body', 'section', [['classList', 'parent']]],
    childB: ['parent', 'div', [['classList', 'b'], ['textContent', 'B']]],
    childC: ['parent', 'div', [['classList', 'c'], ['textContent', 'C']]],
    childD: ['parent', 'div', [['classList', 'd'], ['textContent', 'D']]],
    childE: ['parent', 'div', [['classList', 'e'], ['textContent', 'E']]]
}, objs, document);
setStyle(objs.parent, objs.cpParentDisplaySelect.value);
setDisplayProperties();
createInfo(getSelectedDisplay());