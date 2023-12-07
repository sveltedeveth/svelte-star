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
export type GiLoggingProps = typeof __propDef.props;
export type GiLoggingEvents = typeof __propDef.events;
export type GiLoggingSlots = typeof __propDef.slots;
export default class GiLogging extends SvelteComponentTyped<GiLoggingProps, GiLoggingEvents, GiLoggingSlots> {
}
export {};
