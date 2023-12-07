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
export type FaRegRegisteredProps = typeof __propDef.props;
export type FaRegRegisteredEvents = typeof __propDef.events;
export type FaRegRegisteredSlots = typeof __propDef.slots;
export default class FaRegRegistered extends SvelteComponentTyped<FaRegRegisteredProps, FaRegRegisteredEvents, FaRegRegisteredSlots> {
}
export {};
