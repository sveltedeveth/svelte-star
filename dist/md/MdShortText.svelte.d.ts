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
export type MdShortTextProps = typeof __propDef.props;
export type MdShortTextEvents = typeof __propDef.events;
export type MdShortTextSlots = typeof __propDef.slots;
export default class MdShortText extends SvelteComponentTyped<MdShortTextProps, MdShortTextEvents, MdShortTextSlots> {
}
export {};
