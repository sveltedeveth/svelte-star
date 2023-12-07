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
export type GiHamburgerProps = typeof __propDef.props;
export type GiHamburgerEvents = typeof __propDef.events;
export type GiHamburgerSlots = typeof __propDef.slots;
export default class GiHamburger extends SvelteComponentTyped<GiHamburgerProps, GiHamburgerEvents, GiHamburgerSlots> {
}
export {};
