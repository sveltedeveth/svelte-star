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
export type GiDistractionProps = typeof __propDef.props;
export type GiDistractionEvents = typeof __propDef.events;
export type GiDistractionSlots = typeof __propDef.slots;
export default class GiDistraction extends SvelteComponentTyped<GiDistractionProps, GiDistractionEvents, GiDistractionSlots> {
}
export {};
