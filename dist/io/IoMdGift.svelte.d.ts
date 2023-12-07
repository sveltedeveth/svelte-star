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
export type IoMdGiftProps = typeof __propDef.props;
export type IoMdGiftEvents = typeof __propDef.events;
export type IoMdGiftSlots = typeof __propDef.slots;
export default class IoMdGift extends SvelteComponentTyped<IoMdGiftProps, IoMdGiftEvents, IoMdGiftSlots> {
}
export {};
