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
export type FaFlagCheckeredProps = typeof __propDef.props;
export type FaFlagCheckeredEvents = typeof __propDef.events;
export type FaFlagCheckeredSlots = typeof __propDef.slots;
export default class FaFlagCheckered extends SvelteComponentTyped<FaFlagCheckeredProps, FaFlagCheckeredEvents, FaFlagCheckeredSlots> {
}
export {};
