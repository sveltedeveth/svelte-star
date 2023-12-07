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
export type TiAttachmentProps = typeof __propDef.props;
export type TiAttachmentEvents = typeof __propDef.events;
export type TiAttachmentSlots = typeof __propDef.slots;
export default class TiAttachment extends SvelteComponentTyped<TiAttachmentProps, TiAttachmentEvents, TiAttachmentSlots> {
}
export {};
