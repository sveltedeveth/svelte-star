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
export type GiSlingProps = typeof __propDef.props;
export type GiSlingEvents = typeof __propDef.events;
export type GiSlingSlots = typeof __propDef.slots;
export default class GiSling extends SvelteComponentTyped<GiSlingProps, GiSlingEvents, GiSlingSlots> {
}
export {};
