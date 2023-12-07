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
export type MdVisibilityProps = typeof __propDef.props;
export type MdVisibilityEvents = typeof __propDef.events;
export type MdVisibilitySlots = typeof __propDef.slots;
export default class MdVisibility extends SvelteComponentTyped<MdVisibilityProps, MdVisibilityEvents, MdVisibilitySlots> {
}
export {};
