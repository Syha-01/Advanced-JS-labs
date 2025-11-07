// Exercise 22: Tree View
// Complete the TODOs below

const treeData = {
    id: 'root',
    name: 'Root',
    children: [
        {
            id: 'child1',
            name: 'Child 1',
            children: [
                { id: 'grandchild1', name: 'Grandchild 1', children: [] }
            ]
        },
        { id: 'child2', name: 'Child 2', children: [] }
    ]
};

// TODO 1: Define your state object
const state = {
    tree: treeData,
    expandedNodes: { 'root': true }
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const treeContainer = document.getElementById('tree-container');
    treeContainer.innerHTML = renderNode(state.tree);
}

function renderNode(node) {
    const isExpanded = state.expandedNodes[node.id];
    let childrenHtml = '';
    if (isExpanded && node.children.length > 0) {
        childrenHtml = `<ul>${node.children.map(renderNode).join('')}</ul>`;
    }

    return `
        <li>
            <span class="node-name" data-id="${node.id}">
                ${node.children.length > 0 ? (isExpanded ? '▼' : '►') : ''} ${node.name}
            </span>
            ${childrenHtml}
        </li>
    `;
}

// TODO 4: Add your event listeners and logic
document.getElementById('tree-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('node-name')) {
        const nodeId = event.target.dataset.id;
        const newExpandedNodes = { ...state.expandedNodes };
        newExpandedNodes[nodeId] = !newExpandedNodes[nodeId];
        updateState({ expandedNodes: newExpandedNodes });
    }
});

// TODO 5: Initial render
render();
