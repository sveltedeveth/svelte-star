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
export type GiMedicalPackProps = typeof __propDef.props;
export type GiMedicalPackEvents = typeof __propDef.events;
export type GiMedicalPackSlots = typeof __propDef.slots;
export default class GiMedicalPack extends SvelteComponentTyped<GiMedicalPackProps, GiMedicalPackEvents, GiMedicalPackSlots> {
}
export {};
