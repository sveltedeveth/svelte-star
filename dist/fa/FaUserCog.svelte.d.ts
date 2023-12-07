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
export type FaUserCogProps = typeof __propDef.props;
export type FaUserCogEvents = typeof __propDef.events;
export type FaUserCogSlots = typeof __propDef.slots;
export default class FaUserCog extends SvelteComponentTyped<FaUserCogProps, FaUserCogEvents, FaUserCogSlots> {
}
export {};
