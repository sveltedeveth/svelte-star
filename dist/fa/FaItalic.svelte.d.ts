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
export type FaItalicProps = typeof __propDef.props;
export type FaItalicEvents = typeof __propDef.events;
export type FaItalicSlots = typeof __propDef.slots;
export default class FaItalic extends SvelteComponentTyped<FaItalicProps, FaItalicEvents, FaItalicSlots> {
}
export {};
