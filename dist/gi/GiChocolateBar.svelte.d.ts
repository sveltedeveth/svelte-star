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
export type GiChocolateBarProps = typeof __propDef.props;
export type GiChocolateBarEvents = typeof __propDef.events;
export type GiChocolateBarSlots = typeof __propDef.slots;
export default class GiChocolateBar extends SvelteComponentTyped<GiChocolateBarProps, GiChocolateBarEvents, GiChocolateBarSlots> {
}
export {};
