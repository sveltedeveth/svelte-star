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
export type TiDocumentTextProps = typeof __propDef.props;
export type TiDocumentTextEvents = typeof __propDef.events;
export type TiDocumentTextSlots = typeof __propDef.slots;
export default class TiDocumentText extends SvelteComponentTyped<TiDocumentTextProps, TiDocumentTextEvents, TiDocumentTextSlots> {
}
export {};
