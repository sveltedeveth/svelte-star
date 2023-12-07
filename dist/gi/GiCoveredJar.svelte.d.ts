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
export type GiCoveredJarProps = typeof __propDef.props;
export type GiCoveredJarEvents = typeof __propDef.events;
export type GiCoveredJarSlots = typeof __propDef.slots;
export default class GiCoveredJar extends SvelteComponentTyped<GiCoveredJarProps, GiCoveredJarEvents, GiCoveredJarSlots> {
}
export {};
