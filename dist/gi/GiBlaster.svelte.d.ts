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
export type GiBlasterProps = typeof __propDef.props;
export type GiBlasterEvents = typeof __propDef.events;
export type GiBlasterSlots = typeof __propDef.slots;
export default class GiBlaster extends SvelteComponentTyped<GiBlasterProps, GiBlasterEvents, GiBlasterSlots> {
}
export {};
