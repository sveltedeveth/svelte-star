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
export type GiCrosshairProps = typeof __propDef.props;
export type GiCrosshairEvents = typeof __propDef.events;
export type GiCrosshairSlots = typeof __propDef.slots;
export default class GiCrosshair extends SvelteComponentTyped<GiCrosshairProps, GiCrosshairEvents, GiCrosshairSlots> {
}
export {};
