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
export type GiExplosiveMaterialsProps = typeof __propDef.props;
export type GiExplosiveMaterialsEvents = typeof __propDef.events;
export type GiExplosiveMaterialsSlots = typeof __propDef.slots;
export default class GiExplosiveMaterials extends SvelteComponentTyped<GiExplosiveMaterialsProps, GiExplosiveMaterialsEvents, GiExplosiveMaterialsSlots> {
}
export {};
