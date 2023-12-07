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
export type MdRvHookupProps = typeof __propDef.props;
export type MdRvHookupEvents = typeof __propDef.events;
export type MdRvHookupSlots = typeof __propDef.slots;
export default class MdRvHookup extends SvelteComponentTyped<MdRvHookupProps, MdRvHookupEvents, MdRvHookupSlots> {
}
export {};
