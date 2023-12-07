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
export type GiWrappedSweetProps = typeof __propDef.props;
export type GiWrappedSweetEvents = typeof __propDef.events;
export type GiWrappedSweetSlots = typeof __propDef.slots;
export default class GiWrappedSweet extends SvelteComponentTyped<GiWrappedSweetProps, GiWrappedSweetEvents, GiWrappedSweetSlots> {
}
export {};
