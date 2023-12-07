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
export type GoCreditCardProps = typeof __propDef.props;
export type GoCreditCardEvents = typeof __propDef.events;
export type GoCreditCardSlots = typeof __propDef.slots;
export default class GoCreditCard extends SvelteComponentTyped<GoCreditCardProps, GoCreditCardEvents, GoCreditCardSlots> {
}
export {};
