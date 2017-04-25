export const srcVueNodeHtml = `<li role="treeitem" :class="nodeClassName"><i class="tree-icon tree-ocl" role="presentation" @click="ontoggle()"></i><a :class="anchorClassName" href="javascript:void(0)" :draggable="draggable" @click="onchange()" @dblclick="ontoggle()" @mouseenter="hover(true)" @mouseleave="hover(false)" :data-path="pathString"><i v-if="checkbox" :class="checkboxClassName" role="presentation"></i><i v-if="data.icon !== false" :class="iconClassName" role="presentation"></i>{{data.text}}<span v-if="hasMarker" :class="markerClassName">&#160;</span></a><ul v-if="data.children" role="group" class="tree-children"><node v-for="(child, i) in data.children" :data="child" :last="i === data.children.length - 1" :checkbox="checkbox" :path="geChildPath(i)" :draggable="draggable" @toggle="ontoggle(arguments[0])" @change="onchange(arguments[0])"></node></ul></li>`;
export const srcVueTreeHtml = `<div :class="rootClassName" role="tree"><ul :class="containerClassName" role="group" @drag="ondrag($event)" @dragstart="ondragstart($event)" @dragend="ondragend($event)" @dragover="ondragover($event)" @dragenter="ondragenter($event)" @dragleave="ondragleave($event)" @drop="ondrop($event)"><node v-for="(child, i) in data" :data="child" :last="i === data.length - 1" :checkbox="checkbox" :path="[i]" :draggable="draggable" @toggle="ontoggle(arguments[0])" @change="onchange(arguments[0])"></node></ul></div>`;
