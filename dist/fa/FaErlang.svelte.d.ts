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
export type FaErlangProps = typeof __propDef.props;
export type FaErlangEvents = typeof __propDef.events;
export type FaErlangSlots = typeof __propDef.slots;
export default class FaErlang extends SvelteComponentTyped<FaErlangProps, FaErlangEvents, FaErlangSlots> {
}
export {};
