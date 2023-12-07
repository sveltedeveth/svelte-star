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
export type FaWordpressSimpleProps = typeof __propDef.props;
export type FaWordpressSimpleEvents = typeof __propDef.events;
export type FaWordpressSimpleSlots = typeof __propDef.slots;
export default class FaWordpressSimple extends SvelteComponentTyped<FaWordpressSimpleProps, FaWordpressSimpleEvents, FaWordpressSimpleSlots> {
}
export {};
