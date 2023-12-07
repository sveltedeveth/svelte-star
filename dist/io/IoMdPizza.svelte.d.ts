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
export type IoMdPizzaProps = typeof __propDef.props;
export type IoMdPizzaEvents = typeof __propDef.events;
export type IoMdPizzaSlots = typeof __propDef.slots;
export default class IoMdPizza extends SvelteComponentTyped<IoMdPizzaProps, IoMdPizzaEvents, IoMdPizzaSlots> {
}
export {};
