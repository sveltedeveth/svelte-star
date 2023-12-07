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
export type MdFormatUnderlinedProps = typeof __propDef.props;
export type MdFormatUnderlinedEvents = typeof __propDef.events;
export type MdFormatUnderlinedSlots = typeof __propDef.slots;
export default class MdFormatUnderlined extends SvelteComponentTyped<MdFormatUnderlinedProps, MdFormatUnderlinedEvents, MdFormatUnderlinedSlots> {
}
export {};
