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
export type MdFormatListNumberedProps = typeof __propDef.props;
export type MdFormatListNumberedEvents = typeof __propDef.events;
export type MdFormatListNumberedSlots = typeof __propDef.slots;
export default class MdFormatListNumbered extends SvelteComponentTyped<MdFormatListNumberedProps, MdFormatListNumberedEvents, MdFormatListNumberedSlots> {
}
export {};
