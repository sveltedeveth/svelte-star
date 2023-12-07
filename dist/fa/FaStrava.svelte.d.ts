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
export type FaStravaProps = typeof __propDef.props;
export type FaStravaEvents = typeof __propDef.events;
export type FaStravaSlots = typeof __propDef.slots;
export default class FaStrava extends SvelteComponentTyped<FaStravaProps, FaStravaEvents, FaStravaSlots> {
}
export {};
