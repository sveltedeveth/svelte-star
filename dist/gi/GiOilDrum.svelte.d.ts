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
export type GiOilDrumProps = typeof __propDef.props;
export type GiOilDrumEvents = typeof __propDef.events;
export type GiOilDrumSlots = typeof __propDef.slots;
export default class GiOilDrum extends SvelteComponentTyped<GiOilDrumProps, GiOilDrumEvents, GiOilDrumSlots> {
}
export {};
