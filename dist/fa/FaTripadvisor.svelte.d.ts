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
export type FaTripadvisorProps = typeof __propDef.props;
export type FaTripadvisorEvents = typeof __propDef.events;
export type FaTripadvisorSlots = typeof __propDef.slots;
export default class FaTripadvisor extends SvelteComponentTyped<FaTripadvisorProps, FaTripadvisorEvents, FaTripadvisorSlots> {
}
export {};
