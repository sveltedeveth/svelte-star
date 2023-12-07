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
export type FaCloudSunRainProps = typeof __propDef.props;
export type FaCloudSunRainEvents = typeof __propDef.events;
export type FaCloudSunRainSlots = typeof __propDef.slots;
export default class FaCloudSunRain extends SvelteComponentTyped<FaCloudSunRainProps, FaCloudSunRainEvents, FaCloudSunRainSlots> {
}
export {};
