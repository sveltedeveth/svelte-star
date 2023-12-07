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
export type GiCloudRingProps = typeof __propDef.props;
export type GiCloudRingEvents = typeof __propDef.events;
export type GiCloudRingSlots = typeof __propDef.slots;
export default class GiCloudRing extends SvelteComponentTyped<GiCloudRingProps, GiCloudRingEvents, GiCloudRingSlots> {
}
export {};
