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
export type GiPoisonBottleProps = typeof __propDef.props;
export type GiPoisonBottleEvents = typeof __propDef.events;
export type GiPoisonBottleSlots = typeof __propDef.slots;
export default class GiPoisonBottle extends SvelteComponentTyped<GiPoisonBottleProps, GiPoisonBottleEvents, GiPoisonBottleSlots> {
}
export {};
