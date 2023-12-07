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
export type FaCoffeeProps = typeof __propDef.props;
export type FaCoffeeEvents = typeof __propDef.events;
export type FaCoffeeSlots = typeof __propDef.slots;
export default class FaCoffee extends SvelteComponentTyped<FaCoffeeProps, FaCoffeeEvents, FaCoffeeSlots> {
}
export {};
