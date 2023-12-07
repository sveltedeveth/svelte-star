import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdDragHandleProps = typeof __propDef.props;
export type MdDragHandleEvents = typeof __propDef.events;
export type MdDragHandleSlots = typeof __propDef.slots;
export default class MdDragHandle extends SvelteComponentTyped<MdDragHandleProps, MdDragHandleEvents, MdDragHandleSlots> {
}
export {};
