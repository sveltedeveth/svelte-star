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
export type FaSpaceShuttleProps = typeof __propDef.props;
export type FaSpaceShuttleEvents = typeof __propDef.events;
export type FaSpaceShuttleSlots = typeof __propDef.slots;
export default class FaSpaceShuttle extends SvelteComponentTyped<FaSpaceShuttleProps, FaSpaceShuttleEvents, FaSpaceShuttleSlots> {
}
export {};
