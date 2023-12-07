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
export type FaBusinessTimeProps = typeof __propDef.props;
export type FaBusinessTimeEvents = typeof __propDef.events;
export type FaBusinessTimeSlots = typeof __propDef.slots;
export default class FaBusinessTime extends SvelteComponentTyped<FaBusinessTimeProps, FaBusinessTimeEvents, FaBusinessTimeSlots> {
}
export {};
