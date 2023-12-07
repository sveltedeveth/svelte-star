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
export type GiHeartBottleProps = typeof __propDef.props;
export type GiHeartBottleEvents = typeof __propDef.events;
export type GiHeartBottleSlots = typeof __propDef.slots;
export default class GiHeartBottle extends SvelteComponentTyped<GiHeartBottleProps, GiHeartBottleEvents, GiHeartBottleSlots> {
}
export {};
