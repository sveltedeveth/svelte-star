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
export type MdMenuProps = typeof __propDef.props;
export type MdMenuEvents = typeof __propDef.events;
export type MdMenuSlots = typeof __propDef.slots;
export default class MdMenu extends SvelteComponentTyped<MdMenuProps, MdMenuEvents, MdMenuSlots> {
}
export {};
