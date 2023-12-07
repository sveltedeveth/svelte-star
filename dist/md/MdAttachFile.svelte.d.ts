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
export type MdAttachFileProps = typeof __propDef.props;
export type MdAttachFileEvents = typeof __propDef.events;
export type MdAttachFileSlots = typeof __propDef.slots;
export default class MdAttachFile extends SvelteComponentTyped<MdAttachFileProps, MdAttachFileEvents, MdAttachFileSlots> {
}
export {};
