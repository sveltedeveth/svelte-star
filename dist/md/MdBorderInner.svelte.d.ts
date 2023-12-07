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
export type MdBorderInnerProps = typeof __propDef.props;
export type MdBorderInnerEvents = typeof __propDef.events;
export type MdBorderInnerSlots = typeof __propDef.slots;
export default class MdBorderInner extends SvelteComponentTyped<MdBorderInnerProps, MdBorderInnerEvents, MdBorderInnerSlots> {
}
export {};
