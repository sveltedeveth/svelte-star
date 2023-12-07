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
export type FaCampgroundProps = typeof __propDef.props;
export type FaCampgroundEvents = typeof __propDef.events;
export type FaCampgroundSlots = typeof __propDef.slots;
export default class FaCampground extends SvelteComponentTyped<FaCampgroundProps, FaCampgroundEvents, FaCampgroundSlots> {
}
export {};
