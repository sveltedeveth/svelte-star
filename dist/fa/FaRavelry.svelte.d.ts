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
export type FaRavelryProps = typeof __propDef.props;
export type FaRavelryEvents = typeof __propDef.events;
export type FaRavelrySlots = typeof __propDef.slots;
export default class FaRavelry extends SvelteComponentTyped<FaRavelryProps, FaRavelryEvents, FaRavelrySlots> {
}
export {};
