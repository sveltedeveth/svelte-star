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
export type GiNailedHeadProps = typeof __propDef.props;
export type GiNailedHeadEvents = typeof __propDef.events;
export type GiNailedHeadSlots = typeof __propDef.slots;
export default class GiNailedHead extends SvelteComponentTyped<GiNailedHeadProps, GiNailedHeadEvents, GiNailedHeadSlots> {
}
export {};
