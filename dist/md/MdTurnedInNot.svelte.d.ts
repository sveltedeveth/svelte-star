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
export type MdTurnedInNotProps = typeof __propDef.props;
export type MdTurnedInNotEvents = typeof __propDef.events;
export type MdTurnedInNotSlots = typeof __propDef.slots;
export default class MdTurnedInNot extends SvelteComponentTyped<MdTurnedInNotProps, MdTurnedInNotEvents, MdTurnedInNotSlots> {
}
export {};
