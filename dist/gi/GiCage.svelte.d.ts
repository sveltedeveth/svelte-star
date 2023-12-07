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
export type GiCageProps = typeof __propDef.props;
export type GiCageEvents = typeof __propDef.events;
export type GiCageSlots = typeof __propDef.slots;
export default class GiCage extends SvelteComponentTyped<GiCageProps, GiCageEvents, GiCageSlots> {
}
export {};
