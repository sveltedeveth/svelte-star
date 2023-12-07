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
export type IoMdTextProps = typeof __propDef.props;
export type IoMdTextEvents = typeof __propDef.events;
export type IoMdTextSlots = typeof __propDef.slots;
export default class IoMdText extends SvelteComponentTyped<IoMdTextProps, IoMdTextEvents, IoMdTextSlots> {
}
export {};
