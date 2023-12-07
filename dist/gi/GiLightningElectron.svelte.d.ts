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
export type GiLightningElectronProps = typeof __propDef.props;
export type GiLightningElectronEvents = typeof __propDef.events;
export type GiLightningElectronSlots = typeof __propDef.slots;
export default class GiLightningElectron extends SvelteComponentTyped<GiLightningElectronProps, GiLightningElectronEvents, GiLightningElectronSlots> {
}
export {};
