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
export type FaGripVerticalProps = typeof __propDef.props;
export type FaGripVerticalEvents = typeof __propDef.events;
export type FaGripVerticalSlots = typeof __propDef.slots;
export default class FaGripVertical extends SvelteComponentTyped<FaGripVerticalProps, FaGripVerticalEvents, FaGripVerticalSlots> {
}
export {};
