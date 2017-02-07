export type TreeData = {
    text: string;
    value?: any;
    state: TreeNodeState;
    children?: TreeData[];
};

export type TreeNodeState = {
    opened: boolean;
    selected: boolean;
    disabled: boolean;
    loading: boolean;
    highlighted: boolean;
};

export type EventData = {
    data: TreeData;
};

import "tslib";

export class DoubleClick {
    clicked = false;
    timer: null | number = null;

    constructor(private timeout = 300) { }

    onclick(singleClick: () => void) {
        if (!this.clicked) {
            this.clicked = true;
            singleClick();
            this.timer = setTimeout(() => {
                this.clicked = false;
            }, this.timeout);
        } else {
            this.clicked = false;
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }
}

export function getNodeClassName(data: TreeData, last: boolean) {
    const values = ["jstree-node"];
    if (data.children && data.children.length > 0) {
        if (data.state.opened) {
            values.push("jstree-open");
        } else {
            values.push("jstree-closed");
        }
        if (data.state.loading) {
            values.push("jstree-loading");
        }
    } else {
        values.push("jstree-leaf");
    }
    if (last) {
        values.push("jstree-last");
    }
    return values.join(" ");
}

export function getAnchorClassName(data: TreeData, hovered: boolean) {
    const values = ["jstree-anchor"];
    if (data.state.selected) {
        values.push("jstree-clicked");
    }
    if (data.state.disabled) {
        values.push("jstree-disabled");
    }
    if (data.state.highlighted) {
        values.push("jstree-search");
    }
    if (hovered) {
        values.push("jstree-hovered");
    }
    return values.join(" ");
}
