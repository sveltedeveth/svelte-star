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
export type FaQqProps = typeof __propDef.props;
export type FaQqEvents = typeof __propDef.events;
export type FaQqSlots = typeof __propDef.slots;
export default class FaQq extends SvelteComponentTyped<FaQqProps, FaQqEvents, FaQqSlots> {
}
export {};
