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
export type MdLocalCafeProps = typeof __propDef.props;
export type MdLocalCafeEvents = typeof __propDef.events;
export type MdLocalCafeSlots = typeof __propDef.slots;
export default class MdLocalCafe extends SvelteComponentTyped<MdLocalCafeProps, MdLocalCafeEvents, MdLocalCafeSlots> {
}
export {};
