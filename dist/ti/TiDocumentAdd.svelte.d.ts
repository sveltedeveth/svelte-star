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
export type TiDocumentAddProps = typeof __propDef.props;
export type TiDocumentAddEvents = typeof __propDef.events;
export type TiDocumentAddSlots = typeof __propDef.slots;
export default class TiDocumentAdd extends SvelteComponentTyped<TiDocumentAddProps, TiDocumentAddEvents, TiDocumentAddSlots> {
}
export {};
