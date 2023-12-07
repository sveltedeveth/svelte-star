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
export type GiRobeProps = typeof __propDef.props;
export type GiRobeEvents = typeof __propDef.events;
export type GiRobeSlots = typeof __propDef.slots;
export default class GiRobe extends SvelteComponentTyped<GiRobeProps, GiRobeEvents, GiRobeSlots> {
}
export {};
