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
export type IoIosAppsProps = typeof __propDef.props;
export type IoIosAppsEvents = typeof __propDef.events;
export type IoIosAppsSlots = typeof __propDef.slots;
export default class IoIosApps extends SvelteComponentTyped<IoIosAppsProps, IoIosAppsEvents, IoIosAppsSlots> {
}
export {};
