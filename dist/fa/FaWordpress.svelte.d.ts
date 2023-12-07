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
export type FaWordpressProps = typeof __propDef.props;
export type FaWordpressEvents = typeof __propDef.events;
export type FaWordpressSlots = typeof __propDef.slots;
export default class FaWordpress extends SvelteComponentTyped<FaWordpressProps, FaWordpressEvents, FaWordpressSlots> {
}
export {};
