'use strict'

const nodes = []

for (let i = 0; i < 80; i++) {
    const node = document.createElement('input')
    nodes.push(node);
}

document.body.append(...nodes);