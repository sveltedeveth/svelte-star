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
export type GiStripedSunProps = typeof __propDef.props;
export type GiStripedSunEvents = typeof __propDef.events;
export type GiStripedSunSlots = typeof __propDef.slots;
export default class GiStripedSun extends SvelteComponentTyped<GiStripedSunProps, GiStripedSunEvents, GiStripedSunSlots> {
}
export {};
