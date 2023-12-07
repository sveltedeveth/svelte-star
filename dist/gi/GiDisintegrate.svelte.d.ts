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
export type GiDisintegrateProps = typeof __propDef.props;
export type GiDisintegrateEvents = typeof __propDef.events;
export type GiDisintegrateSlots = typeof __propDef.slots;
export default class GiDisintegrate extends SvelteComponentTyped<GiDisintegrateProps, GiDisintegrateEvents, GiDisintegrateSlots> {
}
export {};
