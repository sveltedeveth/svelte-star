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
export type MdExposureZeroProps = typeof __propDef.props;
export type MdExposureZeroEvents = typeof __propDef.events;
export type MdExposureZeroSlots = typeof __propDef.slots;
export default class MdExposureZero extends SvelteComponentTyped<MdExposureZeroProps, MdExposureZeroEvents, MdExposureZeroSlots> {
}
export {};
