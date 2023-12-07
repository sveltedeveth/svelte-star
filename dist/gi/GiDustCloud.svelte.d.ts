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
export type GiDustCloudProps = typeof __propDef.props;
export type GiDustCloudEvents = typeof __propDef.events;
export type GiDustCloudSlots = typeof __propDef.slots;
export default class GiDustCloud extends SvelteComponentTyped<GiDustCloudProps, GiDustCloudEvents, GiDustCloudSlots> {
}
export {};
