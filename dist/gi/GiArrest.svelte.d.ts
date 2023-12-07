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
export type GiArrestProps = typeof __propDef.props;
export type GiArrestEvents = typeof __propDef.events;
export type GiArrestSlots = typeof __propDef.slots;
export default class GiArrest extends SvelteComponentTyped<GiArrestProps, GiArrestEvents, GiArrestSlots> {
}
export {};
