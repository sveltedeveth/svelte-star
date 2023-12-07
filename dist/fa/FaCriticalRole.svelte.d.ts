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
export type FaCriticalRoleProps = typeof __propDef.props;
export type FaCriticalRoleEvents = typeof __propDef.events;
export type FaCriticalRoleSlots = typeof __propDef.slots;
export default class FaCriticalRole extends SvelteComponentTyped<FaCriticalRoleProps, FaCriticalRoleEvents, FaCriticalRoleSlots> {
}
export {};
