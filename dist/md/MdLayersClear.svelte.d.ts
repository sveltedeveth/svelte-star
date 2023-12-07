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
export type MdLayersClearProps = typeof __propDef.props;
export type MdLayersClearEvents = typeof __propDef.events;
export type MdLayersClearSlots = typeof __propDef.slots;
export default class MdLayersClear extends SvelteComponentTyped<MdLayersClearProps, MdLayersClearEvents, MdLayersClearSlots> {
}
export {};
