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
export type IoMdDesktopProps = typeof __propDef.props;
export type IoMdDesktopEvents = typeof __propDef.events;
export type IoMdDesktopSlots = typeof __propDef.slots;
export default class IoMdDesktop extends SvelteComponentTyped<IoMdDesktopProps, IoMdDesktopEvents, IoMdDesktopSlots> {
}
export {};
