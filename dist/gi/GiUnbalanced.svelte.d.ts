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
export type GiUnbalancedProps = typeof __propDef.props;
export type GiUnbalancedEvents = typeof __propDef.events;
export type GiUnbalancedSlots = typeof __propDef.slots;
export default class GiUnbalanced extends SvelteComponentTyped<GiUnbalancedProps, GiUnbalancedEvents, GiUnbalancedSlots> {
}
export {};
