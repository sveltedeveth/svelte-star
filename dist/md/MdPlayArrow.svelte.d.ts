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
export type MdPlayArrowProps = typeof __propDef.props;
export type MdPlayArrowEvents = typeof __propDef.events;
export type MdPlayArrowSlots = typeof __propDef.slots;
export default class MdPlayArrow extends SvelteComponentTyped<MdPlayArrowProps, MdPlayArrowEvents, MdPlayArrowSlots> {
}
export {};
