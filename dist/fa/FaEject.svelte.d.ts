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
export type FaEjectProps = typeof __propDef.props;
export type FaEjectEvents = typeof __propDef.events;
export type FaEjectSlots = typeof __propDef.slots;
export default class FaEject extends SvelteComponentTyped<FaEjectProps, FaEjectEvents, FaEjectSlots> {
}
export {};
