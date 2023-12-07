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
export type GiFatProps = typeof __propDef.props;
export type GiFatEvents = typeof __propDef.events;
export type GiFatSlots = typeof __propDef.slots;
export default class GiFat extends SvelteComponentTyped<GiFatProps, GiFatEvents, GiFatSlots> {
}
export {};
