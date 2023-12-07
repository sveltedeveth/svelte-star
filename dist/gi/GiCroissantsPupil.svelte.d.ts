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
export type GiCroissantsPupilProps = typeof __propDef.props;
export type GiCroissantsPupilEvents = typeof __propDef.events;
export type GiCroissantsPupilSlots = typeof __propDef.slots;
export default class GiCroissantsPupil extends SvelteComponentTyped<GiCroissantsPupilProps, GiCroissantsPupilEvents, GiCroissantsPupilSlots> {
}
export {};
