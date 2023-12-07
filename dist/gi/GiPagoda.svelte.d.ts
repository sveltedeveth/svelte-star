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
export type GiPagodaProps = typeof __propDef.props;
export type GiPagodaEvents = typeof __propDef.events;
export type GiPagodaSlots = typeof __propDef.slots;
export default class GiPagoda extends SvelteComponentTyped<GiPagodaProps, GiPagodaEvents, GiPagodaSlots> {
}
export {};
