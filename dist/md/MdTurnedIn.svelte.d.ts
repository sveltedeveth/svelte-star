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
export type MdTurnedInProps = typeof __propDef.props;
export type MdTurnedInEvents = typeof __propDef.events;
export type MdTurnedInSlots = typeof __propDef.slots;
export default class MdTurnedIn extends SvelteComponentTyped<MdTurnedInProps, MdTurnedInEvents, MdTurnedInSlots> {
}
export {};
