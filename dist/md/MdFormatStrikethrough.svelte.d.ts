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
export type MdFormatStrikethroughProps = typeof __propDef.props;
export type MdFormatStrikethroughEvents = typeof __propDef.events;
export type MdFormatStrikethroughSlots = typeof __propDef.slots;
export default class MdFormatStrikethrough extends SvelteComponentTyped<MdFormatStrikethroughProps, MdFormatStrikethroughEvents, MdFormatStrikethroughSlots> {
}
export {};
