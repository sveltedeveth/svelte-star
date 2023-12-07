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
export type GiBoatFishingProps = typeof __propDef.props;
export type GiBoatFishingEvents = typeof __propDef.events;
export type GiBoatFishingSlots = typeof __propDef.slots;
export default class GiBoatFishing extends SvelteComponentTyped<GiBoatFishingProps, GiBoatFishingEvents, GiBoatFishingSlots> {
}
export {};
