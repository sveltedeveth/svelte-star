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
export type FaCheeseProps = typeof __propDef.props;
export type FaCheeseEvents = typeof __propDef.events;
export type FaCheeseSlots = typeof __propDef.slots;
export default class FaCheese extends SvelteComponentTyped<FaCheeseProps, FaCheeseEvents, FaCheeseSlots> {
}
export {};
