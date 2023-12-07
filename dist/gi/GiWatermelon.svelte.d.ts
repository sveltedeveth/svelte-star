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
export type GiWatermelonProps = typeof __propDef.props;
export type GiWatermelonEvents = typeof __propDef.events;
export type GiWatermelonSlots = typeof __propDef.slots;
export default class GiWatermelon extends SvelteComponentTyped<GiWatermelonProps, GiWatermelonEvents, GiWatermelonSlots> {
}
export {};
