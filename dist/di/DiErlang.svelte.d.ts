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
export type DiErlangProps = typeof __propDef.props;
export type DiErlangEvents = typeof __propDef.events;
export type DiErlangSlots = typeof __propDef.slots;
export default class DiErlang extends SvelteComponentTyped<DiErlangProps, DiErlangEvents, DiErlangSlots> {
}
export {};
