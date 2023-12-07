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
export type FaScribdProps = typeof __propDef.props;
export type FaScribdEvents = typeof __propDef.events;
export type FaScribdSlots = typeof __propDef.slots;
export default class FaScribd extends SvelteComponentTyped<FaScribdProps, FaScribdEvents, FaScribdSlots> {
}
export {};
