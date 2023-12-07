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
export type FaRegisteredProps = typeof __propDef.props;
export type FaRegisteredEvents = typeof __propDef.events;
export type FaRegisteredSlots = typeof __propDef.slots;
export default class FaRegistered extends SvelteComponentTyped<FaRegisteredProps, FaRegisteredEvents, FaRegisteredSlots> {
}
export {};
