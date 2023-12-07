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
export type MdAccessibilityProps = typeof __propDef.props;
export type MdAccessibilityEvents = typeof __propDef.events;
export type MdAccessibilitySlots = typeof __propDef.slots;
export default class MdAccessibility extends SvelteComponentTyped<MdAccessibilityProps, MdAccessibilityEvents, MdAccessibilitySlots> {
}
export {};
