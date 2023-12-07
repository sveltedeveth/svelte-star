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
export type GiElephantHeadProps = typeof __propDef.props;
export type GiElephantHeadEvents = typeof __propDef.events;
export type GiElephantHeadSlots = typeof __propDef.slots;
export default class GiElephantHead extends SvelteComponentTyped<GiElephantHeadProps, GiElephantHeadEvents, GiElephantHeadSlots> {
}
export {};
