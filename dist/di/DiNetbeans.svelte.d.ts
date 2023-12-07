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
export type DiNetbeansProps = typeof __propDef.props;
export type DiNetbeansEvents = typeof __propDef.events;
export type DiNetbeansSlots = typeof __propDef.slots;
export default class DiNetbeans extends SvelteComponentTyped<DiNetbeansProps, DiNetbeansEvents, DiNetbeansSlots> {
}
export {};
