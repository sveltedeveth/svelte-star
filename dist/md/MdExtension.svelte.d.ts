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
export type MdExtensionProps = typeof __propDef.props;
export type MdExtensionEvents = typeof __propDef.events;
export type MdExtensionSlots = typeof __propDef.slots;
export default class MdExtension extends SvelteComponentTyped<MdExtensionProps, MdExtensionEvents, MdExtensionSlots> {
}
export {};
