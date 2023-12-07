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
export type FaDesktopProps = typeof __propDef.props;
export type FaDesktopEvents = typeof __propDef.events;
export type FaDesktopSlots = typeof __propDef.slots;
export default class FaDesktop extends SvelteComponentTyped<FaDesktopProps, FaDesktopEvents, FaDesktopSlots> {
}
export {};
