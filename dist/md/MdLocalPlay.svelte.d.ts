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
export type MdLocalPlayProps = typeof __propDef.props;
export type MdLocalPlayEvents = typeof __propDef.events;
export type MdLocalPlaySlots = typeof __propDef.slots;
export default class MdLocalPlay extends SvelteComponentTyped<MdLocalPlayProps, MdLocalPlayEvents, MdLocalPlaySlots> {
}
export {};
