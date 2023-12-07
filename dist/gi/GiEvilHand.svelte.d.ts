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
export type GiEvilHandProps = typeof __propDef.props;
export type GiEvilHandEvents = typeof __propDef.events;
export type GiEvilHandSlots = typeof __propDef.slots;
export default class GiEvilHand extends SvelteComponentTyped<GiEvilHandProps, GiEvilHandEvents, GiEvilHandSlots> {
}
export {};
