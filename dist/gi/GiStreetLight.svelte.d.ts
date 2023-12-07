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
export type GiStreetLightProps = typeof __propDef.props;
export type GiStreetLightEvents = typeof __propDef.events;
export type GiStreetLightSlots = typeof __propDef.slots;
export default class GiStreetLight extends SvelteComponentTyped<GiStreetLightProps, GiStreetLightEvents, GiStreetLightSlots> {
}
export {};
