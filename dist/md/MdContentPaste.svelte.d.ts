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
export type MdContentPasteProps = typeof __propDef.props;
export type MdContentPasteEvents = typeof __propDef.events;
export type MdContentPasteSlots = typeof __propDef.slots;
export default class MdContentPaste extends SvelteComponentTyped<MdContentPasteProps, MdContentPasteEvents, MdContentPasteSlots> {
}
export {};
