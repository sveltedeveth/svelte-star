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
export type GiCassowaryHeadProps = typeof __propDef.props;
export type GiCassowaryHeadEvents = typeof __propDef.events;
export type GiCassowaryHeadSlots = typeof __propDef.slots;
export default class GiCassowaryHead extends SvelteComponentTyped<GiCassowaryHeadProps, GiCassowaryHeadEvents, GiCassowaryHeadSlots> {
}
export {};
