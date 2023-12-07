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
export type MdBorderRightProps = typeof __propDef.props;
export type MdBorderRightEvents = typeof __propDef.events;
export type MdBorderRightSlots = typeof __propDef.slots;
export default class MdBorderRight extends SvelteComponentTyped<MdBorderRightProps, MdBorderRightEvents, MdBorderRightSlots> {
}
export {};
