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
export type MdTextFormatProps = typeof __propDef.props;
export type MdTextFormatEvents = typeof __propDef.events;
export type MdTextFormatSlots = typeof __propDef.slots;
export default class MdTextFormat extends SvelteComponentTyped<MdTextFormatProps, MdTextFormatEvents, MdTextFormatSlots> {
}
export {};
