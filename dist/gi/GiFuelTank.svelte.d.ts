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
export type GiFuelTankProps = typeof __propDef.props;
export type GiFuelTankEvents = typeof __propDef.events;
export type GiFuelTankSlots = typeof __propDef.slots;
export default class GiFuelTank extends SvelteComponentTyped<GiFuelTankProps, GiFuelTankEvents, GiFuelTankSlots> {
}
export {};
