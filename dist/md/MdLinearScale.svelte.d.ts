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
export type MdLinearScaleProps = typeof __propDef.props;
export type MdLinearScaleEvents = typeof __propDef.events;
export type MdLinearScaleSlots = typeof __propDef.slots;
export default class MdLinearScale extends SvelteComponentTyped<MdLinearScaleProps, MdLinearScaleEvents, MdLinearScaleSlots> {
}
export {};
