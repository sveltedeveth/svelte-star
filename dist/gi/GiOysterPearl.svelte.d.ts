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
export type GiOysterPearlProps = typeof __propDef.props;
export type GiOysterPearlEvents = typeof __propDef.events;
export type GiOysterPearlSlots = typeof __propDef.slots;
export default class GiOysterPearl extends SvelteComponentTyped<GiOysterPearlProps, GiOysterPearlEvents, GiOysterPearlSlots> {
}
export {};
