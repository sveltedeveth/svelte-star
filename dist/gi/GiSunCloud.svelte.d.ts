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
export type GiSunCloudProps = typeof __propDef.props;
export type GiSunCloudEvents = typeof __propDef.events;
export type GiSunCloudSlots = typeof __propDef.slots;
export default class GiSunCloud extends SvelteComponentTyped<GiSunCloudProps, GiSunCloudEvents, GiSunCloudSlots> {
}
export {};
