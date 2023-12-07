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
export type GiSparrowProps = typeof __propDef.props;
export type GiSparrowEvents = typeof __propDef.events;
export type GiSparrowSlots = typeof __propDef.slots;
export default class GiSparrow extends SvelteComponentTyped<GiSparrowProps, GiSparrowEvents, GiSparrowSlots> {
}
export {};
