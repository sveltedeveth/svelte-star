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
export type GiTritonHeadProps = typeof __propDef.props;
export type GiTritonHeadEvents = typeof __propDef.events;
export type GiTritonHeadSlots = typeof __propDef.slots;
export default class GiTritonHead extends SvelteComponentTyped<GiTritonHeadProps, GiTritonHeadEvents, GiTritonHeadSlots> {
}
export {};
