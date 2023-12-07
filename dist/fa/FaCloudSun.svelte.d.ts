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
export type FaCloudSunProps = typeof __propDef.props;
export type FaCloudSunEvents = typeof __propDef.events;
export type FaCloudSunSlots = typeof __propDef.slots;
export default class FaCloudSun extends SvelteComponentTyped<FaCloudSunProps, FaCloudSunEvents, FaCloudSunSlots> {
}
export {};
