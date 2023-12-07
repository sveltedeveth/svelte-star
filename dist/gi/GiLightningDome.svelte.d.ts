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
export type GiLightningDomeProps = typeof __propDef.props;
export type GiLightningDomeEvents = typeof __propDef.events;
export type GiLightningDomeSlots = typeof __propDef.slots;
export default class GiLightningDome extends SvelteComponentTyped<GiLightningDomeProps, GiLightningDomeEvents, GiLightningDomeSlots> {
}
export {};
