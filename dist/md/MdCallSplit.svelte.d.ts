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
export type MdCallSplitProps = typeof __propDef.props;
export type MdCallSplitEvents = typeof __propDef.events;
export type MdCallSplitSlots = typeof __propDef.slots;
export default class MdCallSplit extends SvelteComponentTyped<MdCallSplitProps, MdCallSplitEvents, MdCallSplitSlots> {
}
export {};
