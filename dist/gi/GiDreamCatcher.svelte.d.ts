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
export type GiDreamCatcherProps = typeof __propDef.props;
export type GiDreamCatcherEvents = typeof __propDef.events;
export type GiDreamCatcherSlots = typeof __propDef.slots;
export default class GiDreamCatcher extends SvelteComponentTyped<GiDreamCatcherProps, GiDreamCatcherEvents, GiDreamCatcherSlots> {
}
export {};
