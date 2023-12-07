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
export type MdBorderOuterProps = typeof __propDef.props;
export type MdBorderOuterEvents = typeof __propDef.events;
export type MdBorderOuterSlots = typeof __propDef.slots;
export default class MdBorderOuter extends SvelteComponentTyped<MdBorderOuterProps, MdBorderOuterEvents, MdBorderOuterSlots> {
}
export {};
