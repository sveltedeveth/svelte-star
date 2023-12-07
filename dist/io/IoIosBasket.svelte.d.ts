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
export type IoIosBasketProps = typeof __propDef.props;
export type IoIosBasketEvents = typeof __propDef.events;
export type IoIosBasketSlots = typeof __propDef.slots;
export default class IoIosBasket extends SvelteComponentTyped<IoIosBasketProps, IoIosBasketEvents, IoIosBasketSlots> {
}
export {};
