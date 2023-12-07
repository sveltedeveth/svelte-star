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
export type GiHospitalCrossProps = typeof __propDef.props;
export type GiHospitalCrossEvents = typeof __propDef.events;
export type GiHospitalCrossSlots = typeof __propDef.slots;
export default class GiHospitalCross extends SvelteComponentTyped<GiHospitalCrossProps, GiHospitalCrossEvents, GiHospitalCrossSlots> {
}
export {};
