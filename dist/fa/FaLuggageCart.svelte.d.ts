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
export type FaLuggageCartProps = typeof __propDef.props;
export type FaLuggageCartEvents = typeof __propDef.events;
export type FaLuggageCartSlots = typeof __propDef.slots;
export default class FaLuggageCart extends SvelteComponentTyped<FaLuggageCartProps, FaLuggageCartEvents, FaLuggageCartSlots> {
}
export {};
