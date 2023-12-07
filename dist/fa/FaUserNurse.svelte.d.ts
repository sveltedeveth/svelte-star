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
export type FaUserNurseProps = typeof __propDef.props;
export type FaUserNurseEvents = typeof __propDef.events;
export type FaUserNurseSlots = typeof __propDef.slots;
export default class FaUserNurse extends SvelteComponentTyped<FaUserNurseProps, FaUserNurseEvents, FaUserNurseSlots> {
}
export {};
