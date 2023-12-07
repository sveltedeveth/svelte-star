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
export type IoMdHandProps = typeof __propDef.props;
export type IoMdHandEvents = typeof __propDef.events;
export type IoMdHandSlots = typeof __propDef.slots;
export default class IoMdHand extends SvelteComponentTyped<IoMdHandProps, IoMdHandEvents, IoMdHandSlots> {
}
export {};
