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
export type DiRustProps = typeof __propDef.props;
export type DiRustEvents = typeof __propDef.events;
export type DiRustSlots = typeof __propDef.slots;
export default class DiRust extends SvelteComponentTyped<DiRustProps, DiRustEvents, DiRustSlots> {
}
export {};
