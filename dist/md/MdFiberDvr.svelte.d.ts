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
export type MdFiberDvrProps = typeof __propDef.props;
export type MdFiberDvrEvents = typeof __propDef.events;
export type MdFiberDvrSlots = typeof __propDef.slots;
export default class MdFiberDvr extends SvelteComponentTyped<MdFiberDvrProps, MdFiberDvrEvents, MdFiberDvrSlots> {
}
export {};
