document.addEventListener('DOMContentLoaded', async () => {
    let langScript = langFolder + fileName;
    switch(userLang) {
        /*case 'pt':
            case 'pt-BR':
                langScript += '_pt.js';
                break; */
        default:
            langScript += '_en.js';
    }
    await loadScript(langScript);
    loadScript(pageFolder + fileName + '.js');
});
const userLang = navigator.language || navigator.userLanguage, langFolder = 'classes/config/language/', pageFolder = 'classes/page/', fileName = document.location.pathname.replace(/.*\/(.*)\.html$/, "$1");
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.type = 'text/javascript';
        s.onload = () => resolve(url);
        s.onerror = () => reject(new Error('error loading script:' + url));
        document.head.appendChild(s);
    });
}
function createObjs(m, o, t) {
    for(const e in m) {
        o[e] = document.createElement(m[e][1]);
        if(m[e][2]) {
            for(const a of m[e][2]) {
                if(a.length === 3) {
                    o[e][a[0]][a[1]] = a[2];
                } else {
                    o[e][a[0]] = a[1];
                }
            }
        }
        if(o[m[e][0]]) {
            o[m[e][0]].appendChild(o[e]);
        } else if(t && t[m[e][0]]) {
            t[m[e][0]].appendChild(o[e]);
        } else if(t) {
            t.appendChild(o[e]);
        }
    }
}
function setStyle(el, att) {
    const parts = att.split(':');
    el.style.setProperty(parts[0], parts[1]);
}
function setSizeChilds(size) {
    root.style.setProperty('--width', size);
    root.style.setProperty('--height', size)
}
function resetStyle(el) {
    el.removeAttribute('style');
}