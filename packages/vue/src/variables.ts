/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
import { Node, Tree } from "./index"

// @ts-ignore
export function nodeTemplateHtml(this: Node<any>) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.nodeClassName,attrs:{"role":"treeitem","id":_vm.id}},[_c('i',{class:_vm.oclClassName,attrs:{"role":"presentation"},on:{"click":function($event){return _vm.ontoggle()}}}),_vm._v(" "),_c('a',{class:_vm.anchorClassName,attrs:{"href":"javascript:void(0)","draggable":_vm.draggable,"data-path":_vm.pathString},on:{"click":function($event){return _vm.onchange()},"dblclick":function($event){return _vm.ontoggle()},"mouseenter":function($event){return _vm.hover(true)},"mouseleave":function($event){return _vm.hover(false)},"contextmenu":function($event){return _vm.oncontextmenu($event)}}},[(_vm.checkbox)?_c('i',{class:_vm.checkboxClassName,attrs:{"role":"presentation"}}):_vm._e(),_vm._v(" "),(_vm.data.icon !== false)?_c('i',{class:_vm.iconClassName,attrs:{"role":"presentation"}}):_vm._e(),_vm._v(" "),(_vm.data.component)?_c(_vm.data.component,{tag:"component",attrs:{"data":_vm.data}}):[_vm._v(_vm._s(_vm.data.text))],_vm._v(" "),(_vm.hasMarker)?_c('span',{class:_vm.markerClassName},[_vm._v(" ")]):_vm._e(),_vm._v(" "),(_vm.data.contextmenu && _vm.contextmenuVisible)?_c('div',{style:(_vm.contextmenuStyle)},[_c(_vm.data.contextmenu,{tag:"component",attrs:{"data":_vm.contextmenuData}})],1):_vm._e()],2),_vm._v(" "),(_vm.data.children)?_c('ul',{staticClass:"tree-children",attrs:{"role":"group"}},_vm._l((_vm.data.children),function(child,i){return _c('node',{key:i,attrs:{"data":child,"last":i === _vm.data.children.length - 1,"checkbox":_vm.checkbox,"path":_vm.geChildPath(i),"draggable":_vm.draggable,"root":_vm.root,"zindex":_vm.zindex,"preid":_vm.preid},on:{"toggle":function($event){return _vm.ontoggle($event)},"change":function($event){return _vm.onchange($event)}}})}),1):_vm._e()])}
// @ts-ignore
export var nodeTemplateHtmlStatic = [  ]
// @ts-ignore
export function treeTemplateHtml(this: Tree<any>) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.rootClassName,attrs:{"role":"tree"}},[_c('ul',{class:_vm.containerClassName,attrs:{"role":"group"},on:{"dragstart":function($event){return _vm.ondragstart($event)},"dragend":function($event){return _vm.ondragend($event)},"dragover":function($event){return _vm.ondragover($event)},"dragenter":function($event){return _vm.ondragenter($event)},"dragleave":function($event){return _vm.ondragleave($event)},"drop":function($event){return _vm.ondrop($event)}}},_vm._l((_vm.data),function(child,i){return _c('node',{key:i,attrs:{"data":child,"last":i === _vm.data.length - 1,"checkbox":_vm.checkbox,"path":[i],"draggable":_vm.draggable,"root":_vm.data,"zindex":_vm.zindex,"preid":_vm.preid},on:{"toggle":function($event){return _vm.ontoggle($event)},"change":function($event){return _vm.onchange($event)}}})}),1)])}
// @ts-ignore
export var treeTemplateHtmlStatic = [  ]
// tslint:enable
