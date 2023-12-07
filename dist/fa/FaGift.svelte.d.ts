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
export type FaGiftProps = typeof __propDef.props;
export type FaGiftEvents = typeof __propDef.events;
export type FaGiftSlots = typeof __propDef.slots;
export default class FaGift extends SvelteComponentTyped<FaGiftProps, FaGiftEvents, FaGiftSlots> {
}
export {};
