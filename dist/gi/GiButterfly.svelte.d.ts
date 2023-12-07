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
export type GiButterflyProps = typeof __propDef.props;
export type GiButterflyEvents = typeof __propDef.events;
export type GiButterflySlots = typeof __propDef.slots;
export default class GiButterfly extends SvelteComponentTyped<GiButterflyProps, GiButterflyEvents, GiButterflySlots> {
}
export {};
