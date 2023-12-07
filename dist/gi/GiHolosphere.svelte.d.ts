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
export type GiHolosphereProps = typeof __propDef.props;
export type GiHolosphereEvents = typeof __propDef.events;
export type GiHolosphereSlots = typeof __propDef.slots;
export default class GiHolosphere extends SvelteComponentTyped<GiHolosphereProps, GiHolosphereEvents, GiHolosphereSlots> {
}
export {};
