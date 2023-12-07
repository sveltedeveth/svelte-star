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
export type GiDimetrodonProps = typeof __propDef.props;
export type GiDimetrodonEvents = typeof __propDef.events;
export type GiDimetrodonSlots = typeof __propDef.slots;
export default class GiDimetrodon extends SvelteComponentTyped<GiDimetrodonProps, GiDimetrodonEvents, GiDimetrodonSlots> {
}
export {};
