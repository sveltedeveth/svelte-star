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
export type FaHamburgerProps = typeof __propDef.props;
export type FaHamburgerEvents = typeof __propDef.events;
export type FaHamburgerSlots = typeof __propDef.slots;
export default class FaHamburger extends SvelteComponentTyped<FaHamburgerProps, FaHamburgerEvents, FaHamburgerSlots> {
}
export {};
