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
export type GiFishingSpoonProps = typeof __propDef.props;
export type GiFishingSpoonEvents = typeof __propDef.events;
export type GiFishingSpoonSlots = typeof __propDef.slots;
export default class GiFishingSpoon extends SvelteComponentTyped<GiFishingSpoonProps, GiFishingSpoonEvents, GiFishingSpoonSlots> {
}
export {};
