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
export type GiGpsProps = typeof __propDef.props;
export type GiGpsEvents = typeof __propDef.events;
export type GiGpsSlots = typeof __propDef.slots;
export default class GiGps extends SvelteComponentTyped<GiGpsProps, GiGpsEvents, GiGpsSlots> {
}
export {};
