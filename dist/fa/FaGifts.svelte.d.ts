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
export type FaGiftsProps = typeof __propDef.props;
export type FaGiftsEvents = typeof __propDef.events;
export type FaGiftsSlots = typeof __propDef.slots;
export default class FaGifts extends SvelteComponentTyped<FaGiftsProps, FaGiftsEvents, FaGiftsSlots> {
}
export {};
