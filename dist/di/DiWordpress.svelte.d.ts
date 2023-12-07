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
export type DiWordpressProps = typeof __propDef.props;
export type DiWordpressEvents = typeof __propDef.events;
export type DiWordpressSlots = typeof __propDef.slots;
export default class DiWordpress extends SvelteComponentTyped<DiWordpressProps, DiWordpressEvents, DiWordpressSlots> {
}
export {};
