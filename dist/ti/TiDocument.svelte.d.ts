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
export type TiDocumentProps = typeof __propDef.props;
export type TiDocumentEvents = typeof __propDef.events;
export type TiDocumentSlots = typeof __propDef.slots;
export default class TiDocument extends SvelteComponentTyped<TiDocumentProps, TiDocumentEvents, TiDocumentSlots> {
}
export {};
