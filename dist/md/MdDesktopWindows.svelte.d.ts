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
export type MdDesktopWindowsProps = typeof __propDef.props;
export type MdDesktopWindowsEvents = typeof __propDef.events;
export type MdDesktopWindowsSlots = typeof __propDef.slots;
export default class MdDesktopWindows extends SvelteComponentTyped<MdDesktopWindowsProps, MdDesktopWindowsEvents, MdDesktopWindowsSlots> {
}
export {};
