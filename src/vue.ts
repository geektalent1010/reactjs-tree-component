import * as Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";

@Component({
    template: `
    <li role="treeitem" :class="nodeClassName">
        <i class="jstree-icon jstree-ocl" role="presentation" @click="toggle()"></i><a :class="anchorClassName" href="javascript:void(0)" @click="change()" @mouseenter="hover(true)" @mouseleave="hover(false)"><i class="jstree-icon jstree-themeicon" role="presentation"></i>{{data.text}}</a>
        <ul v-if="data.children" role="group" class="jstree-children">
            <node v-for="(child, i) in data.children"
                :data="child"
                :last="i === data.children.length - 1"
                @toggle="toggle(arguments[0])"
                @change="change(arguments[0])">
            </node>
        </ul>
    </li>
    `,
    props: ["data", "last"],
})
class Node extends Vue {
    data: common.TreeData;
    last: boolean;

    hovered = false;

    get nodeClassName() {
        const values = ["jstree-node"];
        if (this.data.children && this.data.children.length > 0) {
            if (this.data.state && this.data.state.opened) {
                values.push("jstree-open");
            } else {
                values.push("jstree-closed");
            }
        } else {
            values.push("jstree-leaf");
        }
        if (this.last) {
            values.push("jstree-last");
        }
        return values.join(" ");
    }

    get anchorClassName() {
        const values = ["jstree-anchor"];
        if (this.data.state) {
            if (this.data.state.selected) {
                values.push("jstree-clicked");
            }
            if (this.data.state.disabled) {
                values.push("jstree-disabled");
            }
        }
        if (this.hovered) {
            values.push("jstree-hovered");
        }
        return values.join(" ");
    }

    beforeMount() {
        if (!this.data.state) {
            this.data.state = {};
        }
    }

    hover(hovered: boolean) {
        this.hovered = hovered;
    }
    toggle(eventData?: common.EventData) {
        if (eventData) {
            this.$emit("toggle", eventData);
        } else {
            if (this.last) {
                this.$emit("toggle", { data: this.data });
            }
        }
    }
    change(eventData?: common.EventData) {
        if (eventData) {
            this.$emit("change", eventData);
        } else {
            this.$emit("change", { data: this.data });
        }
    }
}

Vue.component("node", Node);

@Component({
    template: `
    <div class="jstree jstree-default jstree-default-dark" role="tree">
        <ul class="jstree-container-ul jstree-children" role="group">
            <node :data="data"
                :last="true"
                @toggle="toggle(arguments[0])"
                @change="change(arguments[0])"></node>
        </ul>
    </div>
    `,
    props: ["data"],
})
export class Tree extends Vue {
    data: common.TreeData;

    toggle(eventData: common.EventData) {
        this.$emit("toggle", eventData);
    }
    change(eventData: common.EventData) {
        this.$emit("change", eventData);
    }
}

Vue.component("tree", Tree);
