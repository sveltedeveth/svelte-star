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
export type MdWrapTextProps = typeof __propDef.props;
export type MdWrapTextEvents = typeof __propDef.events;
export type MdWrapTextSlots = typeof __propDef.slots;
export default class MdWrapText extends SvelteComponentTyped<MdWrapTextProps, MdWrapTextEvents, MdWrapTextSlots> {
}
export {};
