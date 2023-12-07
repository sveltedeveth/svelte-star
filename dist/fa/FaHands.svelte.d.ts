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
export type FaHandsProps = typeof __propDef.props;
export type FaHandsEvents = typeof __propDef.events;
export type FaHandsSlots = typeof __propDef.slots;
export default class FaHands extends SvelteComponentTyped<FaHandsProps, FaHandsEvents, FaHandsSlots> {
}
export {};
