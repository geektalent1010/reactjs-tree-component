import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "./common";
import { angularNodeTemplateHtml, angularTreeTemplateHtml } from "./angular-variables";

@Component({
    selector: "node",
    template: angularNodeTemplateHtml,
})
export class NodeComponent {
    @Input()
    data: common.TreeData;
    @Input()
    last: boolean;
    @Input()
    checkbox?: boolean;
    @Input()
    path: number[];
    @Input()
    draggable?: boolean;

    @Output()
    toggle = new EventEmitter<common.EventData>();
    @Output()
    change = new EventEmitter<common.EventData>();

    hovered = false;
    doubleClick = new common.DoubleClick();

    get nodeClassName() {
        return common.getNodeClassName(this.data, this.last);
    }

    get anchorClassName() {
        return common.getAnchorClassName(this.data, this.hovered);
    }

    get checkboxClassName() {
        return common.getCheckboxClassName(this.data);
    }

    get iconClassName() {
        return common.getIconClassName(this.data.icon);
    }

    get pathString() {
        return this.path.toString();
    }

    get hasMarker() {
        return this.draggable && this.data.state.dropPosition !== common.DropPosition.empty;
    }

    get markerClassName() {
        return common.getMarkerClassName(this.data);
    }

    get eventData(): common.EventData {
        return {
            data: this.data,
            path: this.path,
        };
    }

    geChildPath(index: number) {
        return this.path.concat(index);
    }

    hover(hovered: boolean) {
        this.hovered = hovered;
    }
    ontoggle(eventData?: common.EventData) {
        if (eventData) {
            this.toggle.emit(eventData);
        } else {
            if (this.data.state.openable || this.data.children.length > 0) {
                this.toggle.emit(this.eventData);
            }
        }
    }
    onchange(eventData?: common.EventData) {
        if (eventData) {
            this.change.emit(eventData);
        } else {
            if (this.data.state.disabled) {
                return;
            }

            this.doubleClick.onclick(() => {
                this.change.emit(this.eventData);
            });
        }
    }
}

@Component({
    selector: "tree",
    template: angularTreeTemplateHtml,
})
export class TreeComponent {
    @Input()
    data: common.TreeData[];
    @Input()
    checkbox?: boolean;
    @Input()
    draggable?: boolean;
    @Input()
    nodots?: boolean;
    @Input()
    size?: string;
    @Input()
    theme?: string;
    @Input()
    dropAllowed?: (dropData: common.DropData) => boolean;

    @Output()
    toggle = new EventEmitter<common.EventData>();
    @Output()
    change = new EventEmitter<common.EventData>();
    @Output()
    drop = new EventEmitter<common.DropData>();

    dragTarget: HTMLElement | null = null;
    dropTarget: HTMLElement | null = null;

    get rootClassName() {
        return common.getRootClassName(this.checkbox, this.size, this.theme);
    }
    get containerClassName() {
        return common.getContainerClassName(this.nodots);
    }

    canDrop(event: DragEvent) {
        return this.draggable && event.target && (event.target as HTMLElement).dataset && (event.target as HTMLElement).dataset.path;
    }
    ontoggle(eventData: common.EventData) {
        this.toggle.emit(eventData);
    }
    onchange(eventData: common.EventData) {
        this.change.emit(eventData);
    }
    ondragstart(event: DragEvent) {
        if (!this.draggable) {
            return;
        }
        this.dragTarget = event.target as HTMLElement;
        this.dropTarget = event.target as HTMLElement;
    }
    ondragend(event: DragEvent) {
        if (!this.draggable) {
            return;
        }
        this.dragTarget = null;
        for (const tree of this.data) {
            common.clearMarkerOfTree(tree);
        }
    }
    ondragover(event: DragEvent) {
        if (!this.canDrop(event)) {
            return;
        }
        common.ondrag(event.pageY, this.dragTarget, this.dropTarget, this.data, this.dropAllowed);
        event.preventDefault();
    }
    ondragenter(event: DragEvent) {
        if (!this.canDrop(event)) {
            return;
        }
        this.dropTarget = event.target as HTMLElement;
        common.ondrag(event.pageY, this.dragTarget, this.dropTarget, this.data, this.dropAllowed);
    }
    ondragleave(event: DragEvent) {
        if (!this.canDrop(event)) {
            return;
        }
        if (event.target === this.dropTarget) {
            this.dropTarget = null;
        }
        common.ondragleave(event.target as HTMLElement, this.data);
    }
    ondrop(event: DragEvent) {
        event.stopPropagation();
        if (!this.canDrop(event)) {
            return;
        }
        common.ondrop(event.target as HTMLElement, this.dragTarget, this.data, dropData => {
            this.drop.emit(dropData);
        });
    }
}
