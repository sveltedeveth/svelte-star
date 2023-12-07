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
export type GiCarnivorousPlantProps = typeof __propDef.props;
export type GiCarnivorousPlantEvents = typeof __propDef.events;
export type GiCarnivorousPlantSlots = typeof __propDef.slots;
export default class GiCarnivorousPlant extends SvelteComponentTyped<GiCarnivorousPlantProps, GiCarnivorousPlantEvents, GiCarnivorousPlantSlots> {
}
export {};
