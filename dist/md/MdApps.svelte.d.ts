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
export type MdAppsProps = typeof __propDef.props;
export type MdAppsEvents = typeof __propDef.events;
export type MdAppsSlots = typeof __propDef.slots;
export default class MdApps extends SvelteComponentTyped<MdAppsProps, MdAppsEvents, MdAppsSlots> {
}
export {};
