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
export type FaMeetupProps = typeof __propDef.props;
export type FaMeetupEvents = typeof __propDef.events;
export type FaMeetupSlots = typeof __propDef.slots;
export default class FaMeetup extends SvelteComponentTyped<FaMeetupProps, FaMeetupEvents, FaMeetupSlots> {
}
export {};
