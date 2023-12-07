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
export type GiFezProps = typeof __propDef.props;
export type GiFezEvents = typeof __propDef.events;
export type GiFezSlots = typeof __propDef.slots;
export default class GiFez extends SvelteComponentTyped<GiFezProps, GiFezEvents, GiFezSlots> {
}
export {};
