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
export type GiCamelHeadProps = typeof __propDef.props;
export type GiCamelHeadEvents = typeof __propDef.events;
export type GiCamelHeadSlots = typeof __propDef.slots;
export default class GiCamelHead extends SvelteComponentTyped<GiCamelHeadProps, GiCamelHeadEvents, GiCamelHeadSlots> {
}
export {};
