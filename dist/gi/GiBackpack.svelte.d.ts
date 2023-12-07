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
export type GiBackpackProps = typeof __propDef.props;
export type GiBackpackEvents = typeof __propDef.events;
export type GiBackpackSlots = typeof __propDef.slots;
export default class GiBackpack extends SvelteComponentTyped<GiBackpackProps, GiBackpackEvents, GiBackpackSlots> {
}
export {};
