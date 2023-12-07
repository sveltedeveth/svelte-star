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
export type GiPirateHatProps = typeof __propDef.props;
export type GiPirateHatEvents = typeof __propDef.events;
export type GiPirateHatSlots = typeof __propDef.slots;
export default class GiPirateHat extends SvelteComponentTyped<GiPirateHatProps, GiPirateHatEvents, GiPirateHatSlots> {
}
export {};
