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
export type FaCloudMoonProps = typeof __propDef.props;
export type FaCloudMoonEvents = typeof __propDef.events;
export type FaCloudMoonSlots = typeof __propDef.slots;
export default class FaCloudMoon extends SvelteComponentTyped<FaCloudMoonProps, FaCloudMoonEvents, FaCloudMoonSlots> {
}
export {};
