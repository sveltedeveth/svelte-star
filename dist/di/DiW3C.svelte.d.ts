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
export type DiW3CProps = typeof __propDef.props;
export type DiW3CEvents = typeof __propDef.events;
export type DiW3CSlots = typeof __propDef.slots;
export default class DiW3C extends SvelteComponentTyped<DiW3CProps, DiW3CEvents, DiW3CSlots> {
}
export {};
