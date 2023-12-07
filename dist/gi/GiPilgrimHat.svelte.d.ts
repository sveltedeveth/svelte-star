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
export type GiPilgrimHatProps = typeof __propDef.props;
export type GiPilgrimHatEvents = typeof __propDef.events;
export type GiPilgrimHatSlots = typeof __propDef.slots;
export default class GiPilgrimHat extends SvelteComponentTyped<GiPilgrimHatProps, GiPilgrimHatEvents, GiPilgrimHatSlots> {
}
export {};
