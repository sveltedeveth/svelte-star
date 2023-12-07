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
export type IoMdDocumentProps = typeof __propDef.props;
export type IoMdDocumentEvents = typeof __propDef.events;
export type IoMdDocumentSlots = typeof __propDef.slots;
export default class IoMdDocument extends SvelteComponentTyped<IoMdDocumentProps, IoMdDocumentEvents, IoMdDocumentSlots> {
}
export {};
