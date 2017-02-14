import * as Vue from "vue";
import "../../dist/vue";
import { data, clearSelectionOfTree, toggle, setSelectionOfTree, setParentsSelection } from "../common";
import * as common from "../../dist/common";

/* tslint:disable:no-unused-new */

new Vue({
    el: "#container",
    data() {
        return {
            data,
            selectedId: null,
            data2: JSON.parse(JSON.stringify(data)),
            data3: JSON.parse(JSON.stringify(data)),
        };
    },
    methods: {
        toggle(eventData: common.EventData) {
            toggle(eventData);
        },
        change(this: This, eventData: common.EventData) {
            this.selectedId = eventData.data.state.selected ? null : eventData.data.value.id;
            if (!eventData.data.state.selected) {
                for (const child of this.data) {
                    clearSelectionOfTree(child);
                }
            }
            eventData.data.state.selected = !eventData.data.state.selected;
        },
        toggle2(eventData: common.EventData) {
            toggle(eventData);
        },
        change2(this: This, eventData: common.EventData) {
            setSelectionOfTree(eventData.data, !eventData.data.state.selected);
            setParentsSelection(this.data2, eventData.path);
        },
        toggle3(eventData: common.EventData) {
            toggle(eventData);
        },
        change3(this: This, eventData: common.EventData) {
            if (!eventData.data.state.selected) {
                for (const child of this.data3) {
                    clearSelectionOfTree(child);
                }
            }
            eventData.data.state.selected = !eventData.data.state.selected;
        },
        drop3(this: This, dropData: common.DropData) {
            if (dropData.targetData.state.dropPosition === common.DropPosition.inside) {
                if (dropData.targetData.children) {
                    dropData.targetData.children.push(JSON.parse(JSON.stringify(dropData.sourceData)));
                } else {
                    dropData.targetData.children = [JSON.parse(JSON.stringify(dropData.sourceData))];
                }
            } else {
                const startIndex = dropData.targetPath[dropData.targetPath.length - 1] + (dropData.targetData.state.dropPosition === common.DropPosition.up ? 0 : 1);
                const parent = common.getNodeFromPath(this.data3, dropData.targetPath.slice(0, dropData.targetPath.length - 1));
                if (parent && parent.children) {
                    parent.children!.splice(startIndex, 0, JSON.parse(JSON.stringify(dropData.sourceData)));
                } else {
                    this.data3.splice(startIndex, 0, JSON.parse(JSON.stringify(dropData.sourceData)));
                }
            }
        },
    },
});

type This = {
    data: common.TreeData[];
    selectedId: null | number;
    data2: common.TreeData[];
    data3: common.TreeData[];
} & Vue;
