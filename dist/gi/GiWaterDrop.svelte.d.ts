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
export type GiWaterDropProps = typeof __propDef.props;
export type GiWaterDropEvents = typeof __propDef.events;
export type GiWaterDropSlots = typeof __propDef.slots;
export default class GiWaterDrop extends SvelteComponentTyped<GiWaterDropProps, GiWaterDropEvents, GiWaterDropSlots> {
}
export {};
