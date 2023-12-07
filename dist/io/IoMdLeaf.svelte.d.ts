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
export type IoMdLeafProps = typeof __propDef.props;
export type IoMdLeafEvents = typeof __propDef.events;
export type IoMdLeafSlots = typeof __propDef.slots;
export default class IoMdLeaf extends SvelteComponentTyped<IoMdLeafProps, IoMdLeafEvents, IoMdLeafSlots> {
}
export {};
