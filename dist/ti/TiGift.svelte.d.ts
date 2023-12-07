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
export type TiGiftProps = typeof __propDef.props;
export type TiGiftEvents = typeof __propDef.events;
export type TiGiftSlots = typeof __propDef.slots;
export default class TiGift extends SvelteComponentTyped<TiGiftProps, TiGiftEvents, TiGiftSlots> {
}
export {};
