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
export type MdSupervisorAccountProps = typeof __propDef.props;
export type MdSupervisorAccountEvents = typeof __propDef.events;
export type MdSupervisorAccountSlots = typeof __propDef.slots;
export default class MdSupervisorAccount extends SvelteComponentTyped<MdSupervisorAccountProps, MdSupervisorAccountEvents, MdSupervisorAccountSlots> {
}
export {};
