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
export type GiPoisonCloudProps = typeof __propDef.props;
export type GiPoisonCloudEvents = typeof __propDef.events;
export type GiPoisonCloudSlots = typeof __propDef.slots;
export default class GiPoisonCloud extends SvelteComponentTyped<GiPoisonCloudProps, GiPoisonCloudEvents, GiPoisonCloudSlots> {
}
export {};
