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
export type GiHospitalProps = typeof __propDef.props;
export type GiHospitalEvents = typeof __propDef.events;
export type GiHospitalSlots = typeof __propDef.slots;
export default class GiHospital extends SvelteComponentTyped<GiHospitalProps, GiHospitalEvents, GiHospitalSlots> {
}
export {};
