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
export type DiSublimeProps = typeof __propDef.props;
export type DiSublimeEvents = typeof __propDef.events;
export type DiSublimeSlots = typeof __propDef.slots;
export default class DiSublime extends SvelteComponentTyped<DiSublimeProps, DiSublimeEvents, DiSublimeSlots> {
}
export {};
