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
export type GiRatProps = typeof __propDef.props;
export type GiRatEvents = typeof __propDef.events;
export type GiRatSlots = typeof __propDef.slots;
export default class GiRat extends SvelteComponentTyped<GiRatProps, GiRatEvents, GiRatSlots> {
}
export {};
