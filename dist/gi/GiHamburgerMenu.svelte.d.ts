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
export type GiHamburgerMenuProps = typeof __propDef.props;
export type GiHamburgerMenuEvents = typeof __propDef.events;
export type GiHamburgerMenuSlots = typeof __propDef.slots;
export default class GiHamburgerMenu extends SvelteComponentTyped<GiHamburgerMenuProps, GiHamburgerMenuEvents, GiHamburgerMenuSlots> {
}
export {};
