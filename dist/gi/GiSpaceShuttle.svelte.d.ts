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
export type GiSpaceShuttleProps = typeof __propDef.props;
export type GiSpaceShuttleEvents = typeof __propDef.events;
export type GiSpaceShuttleSlots = typeof __propDef.slots;
export default class GiSpaceShuttle extends SvelteComponentTyped<GiSpaceShuttleProps, GiSpaceShuttleEvents, GiSpaceShuttleSlots> {
}
export {};
