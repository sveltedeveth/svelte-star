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
export type GiDinosaurBonesProps = typeof __propDef.props;
export type GiDinosaurBonesEvents = typeof __propDef.events;
export type GiDinosaurBonesSlots = typeof __propDef.slots;
export default class GiDinosaurBones extends SvelteComponentTyped<GiDinosaurBonesProps, GiDinosaurBonesEvents, GiDinosaurBonesSlots> {
}
export {};
