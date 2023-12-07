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
export type FaGitkrakenProps = typeof __propDef.props;
export type FaGitkrakenEvents = typeof __propDef.events;
export type FaGitkrakenSlots = typeof __propDef.slots;
export default class FaGitkraken extends SvelteComponentTyped<FaGitkrakenProps, FaGitkrakenEvents, FaGitkrakenSlots> {
}
export {};
