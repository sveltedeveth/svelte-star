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
export type FaRegMehProps = typeof __propDef.props;
export type FaRegMehEvents = typeof __propDef.events;
export type FaRegMehSlots = typeof __propDef.slots;
export default class FaRegMeh extends SvelteComponentTyped<FaRegMehProps, FaRegMehEvents, FaRegMehSlots> {
}
export {};
