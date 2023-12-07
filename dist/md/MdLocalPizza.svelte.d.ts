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
export type MdLocalPizzaProps = typeof __propDef.props;
export type MdLocalPizzaEvents = typeof __propDef.events;
export type MdLocalPizzaSlots = typeof __propDef.slots;
export default class MdLocalPizza extends SvelteComponentTyped<MdLocalPizzaProps, MdLocalPizzaEvents, MdLocalPizzaSlots> {
}
export {};
