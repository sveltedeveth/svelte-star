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
export type GoGiftProps = typeof __propDef.props;
export type GoGiftEvents = typeof __propDef.events;
export type GoGiftSlots = typeof __propDef.slots;
export default class GoGift extends SvelteComponentTyped<GoGiftProps, GoGiftEvents, GoGiftSlots> {
}
export {};
