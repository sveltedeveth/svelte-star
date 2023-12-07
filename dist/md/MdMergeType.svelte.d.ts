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
export type MdMergeTypeProps = typeof __propDef.props;
export type MdMergeTypeEvents = typeof __propDef.events;
export type MdMergeTypeSlots = typeof __propDef.slots;
export default class MdMergeType extends SvelteComponentTyped<MdMergeTypeProps, MdMergeTypeEvents, MdMergeTypeSlots> {
}
export {};
