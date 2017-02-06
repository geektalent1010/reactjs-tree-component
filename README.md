[![Dependency Status](https://david-dm.org/plantain-00/tree-component.svg)](https://david-dm.org/plantain-00/tree-component)
[![devDependency Status](https://david-dm.org/plantain-00/tree-component/dev-status.svg)](https://david-dm.org/plantain-00/tree-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/tree-component.svg?branch=master)](https://travis-ci.org/plantain-00/tree-component)
[![npm version](https://badge.fury.io/js/tree-component.svg)](https://badge.fury.io/js/tree-component)
[![Downloads](https://img.shields.io/npm/dm/tree-component.svg)](https://www.npmjs.com/package/tree-component)

# tree-component
A reactjs, angular2 and vuejs tree component.

#### install

`npm i tree-component`

#### link css from jstree

```html
<link rel="stylesheet" href="./node_modules/jstree/dist/themes/default/style.min.css" />
```

#### vuejs component demo

```ts
import "tree-component/dist/vue";
```

```html
<tree :data="data"
    @toggle="toggle(arguments[0])"
    @change="change(arguments[0])">
</tree>
```

the online demo: https://plantain-00.github.io/tree-component/demo/vue/index.html

the source code of the demo: https://github.com/plantain-00/tree-component/tree/master/demo/vue

#### reactjs component demo

```ts
import { Tree } from "tree-component/dist/react";
```

```html
<Tree data={data}
    toggle={this.toggle}
    change={this.change}>
</Tree>
```

the online demo: https://plantain-00.github.io/tree-component/demo/react/index.html

the source code of the demo: https://github.com/plantain-00/tree-component/tree/master/demo/react

#### angular2 component demo

```ts
import { TreeComponent, NodeComponent } from "tree-component/dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, TreeComponent, NodeComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<tree [data]="data"
    (toggle)="toggle($event)"
    (change)="change($event)">
</tree>
```

the online demo: https://plantain-00.github.io/tree-component/demo/angular/index.html

the source code of the demo: https://github.com/plantain-00/tree-component/tree/master/demo/angular

#### properties and events of the component

name | type | description
--- | --- | ---
data | [TreeData](#tree-data-structure)[] | the data of the tree
toggle | (eventData: [EventData](#event-data-structure)) => void | triggered when opening or closing a node
change | (eventData: [EventData](#event-data-structure)) => void | triggered when selecting or deselecting a node

#### tree data structure

```ts
type TreeData = {
    text: string;
    value?: any;
    state: {
        opened: boolean;
        selected: boolean;
        disabled: boolean;
    };
    children?: TreeData[];
};
```

#### event data structure

```ts
type EventData = {
    data: TreeData;
};
```

#### features

+ vuejs component
+ reactjs component
+ angular2 component
