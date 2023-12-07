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
export type MdStrikethroughSProps = typeof __propDef.props;
export type MdStrikethroughSEvents = typeof __propDef.events;
export type MdStrikethroughSSlots = typeof __propDef.slots;
export default class MdStrikethroughS extends SvelteComponentTyped<MdStrikethroughSProps, MdStrikethroughSEvents, MdStrikethroughSSlots> {
}
export {};
