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
export type GiAmmoBoxProps = typeof __propDef.props;
export type GiAmmoBoxEvents = typeof __propDef.events;
export type GiAmmoBoxSlots = typeof __propDef.slots;
export default class GiAmmoBox extends SvelteComponentTyped<GiAmmoBoxProps, GiAmmoBoxEvents, GiAmmoBoxSlots> {
}
export {};
