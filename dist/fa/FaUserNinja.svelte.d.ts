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
export type FaUserNinjaProps = typeof __propDef.props;
export type FaUserNinjaEvents = typeof __propDef.events;
export type FaUserNinjaSlots = typeof __propDef.slots;
export default class FaUserNinja extends SvelteComponentTyped<FaUserNinjaProps, FaUserNinjaEvents, FaUserNinjaSlots> {
}
export {};
