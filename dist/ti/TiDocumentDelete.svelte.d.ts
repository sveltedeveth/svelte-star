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
export type TiDocumentDeleteProps = typeof __propDef.props;
export type TiDocumentDeleteEvents = typeof __propDef.events;
export type TiDocumentDeleteSlots = typeof __propDef.slots;
export default class TiDocumentDelete extends SvelteComponentTyped<TiDocumentDeleteProps, TiDocumentDeleteEvents, TiDocumentDeleteSlots> {
}
export {};
