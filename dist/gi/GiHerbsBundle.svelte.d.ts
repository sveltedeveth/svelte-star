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
export type GiHerbsBundleProps = typeof __propDef.props;
export type GiHerbsBundleEvents = typeof __propDef.events;
export type GiHerbsBundleSlots = typeof __propDef.slots;
export default class GiHerbsBundle extends SvelteComponentTyped<GiHerbsBundleProps, GiHerbsBundleEvents, GiHerbsBundleSlots> {
}
export {};
