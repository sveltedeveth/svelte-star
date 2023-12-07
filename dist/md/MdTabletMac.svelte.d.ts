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
export type MdTabletMacProps = typeof __propDef.props;
export type MdTabletMacEvents = typeof __propDef.events;
export type MdTabletMacSlots = typeof __propDef.slots;
export default class MdTabletMac extends SvelteComponentTyped<MdTabletMacProps, MdTabletMacEvents, MdTabletMacSlots> {
}
export {};
