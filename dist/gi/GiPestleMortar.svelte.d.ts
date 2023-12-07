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
export type GiPestleMortarProps = typeof __propDef.props;
export type GiPestleMortarEvents = typeof __propDef.events;
export type GiPestleMortarSlots = typeof __propDef.slots;
export default class GiPestleMortar extends SvelteComponentTyped<GiPestleMortarProps, GiPestleMortarEvents, GiPestleMortarSlots> {
}
export {};
