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
export type GiMechaHeadProps = typeof __propDef.props;
export type GiMechaHeadEvents = typeof __propDef.events;
export type GiMechaHeadSlots = typeof __propDef.slots;
export default class GiMechaHead extends SvelteComponentTyped<GiMechaHeadProps, GiMechaHeadEvents, GiMechaHeadSlots> {
}
export {};
