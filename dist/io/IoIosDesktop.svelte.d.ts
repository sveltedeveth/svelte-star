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
export type IoIosDesktopProps = typeof __propDef.props;
export type IoIosDesktopEvents = typeof __propDef.events;
export type IoIosDesktopSlots = typeof __propDef.slots;
export default class IoIosDesktop extends SvelteComponentTyped<IoIosDesktopProps, IoIosDesktopEvents, IoIosDesktopSlots> {
}
export {};
