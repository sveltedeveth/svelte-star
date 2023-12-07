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
export type GiFruitBowlProps = typeof __propDef.props;
export type GiFruitBowlEvents = typeof __propDef.events;
export type GiFruitBowlSlots = typeof __propDef.slots;
export default class GiFruitBowl extends SvelteComponentTyped<GiFruitBowlProps, GiFruitBowlEvents, GiFruitBowlSlots> {
}
export {};
