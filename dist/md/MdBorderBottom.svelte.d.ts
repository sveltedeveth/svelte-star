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
export type MdBorderBottomProps = typeof __propDef.props;
export type MdBorderBottomEvents = typeof __propDef.events;
export type MdBorderBottomSlots = typeof __propDef.slots;
export default class MdBorderBottom extends SvelteComponentTyped<MdBorderBottomProps, MdBorderBottomEvents, MdBorderBottomSlots> {
}
export {};
