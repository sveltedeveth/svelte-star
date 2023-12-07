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
export type GiCloudyForkProps = typeof __propDef.props;
export type GiCloudyForkEvents = typeof __propDef.events;
export type GiCloudyForkSlots = typeof __propDef.slots;
export default class GiCloudyFork extends SvelteComponentTyped<GiCloudyForkProps, GiCloudyForkEvents, GiCloudyForkSlots> {
}
export {};
