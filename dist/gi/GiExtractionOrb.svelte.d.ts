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
export type GiExtractionOrbProps = typeof __propDef.props;
export type GiExtractionOrbEvents = typeof __propDef.events;
export type GiExtractionOrbSlots = typeof __propDef.slots;
export default class GiExtractionOrb extends SvelteComponentTyped<GiExtractionOrbProps, GiExtractionOrbEvents, GiExtractionOrbSlots> {
}
export {};
