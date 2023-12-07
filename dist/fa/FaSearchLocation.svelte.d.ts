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
export type FaSearchLocationProps = typeof __propDef.props;
export type FaSearchLocationEvents = typeof __propDef.events;
export type FaSearchLocationSlots = typeof __propDef.slots;
export default class FaSearchLocation extends SvelteComponentTyped<FaSearchLocationProps, FaSearchLocationEvents, FaSearchLocationSlots> {
}
export {};
