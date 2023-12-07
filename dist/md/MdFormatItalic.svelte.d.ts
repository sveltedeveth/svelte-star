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
export type MdFormatItalicProps = typeof __propDef.props;
export type MdFormatItalicEvents = typeof __propDef.events;
export type MdFormatItalicSlots = typeof __propDef.slots;
export default class MdFormatItalic extends SvelteComponentTyped<MdFormatItalicProps, MdFormatItalicEvents, MdFormatItalicSlots> {
}
export {};
