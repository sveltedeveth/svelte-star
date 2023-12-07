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
export type GiSonicLightningProps = typeof __propDef.props;
export type GiSonicLightningEvents = typeof __propDef.events;
export type GiSonicLightningSlots = typeof __propDef.slots;
export default class GiSonicLightning extends SvelteComponentTyped<GiSonicLightningProps, GiSonicLightningEvents, GiSonicLightningSlots> {
}
export {};
