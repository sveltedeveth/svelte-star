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
export type IoIosMenuProps = typeof __propDef.props;
export type IoIosMenuEvents = typeof __propDef.events;
export type IoIosMenuSlots = typeof __propDef.slots;
export default class IoIosMenu extends SvelteComponentTyped<IoIosMenuProps, IoIosMenuEvents, IoIosMenuSlots> {
}
export {};
