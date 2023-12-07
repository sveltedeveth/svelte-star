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
export type IoMdMenuProps = typeof __propDef.props;
export type IoMdMenuEvents = typeof __propDef.events;
export type IoMdMenuSlots = typeof __propDef.slots;
export default class IoMdMenu extends SvelteComponentTyped<IoMdMenuProps, IoMdMenuEvents, IoMdMenuSlots> {
}
export {};
