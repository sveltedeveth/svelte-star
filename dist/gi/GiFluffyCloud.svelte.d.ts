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
export type GiFluffyCloudProps = typeof __propDef.props;
export type GiFluffyCloudEvents = typeof __propDef.events;
export type GiFluffyCloudSlots = typeof __propDef.slots;
export default class GiFluffyCloud extends SvelteComponentTyped<GiFluffyCloudProps, GiFluffyCloudEvents, GiFluffyCloudSlots> {
}
export {};
