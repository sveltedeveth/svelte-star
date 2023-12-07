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
export type MdOpacityProps = typeof __propDef.props;
export type MdOpacityEvents = typeof __propDef.events;
export type MdOpacitySlots = typeof __propDef.slots;
export default class MdOpacity extends SvelteComponentTyped<MdOpacityProps, MdOpacityEvents, MdOpacitySlots> {
}
export {};
