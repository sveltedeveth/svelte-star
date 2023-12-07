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
export type GiStagHeadProps = typeof __propDef.props;
export type GiStagHeadEvents = typeof __propDef.events;
export type GiStagHeadSlots = typeof __propDef.slots;
export default class GiStagHead extends SvelteComponentTyped<GiStagHeadProps, GiStagHeadEvents, GiStagHeadSlots> {
}
export {};
