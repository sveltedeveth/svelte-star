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
export type TiPointOfInterestProps = typeof __propDef.props;
export type TiPointOfInterestEvents = typeof __propDef.events;
export type TiPointOfInterestSlots = typeof __propDef.slots;
export default class TiPointOfInterest extends SvelteComponentTyped<TiPointOfInterestProps, TiPointOfInterestEvents, TiPointOfInterestSlots> {
}
export {};
