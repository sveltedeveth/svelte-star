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
export type GiLightningMaskProps = typeof __propDef.props;
export type GiLightningMaskEvents = typeof __propDef.events;
export type GiLightningMaskSlots = typeof __propDef.slots;
export default class GiLightningMask extends SvelteComponentTyped<GiLightningMaskProps, GiLightningMaskEvents, GiLightningMaskSlots> {
}
export {};
