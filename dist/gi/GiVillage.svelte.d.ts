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
export type GiVillageProps = typeof __propDef.props;
export type GiVillageEvents = typeof __propDef.events;
export type GiVillageSlots = typeof __propDef.slots;
export default class GiVillage extends SvelteComponentTyped<GiVillageProps, GiVillageEvents, GiVillageSlots> {
}
export {};
