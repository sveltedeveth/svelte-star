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
export type IoMdBasketProps = typeof __propDef.props;
export type IoMdBasketEvents = typeof __propDef.events;
export type IoMdBasketSlots = typeof __propDef.slots;
export default class IoMdBasket extends SvelteComponentTyped<IoMdBasketProps, IoMdBasketEvents, IoMdBasketSlots> {
}
export {};
