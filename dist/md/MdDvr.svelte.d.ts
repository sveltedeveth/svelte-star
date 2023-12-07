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
export type MdDvrProps = typeof __propDef.props;
export type MdDvrEvents = typeof __propDef.events;
export type MdDvrSlots = typeof __propDef.slots;
export default class MdDvr extends SvelteComponentTyped<MdDvrProps, MdDvrEvents, MdDvrSlots> {
}
export {};
