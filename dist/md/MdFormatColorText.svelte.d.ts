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
export type MdFormatColorTextProps = typeof __propDef.props;
export type MdFormatColorTextEvents = typeof __propDef.events;
export type MdFormatColorTextSlots = typeof __propDef.slots;
export default class MdFormatColorText extends SvelteComponentTyped<MdFormatColorTextProps, MdFormatColorTextEvents, MdFormatColorTextSlots> {
}
export {};
