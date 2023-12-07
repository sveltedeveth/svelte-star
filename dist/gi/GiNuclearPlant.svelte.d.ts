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
export type GiNuclearPlantProps = typeof __propDef.props;
export type GiNuclearPlantEvents = typeof __propDef.events;
export type GiNuclearPlantSlots = typeof __propDef.slots;
export default class GiNuclearPlant extends SvelteComponentTyped<GiNuclearPlantProps, GiNuclearPlantEvents, GiNuclearPlantSlots> {
}
export {};
