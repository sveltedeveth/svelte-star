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
export type GiEggClutchProps = typeof __propDef.props;
export type GiEggClutchEvents = typeof __propDef.events;
export type GiEggClutchSlots = typeof __propDef.slots;
export default class GiEggClutch extends SvelteComponentTyped<GiEggClutchProps, GiEggClutchEvents, GiEggClutchSlots> {
}
export {};
