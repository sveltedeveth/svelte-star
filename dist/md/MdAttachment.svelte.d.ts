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
export type MdAttachmentProps = typeof __propDef.props;
export type MdAttachmentEvents = typeof __propDef.events;
export type MdAttachmentSlots = typeof __propDef.slots;
export default class MdAttachment extends SvelteComponentTyped<MdAttachmentProps, MdAttachmentEvents, MdAttachmentSlots> {
}
export {};
