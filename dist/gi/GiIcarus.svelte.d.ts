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
export type GiIcarusProps = typeof __propDef.props;
export type GiIcarusEvents = typeof __propDef.events;
export type GiIcarusSlots = typeof __propDef.slots;
export default class GiIcarus extends SvelteComponentTyped<GiIcarusProps, GiIcarusEvents, GiIcarusSlots> {
}
export {};
