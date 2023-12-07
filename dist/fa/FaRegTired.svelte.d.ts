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
export type FaRegTiredProps = typeof __propDef.props;
export type FaRegTiredEvents = typeof __propDef.events;
export type FaRegTiredSlots = typeof __propDef.slots;
export default class FaRegTired extends SvelteComponentTyped<FaRegTiredProps, FaRegTiredEvents, FaRegTiredSlots> {
}
export {};
