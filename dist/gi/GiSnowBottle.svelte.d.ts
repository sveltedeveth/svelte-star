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
export type GiSnowBottleProps = typeof __propDef.props;
export type GiSnowBottleEvents = typeof __propDef.events;
export type GiSnowBottleSlots = typeof __propDef.slots;
export default class GiSnowBottle extends SvelteComponentTyped<GiSnowBottleProps, GiSnowBottleEvents, GiSnowBottleSlots> {
}
export {};
