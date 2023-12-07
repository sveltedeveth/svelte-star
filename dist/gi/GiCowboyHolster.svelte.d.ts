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
export type GiCowboyHolsterProps = typeof __propDef.props;
export type GiCowboyHolsterEvents = typeof __propDef.events;
export type GiCowboyHolsterSlots = typeof __propDef.slots;
export default class GiCowboyHolster extends SvelteComponentTyped<GiCowboyHolsterProps, GiCowboyHolsterEvents, GiCowboyHolsterSlots> {
}
export {};
