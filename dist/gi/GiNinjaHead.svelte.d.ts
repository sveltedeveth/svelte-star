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
export type GiNinjaHeadProps = typeof __propDef.props;
export type GiNinjaHeadEvents = typeof __propDef.events;
export type GiNinjaHeadSlots = typeof __propDef.slots;
export default class GiNinjaHead extends SvelteComponentTyped<GiNinjaHeadProps, GiNinjaHeadEvents, GiNinjaHeadSlots> {
}
export {};
