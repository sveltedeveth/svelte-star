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
export type FaFistRaisedProps = typeof __propDef.props;
export type FaFistRaisedEvents = typeof __propDef.events;
export type FaFistRaisedSlots = typeof __propDef.slots;
export default class FaFistRaised extends SvelteComponentTyped<FaFistRaisedProps, FaFistRaisedEvents, FaFistRaisedSlots> {
}
export {};
