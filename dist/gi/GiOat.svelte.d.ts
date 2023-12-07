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
export type GiOatProps = typeof __propDef.props;
export type GiOatEvents = typeof __propDef.events;
export type GiOatSlots = typeof __propDef.slots;
export default class GiOat extends SvelteComponentTyped<GiOatProps, GiOatEvents, GiOatSlots> {
}
export {};
