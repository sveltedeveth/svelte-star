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
export type MdDesktopMacProps = typeof __propDef.props;
export type MdDesktopMacEvents = typeof __propDef.events;
export type MdDesktopMacSlots = typeof __propDef.slots;
export default class MdDesktopMac extends SvelteComponentTyped<MdDesktopMacProps, MdDesktopMacEvents, MdDesktopMacSlots> {
}
export {};
