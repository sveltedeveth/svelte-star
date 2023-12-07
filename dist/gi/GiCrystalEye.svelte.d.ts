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
export type GiCrystalEyeProps = typeof __propDef.props;
export type GiCrystalEyeEvents = typeof __propDef.events;
export type GiCrystalEyeSlots = typeof __propDef.slots;
export default class GiCrystalEye extends SvelteComponentTyped<GiCrystalEyeProps, GiCrystalEyeEvents, GiCrystalEyeSlots> {
}
export {};
