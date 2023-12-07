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
export type FaCloudRainProps = typeof __propDef.props;
export type FaCloudRainEvents = typeof __propDef.events;
export type FaCloudRainSlots = typeof __propDef.slots;
export default class FaCloudRain extends SvelteComponentTyped<FaCloudRainProps, FaCloudRainEvents, FaCloudRainSlots> {
}
export {};
