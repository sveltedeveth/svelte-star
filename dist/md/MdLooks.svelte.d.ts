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
export type MdLooksProps = typeof __propDef.props;
export type MdLooksEvents = typeof __propDef.events;
export type MdLooksSlots = typeof __propDef.slots;
export default class MdLooks extends SvelteComponentTyped<MdLooksProps, MdLooksEvents, MdLooksSlots> {
}
export {};
