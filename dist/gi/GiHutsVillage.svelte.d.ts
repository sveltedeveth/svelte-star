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
export type GiHutsVillageProps = typeof __propDef.props;
export type GiHutsVillageEvents = typeof __propDef.events;
export type GiHutsVillageSlots = typeof __propDef.slots;
export default class GiHutsVillage extends SvelteComponentTyped<GiHutsVillageProps, GiHutsVillageEvents, GiHutsVillageSlots> {
}
export {};
