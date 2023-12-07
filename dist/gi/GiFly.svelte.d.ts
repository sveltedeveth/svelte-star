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
export type GiFlyProps = typeof __propDef.props;
export type GiFlyEvents = typeof __propDef.events;
export type GiFlySlots = typeof __propDef.slots;
export default class GiFly extends SvelteComponentTyped<GiFlyProps, GiFlyEvents, GiFlySlots> {
}
export {};
