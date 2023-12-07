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
export type GiSpottedBugProps = typeof __propDef.props;
export type GiSpottedBugEvents = typeof __propDef.events;
export type GiSpottedBugSlots = typeof __propDef.slots;
export default class GiSpottedBug extends SvelteComponentTyped<GiSpottedBugProps, GiSpottedBugEvents, GiSpottedBugSlots> {
}
export {};
