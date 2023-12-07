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
export type GiCanoeProps = typeof __propDef.props;
export type GiCanoeEvents = typeof __propDef.events;
export type GiCanoeSlots = typeof __propDef.slots;
export default class GiCanoe extends SvelteComponentTyped<GiCanoeProps, GiCanoeEvents, GiCanoeSlots> {
}
export {};
