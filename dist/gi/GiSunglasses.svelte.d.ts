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
export type GiSunglassesProps = typeof __propDef.props;
export type GiSunglassesEvents = typeof __propDef.events;
export type GiSunglassesSlots = typeof __propDef.slots;
export default class GiSunglasses extends SvelteComponentTyped<GiSunglassesProps, GiSunglassesEvents, GiSunglassesSlots> {
}
export {};
