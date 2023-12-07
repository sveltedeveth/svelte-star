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
export type GiDoctorFaceProps = typeof __propDef.props;
export type GiDoctorFaceEvents = typeof __propDef.events;
export type GiDoctorFaceSlots = typeof __propDef.slots;
export default class GiDoctorFace extends SvelteComponentTyped<GiDoctorFaceProps, GiDoctorFaceEvents, GiDoctorFaceSlots> {
}
export {};
