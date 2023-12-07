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
export type GiLynxHeadProps = typeof __propDef.props;
export type GiLynxHeadEvents = typeof __propDef.events;
export type GiLynxHeadSlots = typeof __propDef.slots;
export default class GiLynxHead extends SvelteComponentTyped<GiLynxHeadProps, GiLynxHeadEvents, GiLynxHeadSlots> {
}
export {};
