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
export type FaBlindProps = typeof __propDef.props;
export type FaBlindEvents = typeof __propDef.events;
export type FaBlindSlots = typeof __propDef.slots;
export default class FaBlind extends SvelteComponentTyped<FaBlindProps, FaBlindEvents, FaBlindSlots> {
}
export {};
