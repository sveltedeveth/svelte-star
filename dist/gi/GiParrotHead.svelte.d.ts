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
export type GiParrotHeadProps = typeof __propDef.props;
export type GiParrotHeadEvents = typeof __propDef.events;
export type GiParrotHeadSlots = typeof __propDef.slots;
export default class GiParrotHead extends SvelteComponentTyped<GiParrotHeadProps, GiParrotHeadEvents, GiParrotHeadSlots> {
}
export {};
