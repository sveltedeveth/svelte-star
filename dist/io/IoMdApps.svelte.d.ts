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
export type IoMdAppsProps = typeof __propDef.props;
export type IoMdAppsEvents = typeof __propDef.events;
export type IoMdAppsSlots = typeof __propDef.slots;
export default class IoMdApps extends SvelteComponentTyped<IoMdAppsProps, IoMdAppsEvents, IoMdAppsSlots> {
}
export {};
