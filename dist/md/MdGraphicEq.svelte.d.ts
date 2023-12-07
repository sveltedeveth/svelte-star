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
export type MdGraphicEqProps = typeof __propDef.props;
export type MdGraphicEqEvents = typeof __propDef.events;
export type MdGraphicEqSlots = typeof __propDef.slots;
export default class MdGraphicEq extends SvelteComponentTyped<MdGraphicEqProps, MdGraphicEqEvents, MdGraphicEqSlots> {
}
export {};
