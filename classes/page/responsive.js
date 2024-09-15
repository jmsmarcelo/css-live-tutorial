const maps = {
    children: ['B', 'C', 'D', 'E'],
    container: {
        'align-content': ['initial', 'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'inherit'],
        'align-items': ['normal', 'stretch', 'center', 'flex-start', 'flex-end', 'start', 'end', 'baseline', 'initial', 'inherit'],
        'justify-content': ['initial', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'inherit'],
        'row-gap': ['normal', '3px', '10px', '3%'],
        'column-gap': ['normal', '3px', '10px', '3%'],
        'gap': ['normal', '3px 10px', '10px 3px', '3%']
    },
    item: {
        'width': ['auto', '50px', '50%'],
        'height': ['auto', '50px', '50%'],
        'order': ['0', '1', '2', '3'],
        'align-self': ['auto', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']
    },
    flex: {
        container: {
            'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
            'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
            'flex-flow': ['row nowrap', 'row-reverse wrap', 'column wrap', 'column-reverse wrap-reverse']
        },
        item: {
            'flex-grow': ['0', '1', '2', '3'],
            'flex-shrink': ['1', '0', '2', '3'],
            'flex-basis': ['auto', '50px', '100px'],
            'flex': ['0 1 auto', '0 1 50px', '0 1 100px', '1 0 auto', '1 0 50px', '1 0 100px']
        }
    },
    grid: {
        container: {
            'grid-template-columns': ['none', 'auto auto', 'auto auto auto', '10% 15% 20% 30%'],
            'grid-template-rows': ['none', 'auto auto', 'auto auto auto', '10% 15% 20% 30%'],
            'grid-template-areas': ['none', '\'boss boss . .\'', '\'. boss boss .\'', '\'. boss boss boss\''],
            'grid-template': ['none', '\'boss boss . \' \'boss boss . \'', '\'boss boss boss\' \'boss boss boss\''],
            'justify-items': ['legacy', 'normal', 'stretch', 'start', 'left', 'center', 'end', 'right']
        },
        item: {
            'grid-area': ['auto', 'boss', '2/1/span 2/span 3']
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
function createSubInfo(t, p, c) {
    while(objs.cssInfo.children.length > 0) {
        objs.cssInfo.lastChild.remove();
    }
    const map = {};
    map[`cpInfo${p}`] = ['cssInfo', 'p', [['innerHTML', `<code>${p}</code>:`]]];
    map[`cpInfo${p}Info`] = [`cpInfo${p}`, 'p', [['innerHTML', text[c][p].info || text[c][p]]]];
    map[`cpInfo${p}Values`] = [`cpInfo${p}`, 'p', [['textContent', text.values]]];
    for(let k in t[p]) {
        let textInfo = text[c][p][t[p][k]] || text[c][t[p][k]]
        if(typeof textInfo !== 'undefined') {
            map[`cpInfo${p}${k}`] = [`cpInfo${p}Values`, 'p', [['classList', 'p-info'], ['innerHTML', `<code>${t[p][k]}</code>: ${textInfo}`]]];
        }
    }
    createObjs(map, objs, objs)
}
function getText(c, p, k) {
    if(text[c])
    text[c][p][k]
}
function createControllerContainer(target) {
    Object.assign(target, maps.container);
    const targetController = {
        cpParentDisplayContainerTable: ['cpParentDisplay', 'table', [['classList', 'container']]],
        cpParentDisplayContainerTr: ['cpParentDisplayContainerTable', 'tr']
    }
    targetController['cpParentDisplayContainer'] = ['cpParentDisplayContainerTr', 'th', [['colSpan', 2], ['textContent', text.containerProperties]]];
    for(let p in target) {
        targetController[`cpParentDisplay${p}tr`] = ['cpParentDisplayContainerTable', 'tr'];
        targetController[`cpParentDisplay${p}td`] = [`cpParentDisplay${p}tr`, 'td', [['onclick', function() {createSubInfo(target, p, 'container')}], ['textContent', p + ': ']]];
        targetController[`cpParentDisplay${p}Value`] = [`cpParentDisplay${p}tr`, 'td'];
        targetController[`cpParentDisplay${p}Select`] = [`cpParentDisplay${p}Value`, 'select', [['onchange', function() {setStyle(objs.parent, this.value)}]]];
        for(let v of target[p]) {
            targetController[`cpParentDisplay${p}${v}`] = [`cpParentDisplay${p}Select`, 'option', [['value', `${p}: ${v}`], ['textContent', v]]];
        }
    }
    createObjs(targetController, objs, objs);
}
function updateItems(vs, v, c, p) {
    let ov = vs[c][p];
    for(let k in vs) {
        if(vs[k][p] === v && p !== 'grid-area') {
            vs[k][p] = ov;
            objs[`cpParentDisplay${p}${k}Select`].value = ov;
        } else if(p === 'grid-area' && k !== c && vs[k][p] !== 'auto' && ov.split(':')[1] === 'auto') {
            vs[k][p] = ov;
            objs[`cpParentDisplay${p}${k}Select`].value = ov;
        }
    }
    vs[c][p] = v;
    maps.children.forEach(mc => {
        setStyle(objs[`child${mc}`], vs[mc][p]);
    });
}
function createControllerItem(target) {
    while(objs.cpParentDisplay.contains(objs.cpParentDisplayItemTable)) {
        objs.cpParentDisplay.removeChild(objs.cpParentDisplayItemTable);
    }
    Object.assign(target, maps.item);
    let values = {};
    const targetController = {
        cpParentDisplayItemTable: ['cpParentDisplay', 'table', [['classList', 'item']]],
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
        targetController[`cpParentDisplay${p}td`] = [`cpParentDisplay${p}tr`, 'td', [['onclick', function() {createSubInfo(target, p, 'item')}], ['textContent', p + ': ']]];
        let s = 0;
        maps.children.forEach(c => {
            if(typeof values[c] === 'undefined') {
                values[c] = {};
            }
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
                if(selected = (p === 'order' && i++ === s) || (p === 'grid-area' && typeof values[c][p] === 'undefined')) values[c][p] = `${p}:${v}`;
                targetController[`cpParentDisplay${p}${c}${v}`] = [`cpParentDisplay${p}${c}Select`, 'option', [['selected', selected], ['value', `${p}:${v}`], ['textContent', v]]];
            }
            s++;
        });
    }
    createObjs(targetController, objs, objs);
}
function parentReset() {
    resetStyle(objs.parent);
    maps.children.forEach(c => {
        resetStyle(objs['child' + c]);
    })
    setStyle(objs.parent, objs.cpParentDisplaySelect.value);
    setDisplayProperties();
    createInfo(objs.cpParentDisplaySelect.value);
}
function createChildren() {
    const mapChildren = {};
    while(objs.parent.firstChild) {
        objs.parent.firstChild.remove();
    }
    maps.children.forEach(c => {
        mapChildren['child' + c] = ['parent', 'div', [['classList', c.toLowerCase()], ['textContent', c]]];
    });
    createObjs(mapChildren, objs, objs);
}
const objs = {}, root = document.querySelector(':root');
createObjs({
    main: ['body', 'main'],
    cpSec: ['main', 'section', [['classList', 'cp-sec']]],
    cp: ['cpSec', 'section', [['classList', 'cp']]],

    cpChild: ['cp', 'div'],
    cpChildTitle: ['cpChild', 'h4', [['textContent', text.children]]],
    cpChildLength: ['cpChild', 'p', [['textContent', text.length]]],
    cpChildLengthSelect: ['cpChildLength', 'select', [['onchange', function() {
        maps.children = this.value.split(',');
        maps.item.order = [];
        for(let i = 0; i < maps.children.length; i++) {
            maps.item.order.push(i);
        }
        createChildren();
        createControllerItem(maps[objs.cpParentDisplaySelect.value.split(': ')[1]].item);
    }]]],
    chChildLengthOption4: ['cpChildLengthSelect', 'option', [['value', 'B,C,D,E'], ['textContent', '4']]],
    chChildLengthOption8: ['cpChildLengthSelect', 'option', [['disabled', window.innerWidth < 1600], ['value', 'B,C,D,E,F,G,H,I'], ['textContent', '8']]],
    chChildLengthOption12: ['cpChildLengthSelect', 'option', [['disabled', window.innerWidth < 2000], ['value', 'B,C,D,E,F,G,H,I,J,K,L,M'], ['textContent', '12']]],

    cpParent: ['cp', 'div'],
    cpParentTitle: ['cpParent', 'h4', [['textContent', text.parent]]],
    cpParentReset: ['cpParentTitle', 'button', [['type', 'button'], ['textContent', text.reset], ['onclick', function() {
        parentReset();
    }]]],
    cpParentInfoShowHide: ['cpParentTitle', 'button', [['type', 'button'], ['textContent', '[-] ' + text.info], ['onclick', function() {
        if(objs.cpInfo.style.display === 'none') {
            objs.cpInfo.style.display = 'block';
            this.textContent = this.textContent.replace(/\[\+\]/, '[-]');
        } else {
            objs.cpInfo.style.display = 'none';
            this.textContent = this.textContent.replace(/\[\-\]/, '[+]');
        }
    }]]],

    cpParentDisplay: ['cpParent', 'p', [['textContent', 'Display: ']]],
    cpParentDisplaySelect: ['cpParentDisplay', 'select', [['onchange', function() {
        parentReset();
    }]]],
    cpParentDisplayFlex: ['cpParentDisplaySelect', 'option', [['value', 'display: flex'], ['textContent', 'flex']]],
    cpParentDisplayGrid: ['cpParentDisplaySelect', 'option', [['value', 'display: grid'], ['textContent', 'grid']]],

    cpInfo: ['cpSec', 'section', [['classList', 'cp-info']]],

    parent: ['main', 'section', [['classList', 'parent']]],
}, objs, document);
createChildren();
setStyle(objs.parent, objs.cpParentDisplaySelect.value);
setDisplayProperties();
createInfo(objs.cpParentDisplaySelect.value);