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
export type MdLocalDiningProps = typeof __propDef.props;
export type MdLocalDiningEvents = typeof __propDef.events;
export type MdLocalDiningSlots = typeof __propDef.slots;
export default class MdLocalDining extends SvelteComponentTyped<MdLocalDiningProps, MdLocalDiningEvents, MdLocalDiningSlots> {
}
export {};
