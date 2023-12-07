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
export type MdExposureProps = typeof __propDef.props;
export type MdExposureEvents = typeof __propDef.events;
export type MdExposureSlots = typeof __propDef.slots;
export default class MdExposure extends SvelteComponentTyped<MdExposureProps, MdExposureEvents, MdExposureSlots> {
}
export {};
