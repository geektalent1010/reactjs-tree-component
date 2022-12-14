import { createApp, defineComponent, PropType } from 'vue'
import { Node, Tree, ContextMenuData, getNodeFromPath, EventData, DropData, TreeData, DragTargetData } from '../dist/'
import { data, clearSelectionOfTree, toggle, setSelectionOfTree, setParentsSelection, move, canMove, setContextMenu, Value } from 'tree-component/demo/'

const DeleteButton = defineComponent({
  props: {
    data: {
      type: Object as PropType<ContextMenuData<Value>>,
      required: true,
    }
  },
  methods: {
    click() {
      const parent = getNodeFromPath(this.data.root, this.data.path.slice(0, this.data.path.length - 1))
      const children = parent && parent.children ? parent.children : this.data.root
      const index = this.data.path[this.data.path.length - 1]!
      children.splice(index, 1)
    }
  },
  template: `<button @click="click()">delete</button>`,
})

const data8: typeof data = JSON.parse(JSON.stringify(data))
for (const tree of data8) {
  setContextMenu(tree, 'delete-button')
}

const CustomNode = defineComponent({
  props: {
    data: {
      type: Object as PropType<TreeData<Value>>,
      required: true,
    }
  },
  template: `<span><span style="color: red">{{data.value.id}}</span>{{data.text}}</span>`,
})

const App = defineComponent({
  data: () => {
    return {
      data: data,
      selectedId: null as number | null,
      data2: JSON.parse(JSON.stringify(data)),
      data3: JSON.parse(JSON.stringify(data)),
      data4: JSON.parse(JSON.stringify(data)),
      data5: JSON.parse(JSON.stringify(data)),
      data6: JSON.parse(JSON.stringify(data)),
      data7: JSON.parse(JSON.stringify(data)),
      data8: data8,
      data9: JSON.parse(JSON.stringify(data)),
      data10: JSON.parse(JSON.stringify(data)),
      data11: JSON.parse(JSON.stringify(data)),
      dropAllowed: canMove,
      dragTarget: null as DragTargetData | null,
    }
  },
  methods: {
    changeDragTarget(dragTarget: DragTargetData) {
      this.dragTarget = dragTarget
    },
    toggle(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    change(eventData: EventData<Value>) {
      this.selectedId = eventData.data.state.selected ? null : eventData.data.value!.id
      if (!eventData.data.state.selected) {
        for (const child of this.data) {
          clearSelectionOfTree(child)
        }
      }
      eventData.data.state.selected = !eventData.data.state.selected
    },
    toggle2(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    change2(eventData: EventData<Value>) {
      setSelectionOfTree(eventData.data, !eventData.data.state.selected)
      setParentsSelection(this.data2, eventData.path)
    },
    toggle3(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    drop3(dropData: DropData<Value>) {
      move(dropData, this.data3)
    },
    toggle4(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    toggle5(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    toggle6(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    toggle7(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    change7(eventData: EventData<Value>) {
      setSelectionOfTree(eventData.data, !eventData.data.state.selected)
      setParentsSelection(this.data7, eventData.path)
    },
    drop7(dropData: DropData<Value>) {
      move(dropData, this.data7)
    },
    toggle8(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    toggle9(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    toggle10(eventData: EventData<Value>) {
      toggle(eventData, 'custom-node')
    },
    drop10(dropData: DropData<Value>) {
      move(dropData, this.data10)
    },
  },
  template: `
    <div>
      <a href="https://github.com/plantain-00/tree-component/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
      <br/>
      default:
      <div class="default">
          <tree :data="data"
              @toggle="toggle($event)"
              @change="change($event)"></tree>
          selected id: {{selectedId}}
      </div>
      <hr/>
      checkbox:
      <div class="checkbox">
          <tree :data="data2"
              :checkbox="true"
              @toggle="toggle2($event)"
              @change="change2($event)"></tree>
      </div>
      <hr/>
      draggable:
      <div class="draggable">
          <tree :data="data3"
              :draggable="true"
              :drop-allowed="dropAllowed"
              :drag-target="dragTarget"
              @toggle="toggle3($event)"
              @drop="drop3($event)"
              @change-drag-target="changeDragTarget"></tree>
      </div>
      <hr/>
      draggable 2:
      <div class="draggable">
          <tree :data="data10"
              :draggable="true"
              :drop-allowed="dropAllowed"
              :drag-target="dragTarget"
              @toggle="toggle10($event)"
              @drop="drop10($event)"
              @change-drag-target="changeDragTarget"></tree>
      </div>
      <hr/>
      no dots:
      <div class="no-dots">
          <tree :data="data4"
              :nodots="true"
              @toggle="toggle4($event)"></tree>
      </div>
      <hr/>
      large:
      <div class="large">
          <tree :data="data5"
              size="large"
              @toggle="toggle5($event)"></tree>
      </div>
      <hr/>
      small:
      <div class="small">
          <tree :data="data6"
              size="small"
              @toggle="toggle6($event)"></tree>
      </div>
      <hr/>
      dark theme:
      <div class="dark-theme">
          <tree :data="data7"
              theme="dark"
              :checkbox="true"
              :draggable="true"
              @toggle="toggle7($event)"
              @change="change7($event)"
              @drop="drop7($event)"></tree>
      </div>
      <hr/>
      contextmenu:
      <div class="contextmenu">
          <tree :data="data8"
              @toggle="toggle8($event)"></tree>
      </div>
      <br/>
      node id:
      <div class="node-id">
      <tree :data="data9"
          preid="test_"
          @toggle="toggle9($event)"></tree>
      </div>
      <br/>
      slot:
      <div class="slot">
      <tree :data="data11">
        <node
          v-for="(child, i) in data11"
          :key="i"
          :data="child"
          :last="i === data11.length - 1"
          :path="[i]"
          :root="data11"
        >
        </node>
      </tree>
      </div>
  </div>
  `
})

const app = createApp(App)
app.component('delete-button', DeleteButton)
app.component('custom-node', CustomNode)
app.component('node', Node)
app.component('tree', Tree)
app.mount('#container')

