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
export type GiSnowmanProps = typeof __propDef.props;
export type GiSnowmanEvents = typeof __propDef.events;
export type GiSnowmanSlots = typeof __propDef.slots;
export default class GiSnowman extends SvelteComponentTyped<GiSnowmanProps, GiSnowmanEvents, GiSnowmanSlots> {
}
export {};
